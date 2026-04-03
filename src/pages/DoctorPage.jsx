import { Award, BookOpen, Building2, CheckCircle2, GraduationCap, Heart, Microscope, Users } from "lucide-react";
import { RevealBlock } from "@/components/custom/RevealBlock";
import { doctorProfile } from "@/data/siteContent";

const sectionCards = [
  { key: "education", title: "Education", icon: GraduationCap, items: doctorProfile.education },
  { key: "expertise", title: "Areas of Expertise", icon: Microscope, items: doctorProfile.expertise },
  { key: "leadership", title: "Leadership & Clinics", icon: Building2, items: doctorProfile.leadership },
  { key: "memberships", title: "Memberships", icon: Users, items: doctorProfile.memberships },
  { key: "publications", title: "Publications & Research", icon: BookOpen, items: doctorProfile.publications },
];

export const DoctorPage = () => {
  return (
    <main className="page-shell page-shell-doctor" data-testid="doctor-page">
      {/* Hero Banner */}
      <section className="doctor-hero-banner" data-testid="doctor-hero-banner">
        <div className="doctor-hero-inner mx-auto max-w-7xl px-6 md:px-12">
          <RevealBlock delay={0.06}>
            <p className="doctor-hero-tag" data-testid="doctor-page-tag">Meet the Expert</p>
          </RevealBlock>
          <RevealBlock delay={0.1}>
            <h1 className="doctor-hero-name" data-testid="doctor-page-heading">{doctorProfile.name}</h1>
          </RevealBlock>
          <RevealBlock delay={0.14}>
            <p className="doctor-hero-role" data-testid="doctor-page-role">{doctorProfile.role}</p>
          </RevealBlock>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section-shell mx-auto max-w-7xl px-6 py-16 md:px-12" data-testid="doctor-main-section">
        <div className="doctor-profile-grid" data-testid="doctor-page-layout">
          <RevealBlock className="doctor-profile-image-col" delay={0.08}>
            <div className="doctor-profile-image-card" data-testid="doctor-page-image-wrap">
              <img src="/images/doctor.jpg" alt={doctorProfile.name} className="doctor-profile-img" data-testid="doctor-page-image" />
            </div>
            <div className="doctor-philosophy-strip" data-testid="doctor-philosophy-card">
              <Heart size={18} aria-hidden="true" className="doctor-philosophy-icon" />
              <p className="doctor-philosophy-quote" data-testid="doctor-philosophy-text">"{doctorProfile.philosophy}"</p>
            </div>
          </RevealBlock>

          <div className="doctor-profile-info-col" data-testid="doctor-page-content-card">
            <RevealBlock delay={0.14}>
              <p className="doctor-intro-text" data-testid="doctor-page-intro">{doctorProfile.intro}</p>
            </RevealBlock>

            {doctorProfile.paragraphs.map((paragraph, index) => (
              <RevealBlock delay={0.16 + index * 0.04} key={paragraph}>
                <p className="doctor-bio-paragraph" data-testid={`doctor-page-paragraph-${index + 1}`}>{paragraph}</p>
              </RevealBlock>
            ))}

            <RevealBlock delay={0.3}>
              <div className="doctor-achievements-grid" data-testid="doctor-page-achievements-grid">
                {doctorProfile.achievements.map((item, index) => (
                  <div className="doctor-achievement-pill" key={item} data-testid={`doctor-page-achievement-${index + 1}`}>
                    <Award size={14} aria-hidden="true" className="doctor-achievement-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
        </div>

        {/* Detail Sections */}
        <div className="doctor-details-grid" data-testid="doctor-complete-details-grid">
          {sectionCards.map((section, idx) => {
            const Icon = section.icon;
            return (
              <RevealBlock delay={idx * 0.06} key={section.key}>
                <article className="doctor-detail-card" data-testid={`doctor-${section.key}-card`}>
                  <div className="doctor-detail-header">
                    <div className="doctor-detail-icon-wrap">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="doctor-detail-title" data-testid={`doctor-${section.key}-title`}>{section.title}</h3>
                  </div>
                  <ul className="doctor-detail-list" data-testid={`doctor-${section.key}-list`}>
                    {section.items.map((item, i) => (
                      <li className="doctor-detail-item" key={item} data-testid={`doctor-${section.key}-item-${i + 1}`}>
                        <CheckCircle2 size={14} aria-hidden="true" className="doctor-detail-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealBlock>
            );
          })}
        </div>
      </section>
    </main>
  );
};
