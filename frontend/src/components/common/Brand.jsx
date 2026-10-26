
import React from "react";
import { BUSINESS } from "../../data/business.js";

export default function Brand({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand--light" : ""}`}
      href="#home"
      aria-label={BUSINESS.fullName}
    >
      <span className="brand__mark">S</span>
      <span className="brand__text">
        <strong>{BUSINESS.name}</strong>
        <small>BEAUTY & BOUTIQUE</small>
      </span>
    </a>
  );
}
