import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppUrl(phone: string, text: string) {
  const cleanPhone = phone.replace(/\D/g, "");
  return `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(text)}`;
}
