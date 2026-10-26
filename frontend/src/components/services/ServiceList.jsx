import React from "react";
import { ArrowUpRight } from "lucide-react";
import { whatsappLink } from "../../utils/whatsapp.js";

export default function ServiceList({ services, buttonLabel = "Enquire" }) {
  return (
    <ul className="service-list">
      {services.map((service) => (
        <li className="service-list__item" key={service.name}>
          <div>
            <h4>{service.name}</h4>
            <p>{service.price}</p>
          </div>
          <a
            href={whatsappLink(`Hello! I would like to enquire about ${service.name}.`)}
            target="_blank"
            rel="noreferrer"
            aria-label={`${buttonLabel}: ${service.name}`}
          >
            <ArrowUpRight size={19} />
          </a>
        </li>
      ))}
    </ul>
  );
}
