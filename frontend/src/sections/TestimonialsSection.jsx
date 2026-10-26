import React from "react";
import { Star, Quote } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading.jsx";

const reviews = [
  {
    name: "Happy Customer",
    service: "Beauty Care",
    review: "A warm and welcoming experience. The service felt personal and thoughtful."
  },
  {
    name: "Happy Customer",
    service: "Boutique",
    review: "Loved the attention to detail and the care taken with the finishing."
  },
  {
    name: "Happy Customer",
    service: "Special Occasion",
    review: "A lovely experience from start to finish. Thank you for the care."
  }
];

export default function TestimonialsSection({ t }) {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <article className="testimonial-card" key={`${review.service}-${index}`} data-aos="fade-up" data-aos-delay={index * 90}>
              <Quote className="testimonial-card__quote" size={26} />
              <div className="testimonial-card__stars" aria-label="Sample five-star rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <p>“{review.review}”</p>
              <div className="testimonial-card__person">
                <span className="testimonial-card__avatar">{review.name.charAt(0)}</span>
                <span>
                  <strong>{review.name}</strong>
                  <small>{review.service}</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
