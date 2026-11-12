import Link from "next/link";
import AuthorPortrait from "@/components/AuthorPortrait";
import BookCover from "@/components/BookCover";
import { PurchaseLink } from "@/components/PurchaseLink";
import { author } from "@/data/author";
import { books } from "@/data/books";
import { getCopy } from "@/data/locales";

const openGraphLocales = { en: "en_US", it: "it_IT", es: "es_ES", de: "de_DE" };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const copy = getCopy(locale);
  const title = copy.seo.aboutTitle;
  const description = copy.seo.aboutDescription;
  return {
    title,
    description,
    openGraph: { title, description, siteName: "Leonardo Piccardi", type: "profile", locale: openGraphLocales[locale] || "en_US" },
    twitter: { title, description },
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const copy = getCopy(locale);
  const biography = author.biography[locale] || author.biography.en;
  const book = books[0];

  return (
    <div className="about-page">
      <section className="interior-intro interior-intro--paper">
        <div className="page-shell interior-intro__inner about-intro-layout">
          <div>
            <p className="eyebrow">{copy.aboutPage.eyebrow}</p>
            <h1 className="display-title interior-title">
              <span>{copy.aboutPage.title[0]}</span>
              <em>{copy.aboutPage.title[1]}</em>
            </h1>
            <p className="interior-intro__lead">{copy.aboutPage.lead}</p>
          </div>
          <div className="about-intro-aside">
            <span className="about-intro-aside__mark" aria-hidden="true">LP</span>
            <p>{author.summary[locale] || author.summary.en}</p>
          </div>
        </div>
      </section>

      <section className="biography-section paper-texture">
        <div className="page-shell biography-layout">
          <div className="biography-portrait">
            <AuthorPortrait label={copy.aboutPage.portrait} path={copy.aboutPage.portraitPath} />
          </div>
          <div className="biography-content">
            <p className="eyebrow">{copy.aboutPage.works}</p>
            {biography.map((section, sectionIndex) => (
              <article className="bio-chapter" key={section.title}>
                <span className="bio-chapter__number">{String(sectionIndex + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-book-callout">
        <div className="page-shell about-book-callout__layout">
          <BookCover book={book} locale={locale} className="cover-figure--small" />
          <div>
            <p className="eyebrow eyebrow--gold">{book.series} / 01</p>
            <h2 className="display-title section-title">{book.title}</h2>
            <p>{book.shortDescription[locale] || book.shortDescription.en}</p>
            <div className="featured-actions">
              <Link className="text-link text-link--light" href={`/${locale}/books/${book.slug}`}>
                <span>{copy.aboutPage.bookLink}</span><span className="text-link__arrow" aria-hidden="true">→</span>
              </Link>
              <PurchaseLink book={book} label={copy.featured.buy} className="button button--gold" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
