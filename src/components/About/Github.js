import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useLanguage } from "../../i18n/LanguageContext";

function Github() {
  const { language } = useLanguage();
  const content = language === "tr"
    ? { label: "AÇIK KAYNAK RİTMİ", title: "Üretmenin ve öğrenmenin sürekliliği." }
    : { label: "OPEN SOURCE RHYTHM", title: "A consistent practice of building and learning." };

  return (
    <section className="github-panel" aria-labelledby="github-title">
      <div>
        <p className="eyebrow">{content.label}</p>
        <h2 id="github-title">{content.title}</h2>
      </div>
      <div className="github-calendar-wrap">
        <GitHubCalendar
          username="Utku-Mese"
          blockSize={13}
          blockMargin={5}
          color="#9af7db"
          fontSize={13}
        />
      </div>
    </section>
  );
}

export default Github;
