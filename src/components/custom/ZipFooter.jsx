import { PhoneCall } from "lucide-react";

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-gradient-footer" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#F77737" />
        <stop offset="50%" stopColor="#E1306C" />
        <stop offset="75%" stopColor="#C13584" />
        <stop offset="100%" stopColor="#833AB4" />
      </linearGradient>
    </defs>
    <path fill="url(#ig-gradient-footer)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const GmailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

export const ZipFooter = () => {
  return (
    <footer className="bg-foreground py-14" data-testid="zip-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 text-sm text-white/70 md:grid-cols-4 md:px-12" data-testid="zip-footer-grid">
        <div data-testid="zip-footer-brand-block">
          <img src="/images/skin-sattva-logo.jpg" alt="Skin Sattva" className="h-20 w-auto rounded-lg bg-white/90 p-1.5" data-testid="zip-footer-logo" />
          <p className="mt-4" data-testid="zip-footer-description">
            Davanagere&apos;s premium destination for advanced skin, hair, and laser treatments.
          </p>
        </div>
        <div data-testid="zip-footer-links">
          <p className="mb-3 text-white" data-testid="zip-footer-links-title">Quick Links</p>
          <p data-testid="zip-footer-link-home">Home</p>
          <p data-testid="zip-footer-link-about">About</p>
          <p data-testid="zip-footer-link-services">Services</p>
          <p data-testid="zip-footer-link-contact">Contact</p>
        </div>
        <div data-testid="zip-footer-services">
          <p className="mb-3 text-white" data-testid="zip-footer-services-title">Services</p>
          <p data-testid="zip-footer-service-1">Hair Transplantation</p>
          <p data-testid="zip-footer-service-2">Laser Hair Reduction</p>
          <p data-testid="zip-footer-service-3">Medifacials</p>
          <p data-testid="zip-footer-service-4">Phototherapy</p>
        </div>
        <div data-testid="zip-footer-contact">
          <p className="mb-3 text-white" data-testid="zip-footer-contact-title">Contact</p>
          <p data-testid="zip-footer-contact-location">Davanagere, Karnataka</p>
          <a href="tel:+919136380071" className="mt-1 inline-flex items-center gap-2 text-white/80" data-testid="zip-footer-contact-phone-1">
            <PhoneCall size={14} aria-hidden="true" /> +91 91363 80071
          </a>
          <a href="tel:+917498418007" className="mt-1 inline-flex items-center gap-2 text-white/80" data-testid="zip-footer-contact-phone-2">
            <PhoneCall size={14} aria-hidden="true" /> +91 74984 18007
          </a>
          <a href="mailto:skinsattva14@gmail.com" className="mt-1 inline-flex items-center gap-2 text-white/80" data-testid="zip-footer-contact-email">
            <GmailIcon size={14} /> skinsattva14@gmail.com
          </a>
          <div className="mt-3 flex items-center gap-3" data-testid="zip-footer-social-links">
            <a
              href="https://www.instagram.com/skinsattva_dvg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              data-testid="zip-footer-instagram-link"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://www.facebook.com/share/1J3UBAzuBN/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              data-testid="zip-footer-facebook-link"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href="mailto:skinsattva14@gmail.com"
              className="text-white/80 hover:text-white transition-colors"
              data-testid="zip-footer-gmail-link"
            >
              <GmailIcon size={18} />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-white/50" data-testid="zip-footer-copyright">
        © {new Date().getFullYear()} Skin Sattva. All rights reserved.
      </p>
    </footer>
  );
};
