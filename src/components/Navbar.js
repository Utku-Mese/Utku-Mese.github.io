import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../i18n/LanguageContext";

const copy = {
  en: {
    role: "Software engineer",
    writing: "Writing",
    navItems: [
      { to: "/", label: "Home", end: true },
      { to: "/project", label: "Work" },
      { to: "/about", label: "About" },
      { to: "/resume", label: "CV" },
    ],
  },
  tr: {
    role: "Yazılım mühendisi",
    writing: "Yazılar",
    navItems: [
      { to: "/", label: "Ana Sayfa", end: true },
      { to: "/project", label: "Projeler" },
      { to: "/about", label: "Hakkımda" },
      { to: "/resume", label: "CV" },
    ],
  },
};

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const content = copy[language];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={`site-nav ${isScrolled ? "is-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <span className="brand-logo-frame" aria-hidden="true">
            <img
              className="brand-logo"
              src={`${process.env.PUBLIC_URL}/brand.png`}
              alt=""
            />
          </span>
          <span className="brand-copy">
            <strong>Utku Meşe</strong>
            <small>{content.role}</small>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="portfolio-navigation"
          aria-expanded={expanded}
          label={language === "tr" ? "Menüyü aç veya kapat" : "Open or close the menu"}
          onClick={() => setExpanded((value) => !value)}
        >
          <span />
          <span />
        </Navbar.Toggle>

        <Navbar.Collapse id="portfolio-navigation">
          <Nav className="ms-auto align-items-md-center">
            {content.navItems.map((item) => (
              <Nav.Link
                as={NavLink}
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setExpanded(false)}
              >
                {item.label}
              </Nav.Link>
            ))}
            <div
              className="language-switch"
              role="group"
              aria-label={language === "tr" ? "Dil seçimi" : "Language"}
            >
              <button
                type="button"
                className={language === "tr" ? "active" : ""}
                aria-label="Türkçe"
                aria-pressed={language === "tr"}
                onClick={() => setLanguage("tr")}
              >
                TR
              </button>
              <button
                type="button"
                className={language === "en" ? "active" : ""}
                aria-label="English"
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
            </div>
            <a
              className="nav-writing-link"
              href="https://medium.com/@mutkumese"
              target="_blank"
              rel="noreferrer"
            >
              {content.writing} <FiArrowUpRight aria-hidden="true" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
