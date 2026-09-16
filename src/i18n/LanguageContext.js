import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);
const STORAGE_KEY = "portfolio-language";

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (savedLanguage === "tr" || savedLanguage === "en") {
    return savedLanguage;
  }

  return window.navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.title = language === "tr"
      ? "Mehmet Utku Meşe — Yazılım Mühendisi"
      : "Mehmet Utku Meşe — Software Engineer";

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        "content",
        language === "tr"
          ? "Mehmet Utku Meşe; mobil ürünler, IPTV deneyimleri ve güvenilir sistemler geliştiren NETAŞ yazılım mühendisidir."
          : "Mehmet Utku Meşe is a software engineer at NETAŞ building mobile products, IPTV experiences and reliable systems."
      );
    }
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
