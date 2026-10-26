import React from "react";
import { useState } from "react";
import { MapPin, Phone, Clock, ArrowUpRight, CheckCircle } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading.jsx";
import Button from "../components/common/Button.jsx";
import { BUSINESS } from "../data/business.js";
import { serviceCategories } from "../data/services.js";
import { whatsappLink } from "../utils/whatsapp.js";

export default function ContactSection({ t }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function updateField(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = [
      "Hello Priya Beauty & Boutique!",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Message: ${form.message || "No additional details"}`
    ].join("\n");

    setSubmitted(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact__intro">
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
          />
        </div>

        <div className="contact__grid">
          <div className="contact__details" data-aos="fade-up">
            <div className="contact-detail">
              <span className="contact-detail__icon"><Phone size={21} /></span>
              <div>
                <h3>{t.contact.phone}</h3>
                <a href={`tel:${BUSINESS.phoneDisplay.replace(/[^\d+]/g, "")}`}>
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail__icon"><MapPin size={21} /></span>
              <div>
                <h3>{t.contact.address}</h3>
                <p>{BUSINESS.address}</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail__icon"><Clock size={21} /></span>
              <div>
                <h3>{t.contact.hours}</h3>
                <p>{BUSINESS.openingHours}</p>
              </div>
            </div>

            <Button
              href={whatsappLink("Hello! I would like to enquire about your services.")}
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.button} <ArrowUpRight size={18} />
            </Button>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="100">
            <h3>Send us an enquiry</h3>
            <p>Fill in your details and continue through WhatsApp.</p>

            <label htmlFor="contact-name">{t.contact.formName}</label>
            <input
              id="contact-name"
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="Enter your name"
              autoComplete="name"
              required
            />

            <label htmlFor="contact-phone">{t.contact.formPhone}</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={updateField}
              placeholder="Enter your phone number"
              autoComplete="tel"
              pattern="[0-9+\s()-]{7,20}"
              required
            />

            <label htmlFor="contact-service">{t.contact.formService}</label>
            <select
              id="contact-service"
              name="service"
              value={form.service}
              onChange={updateField}
              required
            >
              <option value="">{t.contact.servicePlaceholder}</option>
              {serviceCategories.map((category) => (
                <optgroup key={category.id} label={category.title}>
                  {category.services.map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>

            <label htmlFor="contact-message">{t.contact.formMessage}</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder="Date, occasion or other details..."
              rows="3"
            />

            <Button type="submit" className="contact-form__submit">
              {t.contact.submit} <ArrowUpRight size={18} />
            </Button>

            {submitted && (
              <p className="contact-form__success" role="status">
                <CheckCircle size={17} />
                {t.contact.success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
