import { ShieldCheck } from "lucide-react";
import { RevealBlock } from "@/components/custom/RevealBlock";
import { whyUsPoints } from "@/data/siteContent";

export const WhyUsPage = () => {
  return (
    <main className="page-shell" data-testid="why-us-page">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12" data-testid="why-us-main-section">
        <RevealBlock>
          <p className="section-tag" data-testid="why-us-page-tag">
            Why Skin Sattva
          </p>
          <h1 className="section-title" data-testid="why-us-page-heading">
            Trusted, ethical and expert-led dermatology care.
          </h1>
        </RevealBlock>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-testid="why-us-page-grid">
          {whyUsPoints.map((item, index) => (
            <RevealBlock delay={index * 0.08} key={item}>
              <article className="info-card" data-testid={`why-us-page-card-${index + 1}`}>
                <ShieldCheck className="service-icon" aria-hidden="true" />
                <h3 className="service-title" data-testid={`why-us-page-title-${index + 1}`}>
                  {item}
                </h3>
              </article>
            </RevealBlock>
          ))}
        </div>
      </section>
    </main>
  );
};
