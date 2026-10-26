
import { useState } from "react";
import { translations } from "../data/translations.js";

export function useLanguage() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "ta" : "en"));
  };

  return {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language]
  };
}
