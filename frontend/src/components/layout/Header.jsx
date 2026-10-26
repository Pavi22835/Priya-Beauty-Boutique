import React from "react";
import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import Brand from "../common/Brand.jsx";
import Button from "../common/Button.jsx";
import { whatsappLink } from "../../utils/whatsapp.js";

export default function Header({ t, language, toggleLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#contact", label: t.nav.contact }
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header__inner">
        <Brand />

        <nav className={`header__nav ${menuOpen ? "is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <button
            className="language-toggle"
            type="button"
            onClick={toggleLanguage}
            aria-label="Change language"
          >
            <Languages size={17} />
            {language === "en" ? "தமிழ்" : "English"}
          </button>
          <Button
            href={whatsappLink("Hello! I would like to book an appointment.")}
            className="header__book"
            target="_blank"
            rel="noreferrer"
          >
            {t.common.bookNow}
          </Button>
        </nav>

        <button
          className="header__menu"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}
