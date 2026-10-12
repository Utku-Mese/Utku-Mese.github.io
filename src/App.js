import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";

const pageTitles = {
  en: {
    "/": "Mehmet Utku Meşe — Software Engineer",
    "/project": "Work — Mehmet Utku Meşe",
    "/about": "About — Mehmet Utku Meşe",
    "/resume": "CV — Mehmet Utku Meşe",
  },
  tr: {
    "/": "Mehmet Utku Meşe — Yazılım Mühendisi",
    "/project": "Projeler — Mehmet Utku Meşe",
    "/about": "Hakkımda — Mehmet Utku Meşe",
    "/resume": "CV — Mehmet Utku Meşe",
  },
};

function DocumentTitle() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const titles = pageTitles[language] || pageTitles.en;
    document.title = titles[pathname] || titles["/"];
  }, [language, pathname]);

  return null;
}

function SkipLink() {
  const { language } = useLanguage();

  return (
    <a className="skip-link" href="#main-content">
      {language === "tr" ? "İçeriğe geç" : "Skip to content"}
    </a>
  );
}

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  
  return (
    <LanguageProvider>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <SkipLink />
          <DocumentTitle />
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
