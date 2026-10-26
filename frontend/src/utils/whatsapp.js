
import { BUSINESS } from "../data/business.js";

export function whatsappLink(message = "Hello! I would like to enquire about your services.") {
  const number = BUSINESS.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message) {
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
}
