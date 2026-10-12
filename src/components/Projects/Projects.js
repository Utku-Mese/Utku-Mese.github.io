import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FiActivity,
  FiArrowUpRight,
  FiBookOpen,
  FiBox,
  FiBriefcase,
  FiCamera,
  FiCompass,
  FiFileText,
  FiHeart,
  FiLayers,
  FiMonitor,
  FiPackage,
  FiShoppingBag,
  FiSmartphone,
  FiTruck,
  FiUsers,
} from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageContext";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

const copy = {
  en: {
    eyebrow: "SELECTED WORK · 2023—2026",
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
        year: "2025 — 2026",
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
      {
        number: "07",
        title: "Passo Mobile",
        category: "MOBILE · CONTRIBUTION",
        year: "2024",
        accent: "mint",
        icon: <FiSmartphone />,
        description: "Contributed to the revival and technical documentation of a legacy React Native mobile application. I analyzed the existing architecture, clarified its structure and supported the team with implementation-ready documentation.",
        tags: ["React Native", "Architecture review", "Technical documentation"],
        links: [
          { label: "App Store", href: "https://apps.apple.com/tr/app/passo/id1138434517?l=tr" },
          { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.aktifbank.passo&hl=tr" },
        ],
      },
      {
        number: "08",
        title: "Cargo Pre-Acceptance Module",
        category: "WAREHOUSE OPERATIONS",
        year: "2024 — 2025",
        accent: "sky",
        icon: <FiPackage />,
        description: "A mobile workflow that digitizes pre-acceptance and handover for warehouse teams, including delivery report creation and printing, delivery-history tracking and product sorting.",
        tags: ["Flutter", "BLoC", "SQLite", "ZPL"],
        links: [],
      },
      {
        number: "09",
        title: "University Info System for Fırat University",
        category: "EDUCATION PLATFORM",
        year: "2023",
        accent: "warm",
        icon: <FiBookOpen />,
        description: "A university information system for managing and presenting course, student and instructor data through a mobile interface and RESTful backend.",
        tags: ["Flutter", "Node.js", "Express", "MySQL", "REST API"],
        links: [
          { label: "GitHub", href: "https://github.com/Utku-Mese/University-Info-System-For-Firat-University" },
          { label: "Demo", href: "https://youtu.be/MtTINIelL4o?si=S_aubze1I0vg2wJU" },
        ],
      },
      {
        number: "10",
        title: "Gesture-Controlled PC Assistant",
        category: "COMPUTER VISION",
        year: "2023",
        accent: "lime",
        icon: <FiCamera />,
        description: "A computer-vision experiment that recognizes hand gestures in real time and maps them to practical desktop actions such as volume control, automation and browser tasks.",
        tags: ["Python", "MediaPipe", "Selenium", "Computer Vision"],
        links: [
          { label: "GitHub", href: "https://github.com/Utku-Mese/pc-control-with-handGestures" },
          { label: "Demo", href: "https://youtu.be/eW-37hoeuZY?si=bNCBRfoqhrR4qatx" },
        ],
      },
      {
        number: "11",
        title: "Önersene",
        category: "LOCAL SERVICES",
        year: "PRIVATE PRODUCT",
        accent: "orange",
        icon: <FiUsers />,
        description: "A local-services platform that helps customers discover, compare and choose tradespeople and artisans for everyday needs.",
        tags: ["Mobile product", "Local services", "Marketplace"],
        links: [{ label: "Website", href: "https://onersene.com/?i=1" }],
      },
      {
        number: "12",
        title: "Sospac",
        category: "SOCIAL PLATFORM",
        year: "OPEN SOURCE",
        accent: "blue",
        icon: <FiHeart />,
        description: "A social app designed around self-defined spaces where people can gather and share freely.",
        tags: ["Flutter", "Firebase", "GetX", "MVC"],
        links: [{ label: "GitHub", href: "https://github.com/Utku-Mese/Sospac" }],
      },
      {
        number: "13",
        title: "ThreatTracker",
        category: "CYBERSECURITY",
        year: "PRIVATE PRODUCT",
        accent: "sky",
        icon: <FiActivity />,
        description: "A visual exploration tool for following global cyber-attack activity through map-based views, charts and structured listings.",
        tags: ["Cybersecurity", "Data visualization", "Mapping"],
        links: [{ label: "GitHub", href: "https://github.com/Utku-Mese/ThreatTracker" }],
      },
      {
        number: "14",
        title: "SB Courier & Restaurant",
        category: "DELIVERY PLATFORM",
        year: "PRIVATE PRODUCT",
        accent: "warm",
        icon: <FiShoppingBag />,
        description: "An integrated restaurant and courier platform for processing orders, coordinating deliveries and managing the operational flow from one system.",
        tags: ["Flutter", "GetX", "React", "Node.js", "MongoDB"],
        links: [],
      },
      {
        number: "15",
        title: "IDS · Invoice Detection System",
        category: "DOCUMENT INTELLIGENCE",
        year: "INTERNAL TOOL",
        accent: "mint",
        icon: <FiFileText />,
        description: "An internal expense-declaration workflow that reads receipts and invoices, creates a structured dataset and places the extracted information into the declaration—removing repetitive manual entry.",
        tags: ["Receipt scanning", "Data extraction", "Expense automation"],
        links: [{ label: "GitHub", href: "https://github.com/Utku-Mese/IDS-Invoice-Detection-System" }],
      },
    ],
  },
  tr: {
    eyebrow: "SEÇİLİ PROJELER · 2023—2026",
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
        year: "2025 — 2026",
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
      {
        number: "07",
        title: "Passo Mobile",
        category: "MOBİL · KATKI",
        year: "2024",
        accent: "mint",
        icon: <FiSmartphone />,
        description: "Eski nesil React Native mobil uygulamasının yeniden ele alınmasına ve teknik dokümantasyonuna katkı sundum. Mevcut mimariyi analiz ederek yapısını netleştirdim ve ekibin uygulamaya hazır dokümanlarla ilerlemesini destekledim.",
        tags: ["React Native", "Mimari inceleme", "Teknik dokümantasyon"],
        links: [
          { label: "App Store", href: "https://apps.apple.com/tr/app/passo/id1138434517?l=tr" },
          { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.aktifbank.passo&hl=tr" },
        ],
      },
      {
        number: "08",
        title: "Kargo Ön Kabul Modülü",
        category: "DEPO OPERASYONLARI",
        year: "2024 — 2025",
        accent: "sky",
        icon: <FiPackage />,
        description: "Depo ekipleri için ön kabul ve teslim süreçlerini dijitalleştiren; teslim raporu oluşturma ve yazdırma, teslim geçmişi takibi ve ürün ayrıştırma özellikleri sunan mobil iş akışı.",
        tags: ["Flutter", "BLoC", "SQLite", "ZPL"],
        links: [],
      },
      {
        number: "09",
        title: "Fırat Üniversitesi Bilgi Sistemi",
        category: "EĞİTİM PLATFORMU",
        year: "2023",
        accent: "warm",
        icon: <FiBookOpen />,
        description: "Ders, öğrenci ve öğretim elemanı verilerini mobil arayüz ve RESTful backend üzerinden yönetmek ve sunmak için geliştirilen üniversite bilgi sistemi.",
        tags: ["Flutter", "Node.js", "Express", "MySQL", "REST API"],
        links: [
          { label: "GitHub", href: "https://github.com/Utku-Mese/University-Info-System-For-Firat-University" },
          { label: "Demo", href: "https://youtu.be/MtTINIelL4o?si=S_aubze1I0vg2wJU" },
        ],
      },
      {
        number: "10",
        title: "El Hareketleriyle PC Asistanı",
        category: "BİLGİSAYARLI GÖRÜ",
        year: "2023",
        accent: "lime",
        icon: <FiCamera />,
        description: "El hareketlerini gerçek zamanlı algılayıp ses kontrolü, otomasyon ve tarayıcı görevleri gibi pratik masaüstü aksiyonlarına dönüştüren bilgisayarlı görü deneyi.",
        tags: ["Python", "MediaPipe", "Selenium", "Bilgisayarlı görü"],
        links: [
          { label: "GitHub", href: "https://github.com/Utku-Mese/pc-control-with-handGestures" },
          { label: "Demo", href: "https://youtu.be/eW-37hoeuZY?si=bNCBRfoqhrR4qatx" },
        ],
      },
      {
        number: "11",
        title: "Önersene",
        category: "YEREL HİZMETLER",
        year: "ÖZEL ÜRÜN",
        accent: "orange",
        icon: <FiUsers />,
        description: "Müşterilerin gündelik ihtiyaçları için esnaf ve zanaatkârları keşfetmesine, karşılaştırmasına ve seçmesine yardımcı olan yerel hizmetler platformu.",
        tags: ["Mobil ürün", "Yerel hizmetler", "Pazaryeri"],
        links: [{ label: "Web sitesi", href: "https://onersene.com/?i=1" }],
      },
      {
        number: "12",
        title: "Sospac",
        category: "SOSYAL PLATFORM",
        year: "AÇIK KAYNAK",
        accent: "blue",
        icon: <FiHeart />,
        description: "İnsanların kendi sosyal alanlarını oluşturup özgürce paylaşım yapabilmesi fikriyle geliştirilen sosyal uygulama.",
        tags: ["Flutter", "Firebase", "GetX", "MVC"],
        links: [{ label: "GitHub", href: "https://github.com/Utku-Mese/Sospac" }],
      },
      {
        number: "13",
        title: "ThreatTracker",
        category: "SİBER GÜVENLİK",
        year: "ÖZEL ÜRÜN",
        accent: "sky",
        icon: <FiActivity />,
        description: "Küresel siber saldırı aktivitesini harita tabanlı görünümler, grafikler ve yapılandırılmış listeler aracılığıyla incelemeye yarayan görselleştirme aracı.",
        tags: ["Siber güvenlik", "Veri görselleştirme", "Haritalama"],
        links: [{ label: "GitHub", href: "https://github.com/Utku-Mese/ThreatTracker" }],
      },
      {
        number: "14",
        title: "SB Kurye & Restoran",
        category: "TESLİMAT PLATFORMU",
        year: "ÖZEL ÜRÜN",
        accent: "warm",
        icon: <FiShoppingBag />,
        description: "Sipariş işleme, teslimat koordinasyonu ve operasyonel akışları tek sistemden yönetmek için geliştirilen entegre restoran ve kurye platformu.",
        tags: ["Flutter", "GetX", "React", "Node.js", "MongoDB"],
        links: [],
      },
      {
        number: "15",
        title: "IDS · Fatura Tespit Sistemi",
        category: "BELGE ZEKÂSI",
        year: "KURUM İÇİ ARAÇ",
        accent: "mint",
        icon: <FiFileText />,
        description: "Fiş ve faturaları okuyup yapılandırılmış veri seti oluşturan; çıkarılan bilgileri masraf beyanına yerleştirerek tekrarlayan manuel veri girişini ortadan kaldıran kurum içi iş akışı.",
        tags: ["Fiş tarama", "Veri çıkarımı", "Masraf otomasyonu"],
        links: [{ label: "GitHub", href: "https://github.com/Utku-Mese/IDS-Invoice-Detection-System" }],
      },
    ],
  },
};

function Projects() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <main id="main-content" className="page-shell project-section">
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
