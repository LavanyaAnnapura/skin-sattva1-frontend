import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { RevealBlock } from "@/components/custom/RevealBlock";
import { serviceCategories, services, getServicesByCategory } from "@/data/servicesCatalog";

export const ServicesPage = () => {
  return (
    <main className="page-shell page-shell-services" data-testid="services-page">
      <section className="section-shell mx-auto max-w-7xl px-6 py-20 md:px-12" data-testid="services-main-section">
        <RevealBlock className="services-heading-wrap" delay={0.04}>
          <div className="services-heading-shell" data-testid="services-heading-shell">
            <p className="section-tag" data-testid="services-page-tag">
              Services
            </p>
            <h1 className="section-title" data-testid="services-page-heading">
              Explore all Skin Sattva treatments by category.
            </h1>
          </div>
        </RevealBlock>

        <div className="stagger-grid services-highlight-grid mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-testid="services-page-highlights-grid">
          {services.slice(0, 8).map((service, index) => (
            <RevealBlock delay={index * 0.06} key={service.slug}>
              <article className="service-list-card" data-testid={`services-highlight-card-${index + 1}`}>
                <CheckCircle2 className="service-icon" aria-hidden="true" />
                <p className="service-list-text" data-testid={`services-highlight-text-${index + 1}`}>
                  {service.title}
                </p>
              </article>
            </RevealBlock>
          ))}
        </div>

        <div className="stagger-grid services-categories-grid mt-14 grid gap-6 lg:grid-cols-3" data-testid="services-page-categories-grid">
          {serviceCategories.map((category, index) => (
            <RevealBlock delay={index * 0.08} key={category.key}>
              <article className="category-card services-category-card flex h-full flex-col" data-testid={`services-category-card-${category.key}`}>
                <div className="gallery-image-wrap services-category-image-wrap mb-4" data-testid={`services-category-image-wrap-${category.key}`}>
                  <img
                    src={category.image}
                    alt={`${category.label} treatments`}
                    className="gallery-image"
                    data-testid={`services-category-image-${category.key}`}
                  />
                </div>
                <h3 className="service-title" data-testid={`services-category-title-${category.key}`}>
                  {category.label}
                </h3>
                <div className="mt-4 grid flex-1 gap-2" data-testid={`services-category-list-${category.key}`}>
                  {getServicesByCategory(category.key).map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="services-dropdown-item services-page-link"
                      data-testid={`services-category-item-${service.slug}`}
                    >
                      {service.title} <ArrowRight size={14} className="inline" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </article>
            </RevealBlock>
          ))}
        </div>
      </section>
    </main>
  );
};
