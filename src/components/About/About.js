import React from "react";
import { Container } from "react-bootstrap";
import { FiAward, FiBookOpen, FiMapPin, FiUsers } from "react-icons/fi";
import myImg from "../../Assets/meCircle.png";
import { useLanguage } from "../../i18n/LanguageContext";
import Particle from "../Particle";
import Github from "./Github";

const copy = {
  en: {
    eyebrow: "ABOUT ME",
    title: "Curious about the whole system, careful with the details.",
    intro: "I’m Utku, a software engineer in Ankara. My path started with mobile development and grew into product engineering across apps, backend services and IPTV interfaces. I’m happiest when a hard technical constraint becomes a simple user experience.",
    location: "Ankara, Türkiye",
    portraitAlt: "Mehmet Utku Meşe",
    highlightsLabel: "Profile highlights",
    facts: {
      award: "NASA Space Apps Challenge winner",
      graduate: "Software Engineering graduate",
      communityLabel: "COMMUNITY",
      community: "GDG & WTM Elazığ core team",
    },
    careerLabel: "CAREER SNAPSHOT",
    careerTitle: "From mobile foundations to multi-screen products.",
    timeline: [
      {
        period: "CURRENT",
        title: "Software Engineer",
        place: "NETAŞ · Ankara",
        copy: "Developing the portal layer of Tivibu IPTV across live TV, VOD, EPG, playback, DRM-backed streaming and set-top box performance.",
      },
      {
        period: "2024 — 2025",
        title: "Mobile Software Development",
        place: "BDH / NETAŞ ecosystem",
        copy: "Delivered enterprise Flutter products including Emptor Mobile, BoxCoder and a cargo acceptance workflow for field and warehouse teams.",
      },
      {
        period: "2024",
        title: "Mobile Developer Intern",
        place: "Intellium",
        copy: "Built a cross-platform internal portal for Android and iOS, integrated REST services and coordinated the team’s sprint rhythm.",
      },
      {
        period: "2021 — 2025",
        title: "B.Sc. Software Engineering",
        place: "Fırat University · GPA 3.27 / 4.00",
        copy: "Developed a strong foundation in software design, algorithms and product development while contributing to developer communities.",
      },
    ],
    toolkitLabel: "TOOLKIT",
    toolkitTitle: "Technology chosen around the problem.",
    stackGroups: [
      { title: "Product & mobile", items: ["Flutter", "Dart", "Kotlin", "Swift / SwiftUI", "React", "Material Design"] },
      { title: "TV & web", items: ["JavaScript", "JSP", "Java EE", "HTML / CSS", "HLS / DASH", "Widevine / Verimatrix"] },
      { title: "Services & data", items: ["Spring Boot", "Node.js", "REST APIs", "WebSocket", "MongoDB", "Firebase", "SQL"] },
      { title: "Ways of working", items: ["Clean Architecture", "MVC / MVVM", "BLoC", "GetX", "SOLID", "Scrum", "Git"] },
    ],
  },
  tr: {
    eyebrow: "HAKKIMDA",
    title: "Bütün sistemi merak eden, ayrıntılara özen gösteren.",
    intro: "Ben Utku, Ankara'da yaşayan bir yazılım mühendisiyim. Mobil geliştirmeyle başlayan yolculuğum; uygulamalar, backend servisleri ve IPTV arayüzleri boyunca ürün mühendisliğine dönüştü. Zorlu bir teknik kısıtı sade bir kullanıcı deneyimine çevirdiğimde en iyi işimi yaptığıma inanıyorum.",
    location: "Ankara, Türkiye",
    portraitAlt: "Mehmet Utku Meşe",
    highlightsLabel: "Profil öne çıkanları",
    facts: {
      award: "NASA Space Apps Challenge birincisi",
      graduate: "Yazılım Mühendisliği mezunu",
      communityLabel: "TOPLULUK",
      community: "GDG & WTM Elazığ çekirdek ekip üyesi",
    },
    careerLabel: "KARİYER ÖZETİ",
    careerTitle: "Mobil temellerden çok ekranlı ürünlere.",
    timeline: [
      {
        period: "GÜNCEL",
        title: "Yazılım Mühendisi",
        place: "NETAŞ · Ankara",
        copy: "Tivibu IPTV'nin portal katmanında canlı TV, VOD, EPG, oynatma, DRM destekli yayın ve set-top box performansı üzerine çalışıyorum.",
      },
      {
        period: "2024 — 2025",
        title: "Mobil Yazılım Geliştirme",
        place: "BDH / NETAŞ ekosistemi",
        copy: "Saha ve depo ekipleri için Emptor Mobile, BoxCoder ve kargo kabul akışı dahil kurumsal Flutter ürünleri geliştirdim.",
      },
      {
        period: "2024",
        title: "Mobil Geliştirici Stajyeri",
        place: "Intellium",
        copy: "Android ve iOS için çoklu platform şirket içi portal geliştirdim, REST servislerini entegre ettim ve ekibin sprint sürecini koordine ettim.",
      },
      {
        period: "2021 — 2025",
        title: "Yazılım Mühendisliği Lisans",
        place: "Fırat Üniversitesi · AGNO 3.27 / 4.00",
        copy: "Geliştirici topluluklarına katkı sunarken yazılım tasarımı, algoritmalar ve ürün geliştirme alanlarında güçlü bir temel edindim.",
      },
    ],
    toolkitLabel: "TEKNOLOJİLER",
    toolkitTitle: "Probleme göre seçilen teknoloji.",
    stackGroups: [
      { title: "Ürün & mobil", items: ["Flutter", "Dart", "Kotlin", "Swift / SwiftUI", "React", "Material Design"] },
      { title: "TV & web", items: ["JavaScript", "JSP", "Java EE", "HTML / CSS", "HLS / DASH", "Widevine / Verimatrix"] },
      { title: "Servisler & veri", items: ["Spring Boot", "Node.js", "REST API'ler", "WebSocket", "MongoDB", "Firebase", "SQL"] },
      { title: "Çalışma biçimi", items: ["Clean Architecture", "MVC / MVVM", "BLoC", "GetX", "SOLID", "Scrum", "Git"] },
    ],
  },
};

function About() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <main className="page-shell about-section">
      <Particle />
      <Container>
        <header className="about-hero">
          <div className="about-hero-copy">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
            <div className="about-location"><FiMapPin aria-hidden="true" /> {content.location}</div>
          </div>
          <div className="about-portrait">
            <img src={myImg} alt={content.portraitAlt} />
          </div>
        </header>

        <section className="about-facts" aria-label={content.highlightsLabel}>
          <article>
            <FiAward aria-hidden="true" />
            <span>2022</span>
            <strong>{content.facts.award}</strong>
          </article>
          <article>
            <FiBookOpen aria-hidden="true" />
            <span>2025</span>
            <strong>{content.facts.graduate}</strong>
          </article>
          <article>
            <FiUsers aria-hidden="true" />
            <span>{content.facts.communityLabel}</span>
            <strong>{content.facts.community}</strong>
          </article>
        </section>

        <section className="about-block career-block">
          <div className="about-block-heading">
            <p className="eyebrow">{content.careerLabel}</p>
            <h2>{content.careerTitle}</h2>
          </div>
          <div className="career-timeline">
            {content.timeline.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.title}`}>
                <span className="timeline-period">{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <strong>{item.place}</strong>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-block stack-block">
          <div className="about-block-heading">
            <p className="eyebrow">{content.toolkitLabel}</p>
            <h2>{content.toolkitTitle}</h2>
          </div>
          <div className="stack-groups">
            {content.stackGroups.map((group) => (
              <article className="stack-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <Github />
      </Container>
    </main>
  );
}

export default About;
