import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as crypto from 'crypto';

interface TelegramAuthData {
  id: string;
  first_name: string;
  username?: string;
  photo_url?: string;
  auth_date: string;
  hash: string;
}

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  /**
   * Validates Telegram authentication hash (Telegram Login Widget method)
   * @param data - The authentication data from Telegram
   * @param botToken - The bot token from environment variables
   * @returns true if hash is valid, false otherwise
   */
  validateTelegramHash(data: TelegramAuthData, botToken: string): boolean {
    const { hash, ...userData } = data;
    
    // Create data check string (sorted by key, format: key=value\n)
    const dataCheckString = Object.keys(userData)
      .sort()
      .map((key) => `${key}=${userData[key as keyof typeof userData]}`)
      .join('\n');

    // Create secret key from bot token using SHA256
    const secretKey = crypto
      .createHash('sha256')
      .update(botToken)
      .digest();

    // Calculate hash using HMAC-SHA256
    const calculatedHash = crypto
      .createHmac('sha256', secretKey)
      .update(dataCheckString)
      .digest('hex');

    // Check if hash matches
    if (calculatedHash !== hash) {
      return false;
    }

    // Check if auth_date is not too old (24 hours)
    const authDate = parseInt(data.auth_date, 10);
    const currentTime = Math.floor(Date.now() / 1000);
    const timeDiff = currentTime - authDate;

    if (timeDiff > 86400) {
      // 24 hours in seconds
      return false;
    }

    return true;
  }

  /**
   * Authenticates user with Telegram data
   * Creates or updates user in database
   * @param data - The authentication data from Telegram
   * @returns The user object
   */
  async authenticateTelegram(data: TelegramAuthData) {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    
    if (!botToken) {
      throw new UnauthorizedException('Telegram bot token not configured');
    }

    // Validate hash
    if (!this.validateTelegramHash(data, botToken)) {
      throw new UnauthorizedException('Invalid Telegram authentication hash');
    }

    const telegramId = BigInt(data.id);
    const firstName = data.first_name || null;
    const username = data.username || null;

    // Find or create user
    const user = await this.prisma.user.upsert({
      where: { telegramId },
      update: {
        username,
        firstName,
        updatedAt: new Date(),
      },
      create: {
        telegramId,
        username,
        firstName,
      },
    });

    return user;
  }
}

