import { author } from "@/data/author";
import { getCopy } from "@/data/locales";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

const openGraphLocales = { en: "en_US", it: "it_IT", es: "es_ES", de: "de_DE" };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const copy = getCopy(locale);
  const title = copy.seo.contactTitle;
  const description = copy.seo.contactDescription;
  return {
    title,
    description,
    openGraph: { title, description, siteName: "Leonardo Piccardi", type: "website", locale: openGraphLocales[locale] || "en_US" },
    twitter: { title, description },
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const copy = getCopy(locale);
  
  return (
    <div className="contact-page">
      <section className="interior-intro interior-intro--dark contact-intro">
        <div className="page-shell interior-intro__inner">
          <ScrollReveal>
            <p className="eyebrow eyebrow--gold">{copy.contactPage.eyebrow}</p>
            <h1 className="display-title interior-title">
              <span>{copy.contactPage.title[0]}</span>
              <em>{copy.contactPage.title[1]}</em>
            </h1>
            <p className="interior-intro__lead">{copy.contactPage.lead}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="contact-details-section paper-texture">
        <div className="page-shell contact-form-centered">
          <ScrollReveal>
            <div className="contact-form-card">
              <div className="contact-form-header">
                <p className="eyebrow">{copy.contactPage.emailAction || "Send a message"}</p>
                <h2 className="display-title">Get in touch</h2>
              </div>
              
              <ContactForm 
                nameLabel="Your Name"
                emailLabel="Your Email"
                messageLabel="Your Message"
                submitLabel={copy.contactPage.emailAction || "Send Message"}
              />

              <p className="contact-note">
                {copy.contactPage.note}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}