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
  const addressLines = author.contact.address.split(", ");
  
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${author.contact.email}&su=Website%20Enquiry`;

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
        <div className="page-shell contact-details-layout">
          {/* LEFT SIDE: The Form */}
          <ScrollReveal className="contact-email-block" style={{ borderBottom: "none" }}>
            <p className="eyebrow">{copy.contactPage.emailAction || "Send a message"}</p>
            <h2 className="display-title" style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Get in touch</h2>
            
            <ContactForm 
              nameLabel="Your Name"
              emailLabel="Your Email"
              messageLabel="Your Message"
              submitLabel={copy.contactPage.emailAction}
            />
          </ScrollReveal>

          {/* RIGHT SIDE: Contact Details */}
          <ScrollReveal delay={0.15} className="contact-detail-list">
            <section className="contact-detail">
              <p className="eyebrow">{copy.contactPage.phone}</p>
              <a href={`tel:${author.contact.phone}`}>{author.contact.phoneDisplay}</a>
              <a className="contact-detail__secondary" href={author.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                {copy.contactPage.whatsappAction}<span aria-hidden="true">↗</span>
              </a>
            </section>
            <section className="contact-detail">
              <p className="eyebrow">{copy.contactPage.address}</p>
              <address>{addressLines.map((line) => <span key={line}>{line}</span>)}</address>
            </section>
            <p className="contact-note">{copy.contactPage.note}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="contact-closing-section">
        <div className="contact-closing-orbit" aria-hidden="true" />
        <div className="page-shell contact-closing-inner">
          <ScrollReveal>
            <p className="eyebrow eyebrow--gold">Leonardo Piccardi</p>
            <p className="display-title contact-closing-title">{copy.footer.tagline}</p>
            <a className="text-link text-link--light" href={gmailLink} target="_blank" rel="noopener noreferrer">
              <span>{author.contact.email}</span><span className="text-link__arrow" aria-hidden="true">↗</span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}