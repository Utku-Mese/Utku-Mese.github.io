import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../Assets/cv.pdf";
import { useLanguage } from "../../i18n/LanguageContext";
import Particle from "../Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const { language } = useLanguage();
  const content = language === "tr"
    ? {
        label: "ÖZGEÇMİŞ",
        title: "Deneyim, eğitim ve portfolyonun arkasındaki çalışmalar.",
        intro: "Profesyonel geçmişimin kısa bir özeti için PDF dosyasını indirebilirsiniz.",
        download: "CV'yi indir",
        loading: "Belge hazırlanıyor…",
        error: "Önizleme yüklenemedi. Lütfen yukarıdaki indirme düğmesini kullanın.",
      }
    : {
        label: "CURRICULUM VITAE",
        title: "Experience, education and the work behind the portfolio.",
        intro: "Download the PDF for a concise overview of my professional background.",
        download: "Download CV",
        loading: "Preparing the document…",
        error: "The preview could not be loaded. Please use the download button above.",
      };

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pageWidth = Math.min(width - 40, 860);

  return (
    <main className="page-shell resume-section">
      <Particle />
      <Container>
        <header className="page-hero resume-hero">
          <div>
            <p className="eyebrow">{content.label}</p>
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
          </div>
          <a href={pdf} target="_blank" rel="noreferrer" className="button button-primary">
            <AiOutlineDownload aria-hidden="true" /> {content.download}
          </a>
        </header>

        <div className="resume-preview">
          <Document
            file={pdf}
            className="resume-document"
            loading={<p className="resume-message">{content.loading}</p>}
            error={<p className="resume-message">{content.error}</p>}
          >
            <Page pageNumber={1} width={pageWidth} renderTextLayer={false} />
            <Page pageNumber={2} width={pageWidth} renderTextLayer={false} />
          </Document>
        </div>
      </Container>
    </main>
  );
}

export default ResumeNew;
