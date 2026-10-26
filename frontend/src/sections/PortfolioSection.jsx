import React from "react";
import { useState } from "react";
import SectionHeading from "../components/common/SectionHeading.jsx";
import { gallery } from "../data/gallery.js";

export default function PortfolioSection({ t }) {
  const [filter, setFilter] = useState("All");

  const filters = [
    { value: "All", label: t.portfolio.all },
    { value: "Beauty", label: t.portfolio.beauty },
    { value: "Bridal", label: t.portfolio.bridal },
    { value: "Boutique", label: t.portfolio.boutique }
  ];

  const visibleImages =
    filter === "All"
      ? gallery
      : gallery.filter((item) => item.category === filter);

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <SectionHeading
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          description={t.portfolio.description}
        />

        <div className="portfolio-filters" aria-label="Filter gallery">
          {filters.map((item) => (
            <button
              type="button"
              key={item.value}
              className={filter === item.value ? "is-active" : ""}
              onClick={() => setFilter(item.value)}
              aria-pressed={filter === item.value}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {visibleImages.map((item, index) => (
            <article className="portfolio-item" key={item.title} data-aos="fade-up" data-aos-delay={(index % 3) * 80}>
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src =
                    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85";
                }}
              />
              <div className="portfolio-item__caption">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
