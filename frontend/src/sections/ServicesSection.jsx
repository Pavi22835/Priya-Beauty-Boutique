import React from "react";
import { Scissors, Sparkles, Flower2 } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading.jsx";
import ServiceList from "../components/services/ServiceList.jsx";
import { serviceCategories } from "../data/services.js";

const serviceIcons = {
  beauty: Sparkles,
  bridal: Flower2,
  tailoring: Scissors
};

export default function ServicesSection({ t }) {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="services-grid">
          {serviceCategories.map((category, index) => {
            const Icon = serviceIcons[category.id];

            return (
              <article
                className={`service-card ${index === 1 ? "service-card--featured" : ""}`}
                key={category.id}
                data-aos="fade-up"
                data-aos-delay={index * 90}
              >
                <div className="service-card__top">
                  <span className="service-card__icon"><Icon size={24} /></span>
                  <span className="service-card__number">0{index + 1}</span>
                </div>
                <p className="service-card__subtitle">{category.subtitle}</p>
                <h3>{category.title}</h3>
                <p className="service-card__description">{category.description}</p>
                <ServiceList
                  services={category.services}
                  buttonLabel={t.services.button}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
