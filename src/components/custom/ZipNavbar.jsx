import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Phone } from "lucide-react";
import { serviceCategories, getServicesByCategory } from "@/data/servicesCatalog";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Doctor", id: "doctor" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "contact" },
];

export const ZipNavbar = () => {
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  const handleServicesMenuWheel = (event) => {
    const menu = event.currentTarget;

    if (menu.scrollHeight <= menu.clientHeight) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    menu.scrollTop += event.deltaY;
  };

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8" data-testid="zip-navbar-header">
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-[2rem] border border-white/70 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-xl md:px-5"
        data-testid="zip-navbar"
      >
        <button type="button" onClick={() => goToSection("home")} className="brand-block plain-button" data-testid="zip-brand-button">
          <img src="/images/zip-logo.jpeg" alt="Skin Sattva" className="header-logo" data-testid="zip-brand-image" />
          <div className="brand-meta" data-testid="zip-brand-meta">
            <p className="brand-name" data-testid="zip-brand-name">SKIN SATTVA</p>
            <p className="brand-subline" data-testid="zip-brand-subline">Skin • Hair • Lasers</p>
          </div>
        </button>

        <div className="hidden items-center gap-6 lg:flex" data-testid="zip-desktop-nav-links">
          {navItems.slice(0, 2).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSection(item.id)}
              className="nav-link plain-button"
              data-testid={`zip-nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}

          <div
            className="services-menu-wrapper"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
            data-testid="zip-services-wrapper"
          >
            <button type="button" onClick={() => goToSection("services")} className="nav-link services-trigger plain-button" data-testid="zip-nav-services">
              Services <ChevronDown size={14} aria-hidden="true" />
            </button>
            <div
              className={`services-dropdown ${showServices ? "is-open" : ""}`}
              onWheel={handleServicesMenuWheel}
              data-testid="zip-services-dropdown"
            >
              {serviceCategories.map((category) => (
                <div key={category.key} className="mb-2 last:mb-0" data-testid={`zip-services-category-${category.key}`}>
                  <p className="px-2 pt-1 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground" data-testid={`zip-services-category-label-${category.key}`}>
                    {category.label}
                  </p>
                  {getServicesByCategory(category.key).map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="services-dropdown-item"
                      data-testid={`zip-service-link-${service.slug}`}
                      onClick={() => setShowServices(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSection(item.id)}
              className="nav-link plain-button"
              data-testid={`zip-nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="header-actions" data-testid="zip-header-actions">
          <button type="button" onClick={() => goToSection("contact")} className="call-button" data-testid="zip-call-us-button">
            <Phone size={15} aria-hidden="true" /> Call Us
          </button>
          <button type="button" onClick={() => goToSection("contact")} className="cta-button" data-testid="zip-book-consultation-button">
            Book Consultation
          </button>
        </div>
      </nav>
    </header>
  );
};
