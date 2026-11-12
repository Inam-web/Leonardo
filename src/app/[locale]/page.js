import Link from "next/link";
import BookCover from "@/components/BookCover";
import { PurchaseLink, TextLink } from "@/components/PurchaseLink";
import AuthorPortrait from "@/components/AuthorPortrait";
import { author } from "@/data/author";
import { books } from "@/data/books";
import { getCopy, supportedLocales } from "@/data/locales";

const openGraphLocales = { en: "en_US", it: "it_IT", es: "es_ES", de: "de_DE" };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const copy = getCopy(locale);
  const title = copy.seo.homeTitle;
  const description = copy.seo.homeDescription;

  return {
    title,
    description,
    alternates: {
      languages: Object.fromEntries(supportedLocales.map((item) => [item, `/${item}`])),
    },
    openGraph: {
      title,
      description,
      siteName: "Leonardo Piccardi",
      type: "website",
      locale: openGraphLocales[locale] || openGraphLocales.en,
    },
    twitter: { title, description },
  };
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const copy = getCopy(locale);
  const book = books[0];
  const primaryLabel = book.campaignUrl ? copy.nav.campaign : copy.hero.buy;
  const authorSummary = author.summary[locale] || author.summary.en;

  return (
    <div className="home-page">
      <section className="hero-section" id="home">
        <div className="hero-starfield" aria-hidden="true" />
        <div className="page-shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--light hero-eyebrow"><span className="eyebrow-rule" />{copy.hero.eyebrow}</p>
            <h1 className="display-title hero-title">
              <span>{copy.hero.title[0]}</span>
              <span>{copy.hero.title[1]}</span>
              <em>{copy.hero.title[2]}</em>
            </h1>
            <p className="hero-intro">
              {copy.hero.introLead} <cite>{book.title}</cite>{copy.hero.introTail}
            </p>
            <p className="hero-subtitle">{copy.hero.subtitle}</p>
            <div className="hero-actions">
              <PurchaseLink book={book} label={primaryLabel} className="button button--gold" useCampaign />
              <a className="hero-discover" href="#featured">
                <span>{copy.hero.discover}</span><span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label={copy.hero.coverNote}>
            <p className="hero-art__note">{copy.hero.coverNote}</p>
            <BookCover book={book} locale={locale} className="cover-figure--hero" priority caption={copy.featured.coverCaption} />
            <div className="hero-art__index">
              <span className="index-seal">01</span>
              <span>{copy.hero.journey}</span>
            </div>
            <span className="hero-art__spark hero-art__spark--one" aria-hidden="true" />
            <span className="hero-art__spark hero-art__spark--two" aria-hidden="true" />
            <span className="hero-art__spark hero-art__spark--three" aria-hidden="true" />
          </div>
        </div>
        <div className="page-shell hero-footnote">
          <span>{copy.hero.bottomNote}</span>
          <a href="#featured">{copy.hero.scroll}<span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="featured-section paper-texture" id="featured">
        <div className="page-shell">
          <div className="section-ruler">
            <span className="eyebrow"><span>{copy.featured.number}</span> {copy.featured.kicker}</span>
            <span className="section-ruler__note">{copy.featured.topNote}</span>
          </div>
          <div className="featured-layout" id="books">
            <div className="featured-art">
              <BookCover book={book} locale={locale} className="cover-figure--featured" caption={copy.featured.coverCaption} />
            </div>
            <div className="featured-copy">
              <p className="eyebrow featured-label">{copy.featured.titleLabel}</p>
              <h2 className="display-title section-title featured-title">
                <span>{copy.featured.titleLead}</span>
                <em>{copy.featured.titleEmphasis}</em>
              </h2>
              <p className="book-subtitle">{book.subtitle}</p>
              <p className="featured-summary">{book.shortDescription[locale] || book.shortDescription.en}</p>
              <dl className="book-facts">
                <div>
                  <dt>{copy.featured.ageLabel}</dt>
                  <dd>{copy.featured.age}</dd>
                </div>
                <div>
                  <dt>{copy.featured.themesLabel}</dt>
                  <dd>{copy.featured.themes}</dd>
                </div>
              </dl>
              <div className="featured-actions">
                <PurchaseLink book={book} label={copy.featured.buy} className="button button--dark" />
                <TextLink href={`/${locale}/books/${book.slug}`}>{copy.featured.read}</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section" aria-labelledby="journey-title">
        <div className="page-shell">
          <div className="journey-heading">
            <p className="eyebrow">{copy.journey.eyebrow}</p>
            <h2 className="display-title section-title" id="journey-title">
              <span>{copy.journey.title[0]}</span>
              <em>{copy.journey.title[1]}</em>
            </h2>
          </div>
          <ol className="story-beats">
            {copy.journey.steps.map((step, index) => (
              <li className="story-beat" key={step.title}>
                <span className="story-beat__number">{String(index + 1).padStart(2, "0")}</span>
                <div className="story-beat__copy">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
                <span className="story-beat__arrow" aria-hidden="true">↗</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-preview-section" id="about">
        <div className="page-shell about-preview-layout">
          <div className="about-preview-art">
            <AuthorPortrait label={copy.aboutPreview.portrait} path={copy.aboutPreview.portraitPath} />
          </div>
          <div className="about-preview-copy">
            <p className="eyebrow">{copy.aboutPreview.eyebrow}</p>
            <h2 className="display-title section-title">
              <span>{copy.aboutPreview.title[0]}</span>
              <em>{copy.aboutPreview.title[1]}</em>
            </h2>
            <p className="about-preview-note">{copy.aboutPreview.note}</p>
            <p className="about-preview-summary">{authorSummary}</p>
            <TextLink href={`/${locale}/about`}>{copy.aboutPreview.link}</TextLink>
          </div>
        </div>
      </section>

      <section className="contact-preview-section">
        <div className="contact-preview-orbit" aria-hidden="true" />
        <div className="page-shell contact-preview-layout">
          <div className="contact-preview-copy">
            <p className="eyebrow eyebrow--gold">{copy.contactPreview.eyebrow}</p>
            <h2 className="display-title section-title">
              <span>{copy.contactPreview.title[0]}</span>
              <em>{copy.contactPreview.title[1]}</em>
            </h2>
            <p>{copy.contactPreview.body}</p>
            <a className="contact-preview-email" href={`mailto:${author.contact.email}`}>{author.contact.email}</a>
          </div>
          <Link className="contact-preview-link" href={`/${locale}/contact`}>
            <span>{copy.contactPreview.link}</span><span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
