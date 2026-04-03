import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { getServicesByCategory } from "@/data/servicesCatalog";

const servicesColumns = [
  { key: "skin", label: "Skin", categories: ["skin", "dermatosurgery"] },
  { key: "hair", label: "Hair", categories: ["hair"] },
  { key: "aesthetics", label: "Aesthetics", categories: ["aesthetics"] },
];

export const SiteHeader = () => {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const getColumnServices = (categories) => categories.flatMap((category) => getServicesByCategory(category));

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8" data-testid="website-header">
      <nav
        className={`floating-navbar mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-[2rem] border border-white/70 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-xl md:px-5 ${isScrolled ? "is-scrolled" : ""}`}
        data-testid="floating-navbar"
      >
        <Link to="/" className="brand-block plain-button" data-testid="brand-logo-link">
          <img src="/images/skin-sattva-logo.png" alt="Skin Sattva - Skin | Hair | Lasers" className="header-logo" data-testid="header-logo-image" />
        </Link>

        <div className="hidden items-center gap-6 lg:flex" data-testid="header-navigation-links">
          <NavLink to="/" className="nav-link" data-testid="nav-link-home">
            Home
          </NavLink>

          <div
            className="services-menu-wrapper"
            onMouseEnter={() => setShowServicesMenu(true)}
            onMouseLeave={() => setShowServicesMenu(false)}
            data-testid="services-menu-wrapper"
          >
            <NavLink to="/services" className="nav-link services-trigger" data-testid="nav-link-services">
              Services <ChevronDown size={14} aria-hidden="true" />
            </NavLink>

            <div className={`services-dropdown ${showServicesMenu ? "is-open" : ""}`} data-testid="services-dropdown-menu">
              <div className="services-dropdown-panel" data-testid="services-dropdown-panel">
                {servicesColumns.map((column) => (
                  <div className="services-column" key={column.key} data-testid={`services-column-${column.key}`}>
                    <p className="services-column-title" data-testid={`services-column-title-${column.key}`}>
                      {column.label}
                    </p>
                    <div className="services-column-list" data-testid={`services-column-list-${column.key}`}>
                      {getColumnServices(column.categories).map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="services-dropdown-item"
                          data-testid={`services-dropdown-item-${service.slug}`}
                          onClick={() => setShowServicesMenu(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/doctor" className="nav-link" data-testid="nav-link-doctor">
            Doctor
          </NavLink>
          <NavLink to="/contact" className="nav-link" data-testid="nav-link-contact">
            Contact
          </NavLink>
        </div>

        <div className="header-actions" data-testid="header-actions">
          <Link to="/contact#booking-form-section" className="cta-button" data-testid="book-now-button">
            Book Consultation <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </nav>

      <div
        className={`floating-mobile-nav mx-auto mt-2 flex max-w-7xl items-center gap-2 overflow-x-auto rounded-full border border-white/70 bg-white/80 px-3 py-2 lg:hidden ${isScrolled ? "is-scrolled" : ""}`}
        data-testid="mobile-navigation-links"
      >
        <NavLink to="/" className="nav-link whitespace-nowrap" data-testid="mobile-nav-home">
          Home
        </NavLink>
        <button
          type="button"
          onClick={() => setMobileServicesOpen((prev) => !prev)}
          className="nav-link plain-button whitespace-nowrap"
          data-testid="mobile-nav-services-toggle"
        >
          Services <ChevronDown size={14} aria-hidden="true" />
        </button>
        <NavLink to="/doctor" className="nav-link whitespace-nowrap" data-testid="mobile-nav-doctor">
          Doctor
        </NavLink>
        <NavLink to="/contact" className="nav-link whitespace-nowrap" data-testid="mobile-nav-contact">
          Contact
        </NavLink>
      </div>

      {mobileServicesOpen && (
        <div className="mobile-services-panel lg:hidden" data-testid="mobile-services-panel">
          <div className="mobile-services-grid" data-testid="mobile-services-grid">
            {servicesColumns.map((column) => (
              <div className="mobile-services-column" key={column.key} data-testid={`mobile-services-column-${column.key}`}>
                <p className="services-column-title" data-testid={`mobile-services-column-title-${column.key}`}>
                  {column.label}
                </p>
                {getColumnServices(column.categories).map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="services-dropdown-item"
                    data-testid={`mobile-services-item-${service.slug}`}
                    onClick={() => setMobileServicesOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
