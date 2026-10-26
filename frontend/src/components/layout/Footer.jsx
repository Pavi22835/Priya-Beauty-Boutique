import React from "react";
import { Instagram, Facebook, ArrowUpRight } from "lucide-react";
import Brand from "../common/Brand.jsx";
import { BUSINESS } from "../../data/business.js";

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="container footer__main" data-aos="fade-up">
        <div className="footer__brand">
          <Brand light />
          <p>{t.footer.description}</p>
        </div>

        <div className="footer__links">
          <h3>{t.footer.quickLinks}</h3>
          <a href="#about">{t.nav.about}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#portfolio">{t.nav.portfolio}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>

        <div className="footer__social">
          <h3>{t.footer.follow}</h3>
          <a href={BUSINESS.instagramUrl} target="_blank" rel="noreferrer">
            <Instagram size={18} /> Instagram <ArrowUpRight size={15} />
          </a>
          <a href={BUSINESS.facebookUrl} target="_blank" rel="noreferrer">
            <Facebook size={18} /> Facebook <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {BUSINESS.fullName}. {t.footer.rights}</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
