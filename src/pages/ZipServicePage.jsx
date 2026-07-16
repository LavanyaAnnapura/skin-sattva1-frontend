import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { RevealBlock } from "@/components/custom/RevealBlock";
import { getServiceBySlug, getServicesByCategory, serviceCategories } from "@/data/servicesCatalog";

const pickSectionBody = (sections, keywords) => {
  const match = sections.find((section) =>
    keywords.some((keyword) => section.heading.toLowerCase().includes(keyword.toLowerCase()))
  );
  return match?.body;
};

const parseFaqString = (faqStr) => {
  const qIdx = faqStr.indexOf("?");
  if (qIdx === -1) return { q: faqStr, a: "" };
  return { q: faqStr.slice(0, qIdx + 1).trim(), a: faqStr.slice(qIdx + 1).trim() };
};

const FaqAccordionItem = ({ faq, index, serviceSlug }) => {
  const [open, setOpen] = useState(false);
  const parsed = typeof faq === "string" ? parseFaqString(faq) : faq;

  return (
    <div className="faq-accordion-item" data-testid={`zip-service-faq-item-${index + 1}`}>
      <button
        type="button"
        className="faq-accordion-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        data-testid={`zip-service-faq-trigger-${index + 1}`}
      >
        <span className="faq-accordion-question">{parsed.q}</span>
        {open ? <Minus size={18} aria-hidden="true" className="faq-accordion-icon" /> : <Plus size={18} aria-hidden="true" className="faq-accordion-icon" />}
      </button>
      {open && (
        <div className="faq-accordion-answer" data-testid={`zip-service-faq-answer-${index + 1}`}>
          <p>{parsed.a}</p>
        </div>
      )}
    </div>
  );
};

const ServiceCarousel = ({ images, title }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="service-carousel-wrap" data-testid="service-carousel">
      <div className="service-carousel-viewport" ref={emblaRef}>
        <div className="service-carousel-container">
          {images.map((img, i) => (
            <div className="service-carousel-slide" key={img.src} data-testid={`service-carousel-slide-${i + 1}`}>
              <img src={img.src} alt={img.alt} className="service-carousel-image" />
            </div>
          ))}
        </div>
      </div>
      <div className="service-carousel-controls">
        <button type="button" className="service-carousel-btn" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous" data-testid="service-carousel-prev">
          <ChevronLeft size={20} />
        </button>
        <div className="service-carousel-dots" data-testid="service-carousel-dots">
          {images.map((_, i) => (
            <button
              type="button"
              key={`dot-${i}`}
              className={`service-carousel-dot ${i === selectedIndex ? "active" : ""}`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              data-testid={`service-carousel-dot-${i + 1}`}
            />
          ))}
        </div>
        <button type="button" className="service-carousel-btn" onClick={() => emblaApi?.scrollNext()} aria-label="Next" data-testid="service-carousel-next">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export const ZipServicePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <main className="page-shell" data-testid="zip-service-not-found-page">
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-12" data-testid="zip-service-not-found-section">
          <h1 className="section-title" data-testid="zip-service-not-found-heading">Service Not Found</h1>
          <Link to="/" className="cta-button" data-testid="zip-service-back-home-button">
            Back to Home
          </Link>
        </section>
      </main>
    );
  }

  const category = serviceCategories.find((cat) => cat.key === service.category);
  const related = getServicesByCategory(service.category).filter((item) => item.slug !== service.slug).slice(0, 6);
  const fallbackCategoryImage = category?.image || "/images/zip-hero.jpg";
  const heroImage = `/images/service-specific/${service.slug}.png?v=2`;

  const categoryDetailImages = {
    skin: ["/images/service-detail/skin-1.jpg", "/images/service-detail/skin-2.jpg", "/images/service-detail/skin-3.jpg", "/images/service-detail/skin-4.jpg"],
    hair: ["/images/service-detail/hair-1.jpg", "/images/service-detail/hair-2.jpg", "/images/service-detail/hair-3.jpg"],
    aesthetics: ["/images/service-detail/aesthetics-1.jpg", "/images/service-detail/aesthetics-2.jpg", "/images/service-detail/aesthetics-3.jpg"],
    dermatosurgery: ["/images/service-detail/dermatosurgery-1.jpg", "/images/service-detail/dermatosurgery-2.jpg"],
  };
  const detailPool = categoryDetailImages[service.category] || categoryDetailImages.skin;
  const serviceIndex = related.length > 0 ? getServicesByCategory(service.category).findIndex((s) => s.slug === service.slug) : 0;
  const supportImage = service.content.supportImage || detailPool[serviceIndex % detailPool.length];

  const existingSections = service.content.sections || [];
  const pointSections = service.content.pointSections || [];
  const hasPointSections = pointSections.length > 0;

  const structuredContent = {
    overview:
      service.content.overview ||
      `${service.title} is offered at Skin Sattva with dermatologist-led planning and personalized protocols based on your condition and goals.`,
    howItWorks:
      pickSectionBody(existingSections, ["how", "approach", "technique", "treatment", "method", "process"]) ||
      `${service.title} is planned after consultation and assessment. The treatment protocol is customized by experts and delivered in sessions depending on severity, skin type, and response.`,
    benefits:
      service.content.benefits?.length > 0
        ? service.content.benefits
        : [
            `Personalized ${service.title.toLowerCase()} planning`,
            "Dermatologist supervision",
            "Safe and evidence-based protocols",
            "Progressive, trackable outcomes",
          ],
    whoCanOpt:
      pickSectionBody(existingSections, ["who", "candidate", "ideal"]) ||
      `Individuals with concerns related to ${service.title.toLowerCase()} and looking for specialist-led treatment can opt for this service after clinical assessment.`,
    whySkinSattva:
      pickSectionBody(existingSections, ["why skin sattva", "why"]) ||
      `Skin Sattva combines advanced technology, personalized protocols, and ethical care standards to deliver reliable outcomes with minimal disruption to daily routine.`,
    faqs:
      service.content.faqs?.length > 0
        ? service.content.faqs
        : pickSectionBody(existingSections, ["frequently", "faq"])
          ? [pickSectionBody(existingSections, ["frequently", "faq"])]
          : [
              { q: "How many sessions are needed?", a: "Session count varies based on concern severity and response after evaluation." },
              { q: "Is there downtime?", a: "Most protocols involve little to minimal downtime, depending on treatment type." },
              { q: "When will I see results?", a: "Early changes may appear in a few sessions; full outcomes improve progressively with follow-up care." },
            ],
  };

  return (
    <main className="page-shell" data-testid="zip-service-page">
      <section className="section-shell relative min-h-[20rem] overflow-hidden" data-testid="zip-service-hero-section">
        <img
          src={heroImage}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover blur-[2px]"
          onError={(event) => {
            event.currentTarget.src = fallbackCategoryImage;
          }}
          data-testid="zip-service-hero-image"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,24,23,0.2),rgba(18,24,23,0.76))]" />

        <div className="relative mx-auto max-w-5xl px-6 pb-10 pt-24 md:px-10" data-testid="zip-service-hero-content">
          <button type="button" onClick={() => navigate(-1)} className="outline-button border-white/40 text-white" data-testid="zip-service-back-button">
            <ArrowLeft size={16} aria-hidden="true" /> Back
          </button>
          <p className="hero-tag mt-4" data-testid="zip-service-category-tag">{category?.label}</p>
          <h1 className="hero-title mt-2" data-testid="zip-service-title">{service.title}</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-12 lg:grid-cols-3 md:px-10" data-testid="zip-service-content-section">
        <div className="stagger-grid space-y-8 lg:col-span-2" data-testid="zip-service-main-content">
          {service.content.highlightText && (
            <RevealBlock>
              <div className="service-highlight-banner" data-testid="zip-service-highlight">
                {service.content.highlightText}
              </div>
            </RevealBlock>
          )}

          <RevealBlock>
            <p className="section-body" data-testid="zip-service-overview">{structuredContent.overview}</p>
          </RevealBlock>

          {service.content.leadCta && (
            <RevealBlock className="flex flex-wrap gap-3" delay={0.05}>
              <Link to={service.content.leadCta.to} className="cta-button" data-testid="zip-service-lead-cta">
                {service.content.leadCta.label}
              </Link>
            </RevealBlock>
          )}

          {!hasPointSections && (
            <RevealBlock>
              <div className="service-image-card" data-testid="zip-service-support-image-card">
                <img
                  src={supportImage}
                  alt={`${service.title} related treatment visual`}
                  className="service-image-clean"
                  onError={(event) => {
                    event.currentTarget.src = fallbackCategoryImage;
                  }}
                  data-testid="zip-service-support-image"
                />
              </div>
            </RevealBlock>
          )}

          {service.content.carouselImages?.length > 0 && (
            <RevealBlock>
              <ServiceCarousel images={service.content.carouselImages} title={service.title} />
            </RevealBlock>
          )}

          {hasPointSections && (
            <div className="service-points-wrap" data-testid="zip-service-point-sections">
              {pointSections.map((section, sectionIndex) => (
                <RevealBlock key={section.heading} delay={Math.min(sectionIndex * 0.03, 0.18)}>
                  <article className="category-card service-point-section" data-testid={`zip-service-point-section-${sectionIndex + 1}`}>
                    <h2 className="service-title" data-testid={`zip-service-point-heading-${sectionIndex + 1}`}>{section.heading}</h2>
                    <div className="service-point-list" data-testid={`zip-service-point-list-${sectionIndex + 1}`}>
                      {section.points.map((point, pointIndex) => (
                        <div className="service-point-item" key={point} data-testid={`zip-service-point-${sectionIndex + 1}-${pointIndex + 1}`}>
                          <CheckCircle2 className="service-icon" aria-hidden="true" />
                          <p className="service-list-text">{point}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                </RevealBlock>
              ))}
            </div>
          )}

          {!hasPointSections && (
            <>
              <RevealBlock>
                <article className="category-card" data-testid="zip-service-how-it-works-card">
                  <h2 className="service-title" data-testid="zip-service-how-it-works-heading">How It Works</h2>
                  <p className="service-description" data-testid="zip-service-how-it-works-body">{structuredContent.howItWorks}</p>
                </article>
              </RevealBlock>

              <RevealBlock>
                <h3 className="service-title" data-testid="zip-service-benefits-heading">Benefits</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2" data-testid="zip-service-benefits-grid">
                  {structuredContent.benefits.map((benefit, index) => (
                    <article className="service-list-card" key={benefit} data-testid={`zip-service-benefit-${index + 1}`}>
                      <CheckCircle2 className="service-icon" aria-hidden="true" />
                      <p className="service-list-text" data-testid={`zip-service-benefit-text-${index + 1}`}>{benefit}</p>
                    </article>
                  ))}
                </div>
              </RevealBlock>

              <RevealBlock>
                <article className="category-card" data-testid="zip-service-who-can-opt-card">
                  <h3 className="service-title" data-testid="zip-service-who-can-opt-heading">Who Can Opt for This Treatment?</h3>
                  <p className="service-description" data-testid="zip-service-who-can-opt-body">{structuredContent.whoCanOpt}</p>
                </article>
              </RevealBlock>
            </>
          )}

          {service.content.comparisonTable && (!hasPointSections || service.content.showComparisonTableWithPoints) && (
            <RevealBlock>
              <article className="category-card" data-testid="zip-service-comparison-table-card">
                <h3 className="service-title" data-testid="zip-service-comparison-heading">
                  {service.content.comparisonTable.title || "Comparison of FUE Techniques"}
                </h3>
                <div className="mt-4 overflow-x-auto" data-testid="zip-service-comparison-table">
                  <table className="w-full text-left border-collapse" style={{ fontSize: "0.85rem" }}>
                    <thead>
                      <tr>
                        {service.content.comparisonTable.headers.map((header, i) => (
                          <th key={i} className="px-3 py-2.5 font-semibold border-b border-white/10" style={{ color: "hsl(var(--foreground))", whiteSpace: "nowrap" }}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {service.content.comparisonTable.rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white/[0.02]" : ""}>
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx} className="px-3 py-2 border-b border-white/5" style={{ color: cellIdx === 0 ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            </RevealBlock>
          )}

          {!hasPointSections && (
            <RevealBlock>
              <article className="category-card" data-testid="zip-service-why-skinsattva-card">
                <h3 className="service-title" data-testid="zip-service-why-skinsattva-heading">Why Skin Sattva?</h3>
                <p className="service-description" data-testid="zip-service-why-skinsattva-body">{structuredContent.whySkinSattva}</p>
              </article>
            </RevealBlock>
          )}

          {service.content.beforeAfterImages?.length > 0 && (
            <RevealBlock>
              <h3 className="service-title" data-testid="zip-service-before-after-heading">Before & After Results</h3>
              <ServiceCarousel images={service.content.beforeAfterImages} title={`${service.title} Results`} />
            </RevealBlock>
          )}

          {!hasPointSections && (
            <RevealBlock>
              <article className="category-card" data-testid="zip-service-faq-card">
                <h3 className="service-title" data-testid="zip-service-faq-heading">FAQs</h3>
                <div className="faq-accordion mt-4" data-testid="zip-service-faq-list">
                  {structuredContent.faqs.map((faq, index) => (
                    <FaqAccordionItem faq={faq} index={index} serviceSlug={service.slug} key={`${service.slug}-faq-${index + 1}`} />
                  ))}
                </div>
              </article>
            </RevealBlock>
          )}

        </div>

        <div className="zip-service-sidebar space-y-5" data-testid="zip-service-sidebar">
          <article className="doctor-content-card" data-testid="zip-service-sidebar-card">
            <h3 className="service-title" data-testid="zip-service-sidebar-title">Book a Consultation</h3>
            <p className="service-description" data-testid="zip-service-sidebar-description">
              Get personalized expert advice for {service.title.toLowerCase()}.
            </p>
            <Link to="/contact#booking-form-section" className="cta-button mt-5" data-testid="zip-service-sidebar-book-button">
              Book Now
            </Link>
          </article>

          <article className="category-card" data-testid="zip-service-related-card">
            <h4 className="service-title" data-testid="zip-service-related-heading">Other {category?.label} Treatments</h4>
            <div className="mt-4 grid gap-2" data-testid="zip-service-related-list">
              {related.map((item) => (
                <Link key={item.slug} to={`/services/${item.slug}`} className="services-dropdown-item" data-testid={`zip-service-related-${item.slug}`}>
                  {item.title}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>

    </main>
  );
};
