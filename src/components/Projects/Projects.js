import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FiArrowUpRight,
  FiBox,
  FiBriefcase,
  FiCompass,
  FiLayers,
  FiMonitor,
  FiTruck,
} from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageContext";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

const copy = {
  en: {
    eyebrow: "SELECTED WORK · 2024—2026",
    title: "Products built for the places people actually use them.",
    intro: "A curated set of mobile, television and enterprise products. Some are open source; others are commercial systems described at a high level to respect project confidentiality.",
    technologiesLabel: "technologies",
    archiveLabel: "MORE EXPLORATIONS",
    archiveTitle: "University systems, computer vision and early mobile experiments.",
    archiveButton: "Browse GitHub archive",
    projects: [
      {
        number: "01",
        title: "Tivibu IPTV",
        category: "IPTV PLATFORM",
        year: "2025 — NOW",
        accent: "mint",
        icon: <FiMonitor />,
        description: "Portal features and interaction flows for Türk Telekom’s IPTV platform. My work spans live TV, VOD, EPG, player controls, search, PPV and performance tuning on constrained set-top box hardware.",
        tags: ["JavaScript", "JSP / Java EE", "HLS / DASH", "DRM", "REST API"],
        links: [],
      },
      {
        number: "02",
        title: "Naviscope",
        category: "OPEN SOURCE",
        year: "2026",
        accent: "sky",
        icon: <FiCompass />,
        description: "A Flutter mobile dashboard that turns location into an observable system—showing GNSS fix quality, accuracy, satellite signal strength, skyplot geometry and live health metrics.",
        tags: ["Flutter", "Dart", "GNSS", "CoreLocation", "Native Android"],
        links: [
          { label: "GitHub", href: "https://github.com/Utku-Mese/naviscope" },
          { label: "Case note", href: "https://medium.com/@mutkumese/gnss-ve-konum-servisleri-ger%C3%A7ekte-nas%C4%B1l-%C3%A7al%C4%B1%C5%9F%C4%B1r-7c9ac4ed998b" },
        ],
      },
      {
        number: "03",
        title: "Bisevk",
        category: "LOGISTICS PRODUCT",
        year: "2025 — NOW",
        accent: "warm",
        icon: <FiTruck />,
        description: "A mobile and web freight marketplace, originally launched as Yükümü Al, that connects load owners with carriers through offers, messaging, notifications, location flows and secure operations.",
        tags: ["Flutter", "BLoC", "React", "Spring Boot", "MongoDB", "WebSocket"],
        links: [{ label: "App Store", href: "https://apps.apple.com/fi/app/bisevk/id6751422750" }],
      },
      {
        number: "04",
        title: "Emptor Mobile",
        category: "ENTERPRISE MOBILE",
        year: "2024",
        accent: "lime",
        icon: <FiBriefcase />,
        description: "A modular field-operations application for work orders, inventory requests and end-to-end process tracking. I contributed to modernizing the Ionic product into a maintainable Flutter experience.",
        tags: ["Flutter", "Ionic", "GetX", "REST API", "ZPL"],
        links: [],
      },
      {
        number: "05",
        title: "BoxCoder",
        category: "INDUSTRIAL TOOLING",
        year: "2025",
        accent: "orange",
        icon: <FiBox />,
        description: "A bulk barcode-printing application for Zebra printers, supporting Bluetooth connectivity, device scanners, camera input, print configuration and efficient warehouse workflows.",
        tags: ["Flutter", "GetX", "Bluetooth", "ZPL", "Mobile Scanner"],
        links: [],
      },
      {
        number: "06",
        title: "Portal Intellium Mobile",
        category: "CROSS-PLATFORM",
        year: "2024",
        accent: "blue",
        icon: <FiLayers />,
        description: "A ground-up mobile adaptation of an internal company portal, delivered on Android and iOS. I handled app architecture, REST integrations and sprint coordination as Scrum Master.",
        tags: ["Flutter", "GetX", "REST API", ".NET", "Scrum"],
        links: [],
      },
    ],
  },
  tr: {
    eyebrow: "SEÇİLİ PROJELER · 2024—2026",
    title: "İnsanların gerçekten kullandığı alanlar için geliştirilen ürünler.",
    intro: "Mobil, televizyon ve kurumsal ürünlerden seçili bir koleksiyon. Bazıları açık kaynak; bazıları ise proje gizliliğini korumak amacıyla genel hatlarıyla anlattığım ticari sistemlerdir.",
    technologiesLabel: "teknolojileri",
    archiveLabel: "DİĞER ÇALIŞMALAR",
    archiveTitle: "Üniversite sistemleri, bilgisayarlı görü ve ilk mobil deneyler.",
    archiveButton: "GitHub arşivini incele",
    projects: [
      {
        number: "01",
        title: "Tivibu IPTV",
        category: "IPTV PLATFORMU",
        year: "2025 — GÜNÜMÜZ",
        accent: "mint",
        icon: <FiMonitor />,
        description: "Türk Telekom'un IPTV platformu için portal özellikleri ve etkileşim akışları. Canlı TV, VOD, EPG, oynatıcı kontrolleri, arama, PPV ve kısıtlı set-top box donanımlarında performans iyileştirmeleri üzerinde çalışıyorum.",
        tags: ["JavaScript", "JSP / Java EE", "HLS / DASH", "DRM", "REST API"],
        links: [],
      },
      {
        number: "02",
        title: "Naviscope",
        category: "AÇIK KAYNAK",
        year: "2026",
        accent: "sky",
        icon: <FiCompass />,
        description: "GNSS fix kalitesi, doğruluk, uydu sinyal gücü, skyplot geometrisi ve canlı sağlık metriklerini göstererek konumu gözlemlenebilir bir sisteme dönüştüren Flutter mobil uygulaması.",
        tags: ["Flutter", "Dart", "GNSS", "CoreLocation", "Native Android"],
        links: [
          { label: "GitHub", href: "https://github.com/Utku-Mese/naviscope" },
          { label: "Teknik yazı", href: "https://medium.com/@mutkumese/gnss-ve-konum-servisleri-ger%C3%A7ekte-nas%C4%B1l-%C3%A7al%C4%B1%C5%9F%C4%B1r-7c9ac4ed998b" },
        ],
      },
      {
        number: "03",
        title: "Bisevk",
        category: "LOJİSTİK ÜRÜNÜ",
        year: "2025 — GÜNÜMÜZ",
        accent: "warm",
        icon: <FiTruck />,
        description: "Yükümü Al adıyla hayata geçirilen; yük sahipleriyle nakliyecileri ilanlar, teklifler, mesajlaşma, bildirimler ve konum akışları üzerinden buluşturan mobil ve web tabanlı lojistik pazaryeri.",
        tags: ["Flutter", "BLoC", "React", "Spring Boot", "MongoDB", "WebSocket"],
        links: [{ label: "App Store", href: "https://apps.apple.com/fi/app/bisevk/id6751422750" }],
      },
      {
        number: "04",
        title: "Emptor Mobile",
        category: "KURUMSAL MOBİL",
        year: "2024",
        accent: "lime",
        icon: <FiBriefcase />,
        description: "İş emirleri, envanter talepleri ve uçtan uca operasyon takibi için modüler saha uygulaması. Ionic ürününün sürdürülebilir bir Flutter deneyimine modernize edilmesine katkı sağladım.",
        tags: ["Flutter", "Ionic", "GetX", "REST API", "ZPL"],
        links: [],
      },
      {
        number: "05",
        title: "BoxCoder",
        category: "ENDÜSTRİYEL ARAÇ",
        year: "2025",
        accent: "orange",
        icon: <FiBox />,
        description: "Zebra yazıcılar için Bluetooth bağlantısı, cihaz barkod okuyucusu, kamera girişi, baskı ayarları ve verimli depo akışları sunan toplu barkod yazdırma uygulaması.",
        tags: ["Flutter", "GetX", "Bluetooth", "ZPL", "Mobile Scanner"],
        links: [],
      },
      {
        number: "06",
        title: "Portal Intellium Mobile",
        category: "ÇOKLU PLATFORM",
        year: "2024",
        accent: "blue",
        icon: <FiLayers />,
        description: "Şirket içi web portalının sıfırdan geliştirilen ve Android ile iOS'a sunulan mobil uyarlaması. Uygulama mimarisi, REST entegrasyonları ve Scrum Master olarak sprint koordinasyonunu üstlendim.",
        tags: ["Flutter", "GetX", "REST API", ".NET", "Scrum"],
        links: [],
      },
    ],
  },
};

function Projects() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <main className="page-shell project-section">
      <Particle />
      <Container>
        <header className="page-hero">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
        </header>

        <Row className="project-grid">
          {content.projects.map((project) => (
            <Col lg={6} key={project.title}>
              <ProjectCard {...project} technologiesLabel={content.technologiesLabel} />
            </Col>
          ))}
        </Row>

        <div className="project-archive">
          <div>
            <p className="eyebrow">{content.archiveLabel}</p>
            <h2>{content.archiveTitle}</h2>
          </div>
          <a href="https://github.com/Utku-Mese?tab=repositories" target="_blank" rel="noreferrer" className="button button-secondary">
            {content.archiveButton} <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </Container>
    </main>
  );
}

export default Projects;
