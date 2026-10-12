import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../i18n/LanguageContext";

function Type() {
  const { language } = useLanguage();
  const strings = language === "tr"
    ? ["mobil ürünler.", "IPTV deneyimleri.", "güvenilir sistemler."]
    : ["mobile products.", "IPTV experiences.", "reliable systems."];

  return (
    <Typewriter
      key={language}
      options={{
        strings,
        autoStart: true,
        loop: true,
        delay: 54,
        deleteSpeed: 28,
      }}
    />
  );
}

export default Type;
