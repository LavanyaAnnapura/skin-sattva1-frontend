import { Link } from "react-router-dom";
import { CalendarCheck2, PhoneCall, Stethoscope } from "lucide-react";
import { RevealBlock } from "@/components/custom/RevealBlock";
import { BookingForm } from "@/components/custom/BookingForm";

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-gradient-contact" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#F77737" />
        <stop offset="50%" stopColor="#E1306C" />
        <stop offset="75%" stopColor="#C13584" />
        <stop offset="100%" stopColor="#833AB4" />
      </linearGradient>
    </defs>
    <path fill="url(#ig-gradient-contact)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const GmailIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

export const ContactPage = () => {
  return (
    <main className="page-shell page-shell-contact" data-testid="contact-page">
      <section className="section-shell mx-auto max-w-7xl px-6 py-20 md:px-12" data-testid="contact-page-main-section">
        <RevealBlock className="cta-panel contact-hero-panel" delay={0.04}>
          <div data-testid="contact-page-content-left">
            <p className="section-tag" data-testid="contact-page-tag">
              Contact
            </p>
            <h1 className="section-title" data-testid="contact-page-heading">
              Visit Skin Sattva in Davanagere, Karnataka.
            </h1>
            <p className="section-body" data-testid="contact-page-description">
              Book your personalized consultation for skin, hair, aesthetics, and laser treatments. Our team will guide you to
              the right treatment plan after detailed assessment.
            </p>
          </div>

          <div className="flex flex-wrap gap-3" data-testid="contact-page-actions">
            <a href="tel:+919136380071" className="call-button" data-testid="contact-page-call-button">
              <PhoneCall size={16} aria-hidden="true" /> Call Us
            </a>
            <a href="#booking-form-section" className="cta-button" data-testid="contact-page-book-button">
              <CalendarCheck2 size={16} aria-hidden="true" /> Book Consultation
            </a>
            <Link to="/services" className="outline-button" data-testid="contact-page-services-button">
              <Stethoscope size={16} aria-hidden="true" /> View Services
            </Link>
          </div>
        </RevealBlock>

        <div className="stagger-grid mt-10 grid gap-5 md:grid-cols-3" data-testid="contact-page-info-cards">
          <article className="info-card" data-testid="contact-info-location-card">
            <p className="info-card-label" data-testid="contact-info-location-label">Location</p>
            <p className="info-card-value" data-testid="contact-info-location-value">Davanagere, Karnataka</p>
          </article>
          <article className="info-card" data-testid="contact-info-call-card">
            <p className="info-card-label" data-testid="contact-info-call-label">Phone</p>
            <a href="tel:+919136380071" className="info-card-value block" data-testid="contact-info-call-value-1">
              +91 91363 80071
            </a>
            <a href="tel:+917498418007" className="info-card-value block mt-1" data-testid="contact-info-call-value-2">
              +91 74984 18007
            </a>
          </article>
          <article className="info-card" data-testid="contact-info-hours-card">
            <p className="info-card-label" data-testid="contact-info-hours-label">Email</p>
            <a href="mailto:skinsattva14@gmail.com" className="info-card-value" data-testid="contact-info-hours-value">
              skinsattva14@gmail.com
            </a>
          </article>
        </div>

        <div className="stagger-grid mt-8 flex flex-wrap gap-3" data-testid="contact-page-social-links">
          <a
            href="https://www.instagram.com/skinsattva_dvg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="outline-button"
            data-testid="contact-page-instagram-link"
          >
            <InstagramIcon size={16} /> Instagram
          </a>
          <a
            href="https://www.facebook.com/share/1J3UBAzuBN/"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-button"
            data-testid="contact-page-facebook-link"
          >
            <FacebookIcon size={16} /> Facebook
          </a>
          <a href="mailto:skinsattva14@gmail.com" className="outline-button" data-testid="contact-page-gmail-link">
            <GmailIcon size={16} /> Gmail
          </a>
        </div>

        <div className="contact-content-grid mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]" data-testid="contact-content-grid">
          <div className="space-y-8" data-testid="contact-left-stack">
            <div data-testid="contact-page-map-wrapper">
              <RevealBlock>
                <article className="category-card overflow-hidden contact-map-card" data-testid="contact-page-map-card">
                  <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4" data-testid="contact-page-map-header">
                    <h2 className="service-title text-2xl" data-testid="contact-page-map-heading">
                      Find Us on Google Maps
                    </h2>
                    <a
                      href="https://maps.app.goo.gl/yunjUFmWUBeeuNkFA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="outline-button"
                      data-testid="contact-page-map-open-link"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                  <div className="aspect-[16/7] w-full min-h-[300px]" data-testid="contact-page-map-iframe-wrap">
                    <iframe
                      title="Skin Sattva Google Map"
                      src="https://www.google.com/maps?q=Skin%20Sattva-%20Dr%20Shrenik%20Balegar,%201st%20floor,%20no.%2093,%205th%20Main,%20Nijalingappa%20Layout,%20Davanagere,%20Karnataka%20577004,%20India&output=embed"
                      className="h-full w-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      data-testid="contact-page-map-iframe"
                    />
                  </div>
                </article>
              </RevealBlock>
            </div>
          </div>

          <div id="booking-form-section" className="contact-booking-shell" data-testid="contact-booking-form-section">
            <RevealBlock>
              <BookingForm />
            </RevealBlock>
          </div>
        </div>
      </section>
    </main>
  );
};
