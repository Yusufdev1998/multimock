import {
  Controller,
  Get,
  Query,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from './auth.service';

interface TelegramCallbackQuery {
  id: string;
  first_name: string;
  username?: string;
  photo_url?: string;
  auth_date: string;
  hash: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('telegram/callback')
  async telegramCallback(
    @Query() query: TelegramCallbackQuery,
    @Res() res: Response,
  ) {
    try {
      // Validate required fields
      if (!query.id || !query.first_name || !query.auth_date || !query.hash) {
        throw new UnauthorizedException('Missing required authentication data');
      }

      // Authenticate user
      const user = await this.authService.authenticateTelegram({
        id: query.id,
        first_name: query.first_name,
        username: query.username,
        photo_url: query.photo_url,
        auth_date: query.auth_date,
        hash: query.hash,
      });

      // For now, redirect to a success page or return user data
      // You can implement JWT token generation here if needed
      // For simplicity, we'll redirect to the frontend with a success message
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

      // You can also set a cookie or session here
      res.redirect(`${frontendUrl}/me?success=true&userId=${user.id}`);
    } catch (error) {
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
      res.redirect(`${frontendUrl}/login?error=authentication_failed`);
    }
  }
}
