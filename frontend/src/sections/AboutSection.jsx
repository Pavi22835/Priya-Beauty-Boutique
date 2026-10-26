import React from "react";
import { Check, Heart } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading.jsx";
import Button from "../components/common/Button.jsx";

export default function AboutSection({ t }) {
  const points = [t.about.point1, t.about.point2, t.about.point3];

  return (
    <section className="section about-section" id="about">
      <div className="container about__grid">
        <div className="about__visual" data-aos="fade-up">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85"
            alt="Beauty care at Priya Beauty and Boutique"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src =
                "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85";
            }}
          />
          <div className="about__stamp">
            <Heart size={19} />
            <span>Beauty with care</span>
          </div>
        </div>

        <div className="about__content" data-aos="fade-up" data-aos-delay="100">
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
            align="left"
          />

          <ul className="about__points">
            {points.map((point) => (
              <li key={point}>
                <span><Check size={16} /></span>
                {point}
              </li>
            ))}
          </ul>

          <Button href="#contact" variant="secondary">
            {t.about.button}
          </Button>
        </div>
      </div>
    </section>
  );
}
