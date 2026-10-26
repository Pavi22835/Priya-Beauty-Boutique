import React from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import Button from "../components/common/Button.jsx";
import { whatsappLink } from "../utils/whatsapp.js";

export default function HeroSection({ t }) {
  return (
    <section className="hero" id="home">
      <div className="hero__wash" />
      <div className="container hero__grid">
        <div className="hero__content" data-aos="fade-up">
          <div className="hero__eyebrow">
            <Sparkles size={16} />
            <span>{t.hero.eyebrow}</span>
          </div>

          <h1>{t.hero.title}</h1>
          <p className="hero__description">{t.hero.description}</p>

          <div className="hero__actions">
            <Button
              href={whatsappLink("Hello! I would like to book an appointment.")}
              target="_blank"
              rel="noreferrer"
            >
              {t.hero.primary} <ArrowUpRight size={18} />
            </Button>
            <Button href="#services" variant="secondary">
              {t.hero.secondary}
            </Button>
          </div>

          <div className="hero__note">
            <span className="hero__note-line" />
            <span>{t.hero.note}</span>
          </div>
        </div>

        <div className="hero__visual" data-aos="fade-up" data-aos-delay="100">
          <div className="hero__image-frame">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
              alt="Elegant salon interior at Priya Beauty and Boutique"
              fetchpriority="high"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src =
                  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85";
              }}
            />
          </div>
          <div className="hero__floating-note">
            <span className="hero__floating-icon"><Sparkles size={20} /></span>
            <span>
              <strong>Made with care</strong>
              <small>For your special moments</small>
            </span>
          </div>
          <span className="hero__decor hero__decor--one" />
          <span className="hero__decor hero__decor--two" />
        </div>
      </div>

      <a className="hero__scroll" href="#about">
        <span>Discover more</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}
