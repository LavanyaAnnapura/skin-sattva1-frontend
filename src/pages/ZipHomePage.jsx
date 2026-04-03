import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { RevealBlock } from "@/components/custom/RevealBlock";
import { ZipFooter } from "@/components/custom/ZipFooter";
import { primaryServices, whyUsPoints } from "@/data/siteContent";
import { services } from "@/data/servicesCatalog";

export const ZipHomePage = () => {
  const featuredServices = services.slice(0, 8);

  return (
    <main className="page-shell" data-testid="zip-home-page">
      <section id="home" className="relative min-h-screen overflow-hidden" data-testid="zip-home-hero-section">
        <div className="absolute inset-0">
          <img src="/images/zip-hero.jpg" alt="Skin Sattva clinic" className="h-full w-full object-cover" data-testid="zip-home-hero-image" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,25,24,0.74)_0%,rgba(20,25,24,0.45)_52%,rgba(20,25,24,0.22)_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 md:px-12">
          <div className="max-w-2xl" data-testid="zip-home-hero-content">
            <p className="hero-tag" data-testid="zip-home-hero-tag">Skin · Hair · Lasers</p>
            <h1 className="hero-title" data-testid="zip-home-hero-title">
              Where Beauty
              <br />
              Meets Science
            </h1>
            <p className="hero-description" data-testid="zip-home-hero-description">
              Davanagere&apos;s premier destination for advanced dermatology, aesthetic treatments, and hair restoration.
            </p>
            <div className="mt-8 flex flex-wrap gap-4" data-testid="zip-home-hero-actions">
              <a href="#contact" className="cta-button" data-testid="zip-home-hero-book-button">
                Book Consultation
              </a>
              <a href="#services" className="outline-button border-white/50 text-white" data-testid="zip-home-hero-services-button">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:px-12" data-testid="zip-about-section">
        <RevealBlock>
          <p className="section-tag" data-testid="zip-about-tag">About Us</p>
          <h2 className="section-title" data-testid="zip-about-heading">Bringing World-Class Dermatology to You</h2>
          <p className="section-body" data-testid="zip-about-description-1">
            Skin Sattva was built to deliver metro-quality dermatology in Davanagere at accessible pricing.
          </p>
          <p className="section-body mt-5" data-testid="zip-about-description-2">
            We combine advanced technology, evidence-based protocols, and personalized planning across skin, hair, laser, and
            aesthetic concerns.
          </p>
        </RevealBlock>

        <RevealBlock>
          <article className="category-card p-8" data-testid="zip-about-why-card">
            <h3 className="service-title" data-testid="zip-about-why-title">Why Skin Sattva?</h3>
            <ul className="service-list mt-5" data-testid="zip-about-why-list">
              {whyUsPoints.map((point, index) => (
                <li className="service-list-item" key={point} data-testid={`zip-about-why-item-${index + 1}`}>{point}</li>
              ))}
            </ul>
          </article>
        </RevealBlock>
      </section>

      <section id="services" className="bg-muted/35 py-24" data-testid="zip-services-section">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <RevealBlock>
            <p className="section-tag" data-testid="zip-services-tag">Our Expertise</p>
            <h2 className="section-title" data-testid="zip-services-heading">Premium Treatments</h2>
          </RevealBlock>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-testid="zip-services-grid">
            {featuredServices.map((service, index) => (
              <RevealBlock delay={index * 0.05} key={service.slug}>
                <Link to={`/services/${service.slug}`} className="service-list-card block no-underline" data-testid={`zip-service-card-${service.slug}`}>
                  <p className="service-title text-xl" data-testid={`zip-service-title-${service.slug}`}>{service.title}</p>
                  <p className="service-description mt-2" data-testid={`zip-service-description-${service.slug}`}>
                    {service.shortDescription}
                  </p>
                </Link>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <section id="doctor" className="mx-auto max-w-7xl px-6 py-24 md:px-12" data-testid="zip-doctor-section">
        <RevealBlock>
          <p className="section-tag" data-testid="zip-doctor-tag">Meet the Expert</p>
          <h2 className="section-title" data-testid="zip-doctor-heading">Dr. Shrenik Balegar</h2>
        </RevealBlock>

        <div className="doctor-layout mt-10" data-testid="zip-doctor-layout">
          <div className="doctor-image-wrap" data-testid="zip-doctor-image-wrap">
            <img src="/images/doctor.jpg" alt="Dr. Shrenik Balegar" className="doctor-image" data-testid="zip-doctor-image" />
          </div>
          <article className="doctor-content-card" data-testid="zip-doctor-content-card">
            <p className="section-body" data-testid="zip-doctor-description-1">
              Founder · Dermatologist · Hair Transplant Specialist with extensive clinical, aesthetic and transplantation expertise.
            </p>
            <p className="section-body mt-5" data-testid="zip-doctor-description-2">
              Gold medalist in MD Dermatology, DERMACON speaker, and specialist in Bio-FUE and AHI methods.
            </p>
          </article>
        </div>
      </section>

      <section id="why-us" className="bg-muted/35 py-24" data-testid="zip-why-us-section">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <RevealBlock>
            <p className="section-tag" data-testid="zip-why-tag">Why Us</p>
            <h2 className="section-title" data-testid="zip-why-heading">Patient-first and scientifically grounded care.</h2>
          </RevealBlock>
          <div className="mt-10 grid gap-4 sm:grid-cols-2" data-testid="zip-why-grid">
            {primaryServices.slice(0, 6).map((item, index) => (
              <RevealBlock delay={index * 0.05} key={item}>
                <article className="service-list-card" data-testid={`zip-why-card-${index + 1}`}>
                  <CheckCircle2 className="service-icon" aria-hidden="true" />
                  <p className="service-list-text" data-testid={`zip-why-text-${index + 1}`}>{item}</p>
                </article>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:px-12" data-testid="zip-contact-section">
        <RevealBlock className="cta-panel" data-testid="zip-contact-panel">
          <div data-testid="zip-contact-left">
            <p className="section-tag" data-testid="zip-contact-tag">Get in Touch</p>
            <h2 className="section-title" data-testid="zip-contact-heading">Book a Consultation</h2>
            <p className="section-body" data-testid="zip-contact-description">
              Take the first step toward healthier and radiant skin with expert-guided treatment planning.
            </p>
          </div>
          <div className="grid gap-3" data-testid="zip-contact-actions">
            <button type="button" className="cta-button" data-testid="zip-contact-book-now">Book Appointment</button>
            <button type="button" className="call-button" data-testid="zip-contact-call-now">Call Us</button>
          </div>
        </RevealBlock>
      </section>

      <ZipFooter />
    </main>
  );
};
