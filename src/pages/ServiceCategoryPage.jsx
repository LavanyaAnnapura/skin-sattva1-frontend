import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { RevealBlock } from "@/components/custom/RevealBlock";
import { serviceCategories } from "@/data/siteContent";

export const ServiceCategoryPage = () => {
  const { categorySlug } = useParams();
  const category = serviceCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    return (
      <main className="page-shell" data-testid="service-category-not-found-page">
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-12" data-testid="service-category-not-found-section">
          <h1 className="section-title" data-testid="service-category-not-found-heading">
            Category not found
          </h1>
          <Link to="/services" className="cta-button" data-testid="service-category-back-button">
            <ArrowLeft size={16} aria-hidden="true" /> Back to Services
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell" data-testid="service-category-page">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12" data-testid="service-category-main-section">
        <RevealBlock>
          <p className="section-tag" data-testid="service-category-tag">
            Service Category
          </p>
          <h1 className="section-title" data-testid="service-category-heading">
            {category.title}
          </h1>
          <p className="section-body" data-testid="service-category-description">
            {category.description}
          </p>
        </RevealBlock>

        <div className="mt-10 grid gap-4 md:grid-cols-2" data-testid="service-category-items-grid">
          {category.items.map((item, index) => (
            <RevealBlock delay={index * 0.04} key={item}>
              <article className="service-list-card" data-testid={`service-category-item-card-${index + 1}`}>
                <CheckCircle2 className="service-icon" aria-hidden="true" />
                <p className="service-list-text" data-testid={`service-category-item-text-${index + 1}`}>
                  {item}
                </p>
              </article>
            </RevealBlock>
          ))}
        </div>

        <RevealBlock className="mt-10">
          <Link to="/services" className="outline-button" data-testid="service-category-back-to-services-button">
            <ArrowLeft size={16} aria-hidden="true" /> Back to All Services
          </Link>
        </RevealBlock>
      </section>
    </main>
  );
};
