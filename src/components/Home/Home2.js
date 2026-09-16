import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMonitor,
  FiPenTool,
  FiSmartphone,
} from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageContext";

const copy = {
  en: {
    howIWork: "HOW I WORK",
    approachTitle: "Engineering is a product discipline.",
    approachCopy: "From a handheld device to a living-room screen, I care about the complete experience: useful flows, maintainable code and the small performance details users immediately feel.",
    capabilities: [
      {
        icon: FiSmartphone,
        title: "Multi-platform delivery",
        copy: "Flutter, Kotlin and Swift experience for products that feel native on every device.",
      },
      {
        icon: FiMonitor,
        title: "Performance under constraints",
        copy: "Responsive IPTV experiences designed for set-top boxes, streaming and real-world hardware limits.",
      },
      {
        icon: FiPenTool,
        title: "Architecture with intent",
        copy: "Clean boundaries, pragmatic patterns and APIs that help teams keep shipping with confidence.",
      },
    ],
    selectedWorkLabel: "SELECTED WORK",
    selectedWorkTitle: "Products with real-world reach.",
    viewAll: "View all projects",
    selectedWork: [
      {
        number: "01",
        title: "Tivibu IPTV",
        meta: "IPTV · NETAŞ · Current",
        copy: "Portal features and playback experiences for a large-scale television platform.",
      },
      {
        number: "02",
        title: "Naviscope",
        meta: "Flutter · GNSS · Open source",
        copy: "A mobile dashboard that makes satellite signal quality and location confidence visible.",
      },
      {
        number: "03",
        title: "Bisevk",
        meta: "Mobile + web · Logistics",
        copy: "A two-sided freight platform connecting load owners and carriers through a transparent workflow.",
      },
    ],
    connectLabel: "LET’S CONNECT",
    connectTitle: "Have a product worth building?",
    connectCopy: "I’m always happy to exchange ideas about mobile, TV and product engineering.",
    sendEmail: "Send an email",
  },
  tr: {
    howIWork: "NASIL ÇALIŞIYORUM",
    approachTitle: "Mühendislik, ürün disiplininin bir parçasıdır.",
    approachCopy: "Elde taşınan bir cihazdan salon ekranına kadar bütün deneyimi önemsiyorum: işe yarayan akışlar, sürdürülebilir kod ve kullanıcının hemen hissettiği küçük performans ayrıntıları.",
    capabilities: [
      {
        icon: FiSmartphone,
        title: "Çoklu platform geliştirme",
        copy: "Her cihazda doğal hissettiren ürünler için Flutter, Kotlin ve Swift deneyimi.",
      },
      {
        icon: FiMonitor,
        title: "Kısıtlar altında performans",
        copy: "Set-top box cihazları, yayın akışları ve gerçek donanım sınırları için hızlı IPTV deneyimleri.",
      },
      {
        icon: FiPenTool,
        title: "Amaca yönelik mimari",
        copy: "Ekiplerin güvenle geliştirmeye devam edebilmesi için temiz sınırlar, pragmatik desenler ve sağlam API'ler.",
      },
    ],
    selectedWorkLabel: "SEÇİLİ PROJELER",
    selectedWorkTitle: "Gerçek dünyaya dokunan ürünler.",
    viewAll: "Tüm projeleri gör",
    selectedWork: [
      {
        number: "01",
        title: "Tivibu IPTV",
        meta: "IPTV · NETAŞ · Güncel",
        copy: "Büyük ölçekli bir televizyon platformu için portal özellikleri ve oynatma deneyimleri.",
      },
      {
        number: "02",
        title: "Naviscope",
        meta: "Flutter · GNSS · Açık kaynak",
        copy: "Uydu sinyal kalitesini ve konum güvenilirliğini görünür kılan mobil kontrol paneli.",
      },
      {
        number: "03",
        title: "Bisevk",
        meta: "Mobil + web · Lojistik",
        copy: "Yük sahipleriyle nakliyecileri şeffaf bir süreçte buluşturan çift taraflı lojistik platformu.",
      },
    ],
    connectLabel: "İLETİŞİM",
    connectTitle: "Geliştirmeye değer bir fikriniz mi var?",
    connectCopy: "Mobil, TV ve ürün mühendisliği üzerine fikir alışverişine her zaman açığım.",
    sendEmail: "E-posta gönder",
  },
};

function Home2() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <>
      <section className="section home-intro-section">
        <Container>
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{content.howIWork}</p>
              <h2>{content.approachTitle}</h2>
            </div>
            <p>{content.approachCopy}</p>
          </div>

          <div className="capability-grid">
            {content.capabilities.map(({ icon: Icon, title, copy: capabilityCopy }) => (
              <article className="capability-card" key={title}>
                <span className="capability-icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{capabilityCopy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section selected-work-section">
        <Container>
          <div className="section-heading inline-heading">
            <div>
              <p className="eyebrow">{content.selectedWorkLabel}</p>
              <h2>{content.selectedWorkTitle}</h2>
            </div>
            <Link className="text-link" to="/project">
              {content.viewAll} <FiArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="work-list">
            {content.selectedWork.map((project) => (
              <Link to="/project" className="work-row" key={project.title}>
                <span className="work-number">{project.number}</span>
                <div>
                  <p>{project.meta}</p>
                  <h3>{project.title}</h3>
                </div>
                <p className="work-summary">{project.copy}</p>
                <FiArrowRight className="work-arrow" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section contact-strip-section">
        <Container>
          <div className="contact-strip">
            <div>
              <p className="eyebrow">{content.connectLabel}</p>
              <h2>{content.connectTitle}</h2>
              <p>{content.connectCopy}</p>
            </div>
            <div className="contact-actions">
              <a href="mailto:utkumese.dev@gmail.com" className="button button-primary">
                <FiMail aria-hidden="true" /> {content.sendEmail}
              </a>
              <a href="https://github.com/Utku-Mese" target="_blank" rel="noreferrer" className="round-link" aria-label="GitHub">
                <FiGithub aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/mehmet-utku-mese/" target="_blank" rel="noreferrer" className="round-link" aria-label="LinkedIn">
                <FiLinkedin aria-hidden="true" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home2;
