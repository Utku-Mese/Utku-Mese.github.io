import React from "react";
import { Container } from "react-bootstrap";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useLanguage } from "../i18n/LanguageContext";

function Footer() {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const content = language === "tr"
    ? { role: "Yazılım mühendisi · Ankara", copyright: "Özenle tasarlandı ve geliştirildi.", writing: "Yazılar" }
    : { role: "Software engineer · Ankara", copyright: "Designed and built with care.", writing: "Writing" };

  return (
    <footer className="footer">
      <Container className="footer-inner">
        <div>
          <strong>Mehmet Utku Meşe</strong>
          <span>{content.role}</span>
        </div>
        <p>© {year} {content.copyright}</p>
        <div className="footer-links">
          <a href="mailto:utkumese.dev@gmail.com">
            <FiMail aria-hidden="true" />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://github.com/Utku-Mese" target="_blank" rel="noreferrer">
            <FiGithub aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/mehmet-utku-mese/" target="_blank" rel="noreferrer">
            <FiLinkedin aria-hidden="true" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://medium.com/@mutkumese" target="_blank" rel="noreferrer" className="footer-writing">{content.writing} <FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
