import { author } from "@/data/author";
import { getCopy } from "@/data/locales";

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

  return (
    <div className="contact-page">
      <section className="interior-intro interior-intro--dark contact-intro">
        <div className="page-shell interior-intro__inner">
          <p className="eyebrow eyebrow--gold">{copy.contactPage.eyebrow}</p>
          <h1 className="display-title interior-title">
            <span>{copy.contactPage.title[0]}</span>
            <em>{copy.contactPage.title[1]}</em>
          </h1>
          <p className="interior-intro__lead">{copy.contactPage.lead}</p>
        </div>
      </section>

      <section className="contact-details-section paper-texture">
        <div className="page-shell contact-details-layout">
          <div className="contact-email-block">
            <p className="eyebrow">{copy.contactPage.email}</p>
            <a className="contact-email-large" href={`mailto:${author.contact.email}`}>{author.contact.email}</a>
            <a className="button button--dark" href={`mailto:${author.contact.email}?subject=${encodeURIComponent("Leonardo Piccardi — website enquiry")}`}>
              <span>{copy.contactPage.emailAction}</span><span className="button-arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="contact-detail-list">
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
          </div>
        </div>
      </section>

      <section className="contact-closing-section">
        <div className="contact-closing-orbit" aria-hidden="true" />
        <div className="page-shell contact-closing-inner">
          <p className="eyebrow eyebrow--gold">Leonardo Piccardi</p>
          <p className="display-title contact-closing-title">{copy.footer.tagline}</p>
          <a className="text-link text-link--light" href={`mailto:${author.contact.email}`}>
            <span>{author.contact.email}</span><span className="text-link__arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}
