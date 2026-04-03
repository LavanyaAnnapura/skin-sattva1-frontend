import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowRight,
  ClipboardCheck,
  HandCoins,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { RevealBlock } from "@/components/custom/RevealBlock";
import { aboutContent, doctorProfile, whyUsPoints } from "@/data/siteContent";

export const HomePage = () => {
  const heroSlides = useMemo(
    () => [
      "/images/clinic-1.jpg",
      "/images/clinic-2.jpg",
      "/images/clinic-3.jpg",
      "/images/clinic-4.jpg",
    ],
    [],
  );
  const whyIcons = [Stethoscope, Sparkles, HandCoins, ShieldCheck, Users];
  const aboutTimelineIcons = [
    Stethoscope,
    ClipboardCheck,
    Microscope,
    Sparkles,
    ShieldCheck,
    Users,
  ];
  const featuredTreatmentCards = [
    {
      title: "Chemical peels",
      image: "/images/service-specific/chemical-peels.png",
      link: "/services/chemical-peels",
    },
    {
      title: "Anti-aging injectables",
      image: "/images/service-specific/anti-aging-treatments.png",
      link: "/services/anti-aging-treatments",
    },
    {
      title: "Laser hair reduction",
      image: "/images/service-specific/laser-hair-reduction.png",
      link: "/services/laser-hair-reduction",
    },
    {
      title: "Laser toning",
      image: "/images/service-specific/laser-toning.png",
      link: "/services/laser-toning",
    },
    {
      title: "Scar reduction",
      image: "/images/service-specific/acne-scar-reduction.png",
      link: "/services/acne-scar-reduction",
    },
    {
      title: "Medifacials",
      image: "/images/service-specific/medifacials.png",
      link: "/services/medifacials",
    },
    {
      title: "Hair loss treatments",
      image: "/images/service-specific/hair-loss-treatments.png",
      link: "/services/hair-loss-treatments",
    },
    {
      title: "Hair transplantation",
      image: "/images/service-specific/hair-transplantation.png",
      link: "/services/hair-transplantation",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [treatmentEmblaRef, treatmentEmblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  useEffect(() => {
    heroSlides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [heroSlides]);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length, isPaused]);

  useEffect(() => {
    if (!treatmentEmblaApi) {
      return;
    }

    const timer = setInterval(() => {
      treatmentEmblaApi.scrollNext();
    }, 2500);

    return () => clearInterval(timer);
  }, [treatmentEmblaApi]);

  return (
    <main className="page-shell" data-testid="home-page">
      <section
        className="section-shell relative min-h-[86vh] overflow-hidden"
        data-testid="home-hero-section"
      >
        {heroSlides.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Skin Sattva clinic view ${index + 1}`}
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
              activeSlide === index ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            style={{ willChange: "opacity" }}
            data-testid={`home-hero-image-${index + 1}`}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(17,28,26,0.7)_0%,rgba(17,28,26,0.45)_50%,rgba(17,28,26,0.2)_100%)]" />
        <div
          className="relative mx-auto flex min-h-[86vh] max-w-7xl items-center px-6 py-20 md:px-12"
          data-testid="home-hero-content"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="max-w-2xl">
            <p className="hero-tag" data-testid="home-hero-tagline">
              Skin Sattva · Skin | Hair | Lasers
            </p>
            <h1 className="hero-title" data-testid="home-hero-title">
              Where Beauty Meets Science
            </h1>
            <p className="hero-description" data-testid="home-hero-description">
              Experience Kaya-style premium dermatology journeys with trusted
              medical expertise and personalized treatment plans.
            </p>
            <div
              className="mt-8 flex flex-wrap gap-3"
              data-testid="home-hero-actions"
            >
              <Link
                to="/contact#booking-form-section"
                className="cta-button"
                data-testid="home-hero-book-button"
              >
                Book Consultation
              </Link>
              <Link
                to="/services"
                className="outline-button border-white/50 text-white"
                data-testid="home-hero-services-button"
              >
                Explore Services
              </Link>
            </div>

            <div
              className="mt-6 flex gap-2"
              data-testid="home-hero-slider-dots"
            >
              {heroSlides.map((_, index) => (
                <button
                  type="button"
                  key={`dot-${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-8 bg-white" : "w-2 bg-white/60"}`}
                  data-testid={`home-hero-dot-${index + 1}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-shell mx-auto max-w-7xl px-6 py-20 md:px-12"
        data-testid="home-overview-section"
      >
        <RevealBlock className="services-heading-shell" delay={0.04}>
          <p className="section-tag" data-testid="home-overview-tag">
            About Skin Sattva
          </p>
          <h2 className="section-title" data-testid="home-overview-heading">
            {aboutContent.title}
          </h2>
        </RevealBlock>

        <div
          className="home-about-timeline mt-8"
          data-testid="home-about-complete-paragraphs"
        >
          {aboutContent.paragraphs.map((paragraph, index) => (
            <RevealBlock delay={index * 0.08} key={paragraph}>
              <article
                className="home-about-timeline-item"
                data-testid={`home-about-paragraph-card-${index + 1}`}
              >
                <div
                  className="home-about-timeline-left"
                  data-testid={`home-about-timeline-left-${index + 1}`}
                >
                  <div
                    className="home-about-timeline-icon"
                    data-testid={`home-about-timeline-icon-${index + 1}`}
                  >
                    {(() => {
                      const Icon = aboutTimelineIcons[index] || ShieldCheck;
                      return <Icon size={26} aria-hidden="true" />;
                    })()}
                  </div>
                  {index < aboutContent.paragraphs.length - 1 && (
                    <span
                      className="home-about-timeline-line"
                      data-testid={`home-about-timeline-line-${index + 1}`}
                    />
                  )}
                </div>
                <div
                  className="category-card home-about-timeline-content"
                  data-testid={`home-about-timeline-content-${index + 1}`}
                >
                  <p
                    className="section-body"
                    data-testid={`home-about-paragraph-${index + 1}`}
                  >
                    {paragraph}
                  </p>
                </div>
              </article>
            </RevealBlock>
          ))}
        </div>

        <div
          className="stagger-grid mt-10 grid gap-6"
          data-testid="home-about-detail-grid"
        >
          <RevealBlock delay={0.1}>
            <article
              className="doctor-content-card"
              data-testid="home-about-value-card"
            >
              <h3
                className="service-title"
                data-testid="home-about-value-title"
              >
                Beauty Meets Science
              </h3>
              <p className="section-body" data-testid="home-about-value-text">
                At Skin Sattva, beauty meets science, and every patient is
                treated with the highest level of expertise and compassion.
              </p>
            </article>
          </RevealBlock>
        </div>

        <div
          className="stagger-grid mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          data-testid="home-quick-points-grid"
        >
          {whyUsPoints.map((item, index) => {
            const Icon = whyIcons[index] || ShieldCheck;
            return (
              <RevealBlock delay={index * 0.08} key={item}>
                <article
                  className="service-list-card home-quick-card home-why-card"
                  data-testid={`home-quick-point-${index + 1}`}
                >
                  <div
                    className="why-icon-shell why-icon-shell-large"
                    data-testid={`home-why-icon-shell-${index + 1}`}
                  >
                    <Icon className="service-icon" aria-hidden="true" />
                  </div>
                  <p
                    className="service-list-text home-why-text"
                    data-testid={`home-quick-point-text-${index + 1}`}
                  >
                    {item}
                  </p>
                </article>
              </RevealBlock>
            );
          })}
        </div>

        <RevealBlock className="mt-12" delay={0.08}>
          <div
            className="flex items-end justify-between gap-3"
            data-testid="home-treatment-carousel-header"
          >
            <h3
              className="service-title"
              data-testid="home-treatment-carousel-title"
            >
              Featured Services at Skin Sattva
            </h3>
          </div>

          <div
            className="mt-6 embla"
            ref={treatmentEmblaRef}
            data-testid="home-treatment-carousel"
          >
            <div
              className="embla__container"
              data-testid="home-treatment-carousel-track"
            >
              {featuredTreatmentCards.map((card, index) => (
                <div
                  className="home-treatment-slide"
                  key={card.title}
                  data-testid={`home-treatment-slide-${index + 1}`}
                >
                  <Link
                    to={card.link}
                    className="home-treatment-card"
                    data-testid={`home-treatment-card-${index + 1}`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="home-treatment-image"
                      data-testid={`home-treatment-image-${index + 1}`}
                    />
                    <div className="home-treatment-overlay" />
                    <p
                      className="home-treatment-title"
                      data-testid={`home-treatment-title-${index + 1}`}
                    >
                      {card.title}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>

        <RevealBlock
          className="mt-12 doctor-content-card"
          data-testid="home-doctor-highlight"
        >
          <p className="section-tag" data-testid="home-doctor-tag">
            Doctor Spotlight
          </p>
          <h3 className="service-title" data-testid="home-doctor-title">
            {doctorProfile.name}
          </h3>
        </RevealBlock>

        <RevealBlock className="mt-10 flex flex-wrap gap-3" delay={0.1}>
          <Link
            to="/services"
            className="cta-button"
            data-testid="home-view-all-services-button"
          >
            <Stethoscope size={16} aria-hidden="true" /> View All Services
          </Link>
          <Link
            to="/doctor"
            className="outline-button"
            data-testid="home-meet-doctor-button"
          >
            Meet Doctor <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </RevealBlock>
      </section>
    </main>
  );
};
