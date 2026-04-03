import { RevealBlock } from "@/components/custom/RevealBlock";
import { aboutContent, whyUsPoints } from "@/data/siteContent";

export const AboutPage = () => {
  return (
    <main className="page-shell page-shell-about" data-testid="about-page">
      <section className="section-shell mx-auto max-w-7xl px-6 py-20 md:px-12" data-testid="about-page-main-section">
        <div className="about-hero-grid" data-testid="about-page-hero-grid">
          <RevealBlock className="about-hero-copy" delay={0.05}>
            <p className="section-tag" data-testid="about-page-tag">
              About Skin Sattva
            </p>
            <h1 className="section-title" data-testid="about-page-heading">
              {aboutContent.title}
            </h1>
            <div className="about-pill-row" data-testid="about-page-pill-row">
              {whyUsPoints.slice(0, 3).map((point, index) => (
                <span className="about-pill" key={point} data-testid={`about-pill-${index + 1}`}>
                  {point}
                </span>
              ))}
            </div>
          </RevealBlock>

          <div className="stagger-grid about-media-grid" data-testid="about-page-generic-images-grid">
            <RevealBlock className="about-media-primary" delay={0.12}>
              <article className="gallery-card" data-testid="about-page-image-card-1">
                <div className="gallery-image-wrap" data-testid="about-page-image-wrap-1">
                  <img
                    src="/images/about-consultation.png"
                    alt="Doctor consultation at dermatology clinic"
                    className="gallery-image"
                    data-testid="about-page-image-1"
                  />
                </div>
              </article>
            </RevealBlock>

            <RevealBlock className="about-media-secondary" delay={0.22}>
              <article className="gallery-card" data-testid="about-page-image-card-2">
                <div className="gallery-image-wrap" data-testid="about-page-image-wrap-2">
                  <img
                    src="/images/about-skincare.png"
                    alt="Skincare treatment close-up"
                    className="gallery-image"
                    data-testid="about-page-image-2"
                  />
                </div>
              </article>
            </RevealBlock>
          </div>
        </div>

        <div className="stagger-grid about-story-grid mt-12" data-testid="about-page-paragraphs">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <RevealBlock delay={index * 0.1} key={paragraph}>
              <article className="category-card about-story-card" data-testid={`about-page-card-${index + 1}`}>
                <p className="section-body" data-testid={`about-page-text-${index + 1}`}>
                  {paragraph}
                </p>
              </article>
            </RevealBlock>
          ))}
        </div>

        <RevealBlock className="mt-12" delay={0.15}>
          <article className="doctor-content-card about-why-card" data-testid="about-page-why-card">
            <h3 className="service-title" data-testid="about-page-why-title">Why Skin Sattva</h3>
            <ul className="service-list mt-4" data-testid="about-page-why-list">
              {whyUsPoints.map((point, index) => (
                <li className="service-list-item" key={point} data-testid={`about-page-why-item-${index + 1}`}>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </RevealBlock>
      </section>
    </main>
  );
};
