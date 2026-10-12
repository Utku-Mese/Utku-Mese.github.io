import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowRight, FiLinkedin, FiMapPin } from "react-icons/fi";
import portrait from "../../Assets/portrait.webp";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useLanguage } from "../../i18n/LanguageContext";

const copy = {
  en: {
    eyebrow: "Software Engineer at NETAŞ",
    title: "Building thoughtful software for",
    titleAccent: "every screen.",
    typePrefix: "I build",
    typeLabel: "Mobile products, IPTV experiences and reliable systems",
    intro: "I’m Mehmet Utku Meşe, a software engineer focused on mobile products, IPTV interfaces and the architecture that keeps them fast, clear and dependable.",
    explore: "Explore my work",
    location: "Ankara, Türkiye",
    experience: "4+ years building products",
    now: "NOW",
    currentProject: "Tivibu IPTV",
    currentProjectDetail: "Portal engineering at NETAŞ",
    craft: "CRAFT",
    craftTitle: "Product + systems",
    craftDetail: "Mobile · TV · Backend",
    portraitAlt: "Portrait of Mehmet Utku Meşe",
  },
  tr: {
    eyebrow: "NETAŞ'ta Yazılım Mühendisi",
    title: "Her ekran için özenli yazılım:",
    titleAccent: "fikirden ürüne.",
    typePrefix: "Geliştiriyorum:",
    typeLabel: "Mobil ürünler, IPTV deneyimleri ve güvenilir sistemler",
    intro: "Ben Mehmet Utku Meşe. Mobil ürünlere, IPTV arayüzlerine ve onları hızlı, anlaşılır, güvenilir kılan yazılım mimarisine odaklanan bir yazılım mühendisiyim.",
    explore: "Projelerimi incele",
    location: "Ankara, Türkiye",
    experience: "4+ yıllık ürün deneyimi",
    now: "ŞİMDİ",
    currentProject: "Tivibu IPTV",
    currentProjectDetail: "NETAŞ'ta portal geliştirme",
    craft: "UZMANLIK",
    craftTitle: "Ürün + sistemler",
    craftDetail: "Mobil · TV · Backend",
    portraitAlt: "Mehmet Utku Meşe portresi",
  },
};

function Home() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <main id="main-content">
      <section className="hero-section" id="home">
        <Particle />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <Container className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              {content.eyebrow}
            </p>
            <h1>
              {content.title} <span>{content.titleAccent}</span>
            </h1>
            <div className="hero-type" aria-label={content.typeLabel}>
              {content.typePrefix} <Type />
            </div>
            <p className="hero-intro">
              {content.intro}
            </p>

            <div className="hero-actions">
              <Link to="/project" className="button button-primary">
                {content.explore} <FiArrowRight aria-hidden="true" />
              </Link>
              <a
                href="https://www.linkedin.com/in/mehmet-utku-mese/"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                <FiLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </div>

            <div className="hero-meta">
              <span><FiMapPin aria-hidden="true" /> {content.location}</span>
              <span>{content.experience}</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-grid" aria-hidden="true" />
              <img src={portrait} alt={content.portraitAlt} />
            </div>
            <div className="floating-note current-note">
              <span>{content.now}</span>
              <strong>{content.currentProject}</strong>
              <small>{content.currentProjectDetail}</small>
            </div>
            <div className="floating-note craft-note">
              <span>{content.craft}</span>
              <strong>{content.craftTitle}</strong>
              <small>{content.craftDetail}</small>
            </div>
          </div>
        </Container>
      </section>

      <Home2 />
    </main>
  );
}

export default Home;
