"use client";

import { useEffect, useRef } from "react";

interface TelegramLoginProps {
  botName: string;
  authUrl: string;
  size?: "large" | "medium" | "small";
  requestAccess?: "write" | "read";
  className?: string;
}

export function TelegramLogin({
  botName,
  authUrl,
  size = "medium",
  requestAccess = "write",
  className = "",
}: TelegramLoginProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear the container first
    containerRef.current.innerHTML = "";

    // Create the script tag exactly as Telegram expects
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", botName);
    script.setAttribute("data-size", size);
    script.setAttribute("data-auth-url", authUrl);
    script.setAttribute("data-request-access", requestAccess);

    // Debug logging
    script.onload = () => {
      console.log("Telegram widget script loaded");
    };

    script.onerror = () => {
      console.error("Failed to load Telegram widget script");
    };

    // Append to container
    containerRef.current.appendChild(script);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [botName, authUrl, size, requestAccess]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minHeight: "40px" }}
    />
  );
}
