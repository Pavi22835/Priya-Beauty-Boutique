import React from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../utils/whatsapp.js";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink("Hello! I would like to know more about your services.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={25} />
      <span>WhatsApp</span>
    </a>
  );
}
