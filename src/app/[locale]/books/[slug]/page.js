import Link from "next/link";
import BookCover from "@/components/BookCover";
import { PurchaseLink } from "@/components/PurchaseLink";
import { books, getBookBySlug } from "@/data/books";
import { getCopy } from "@/data/locales";
import { notFound } from "next/navigation";

const openGraphLocales = { en: "en_US", it: "it_IT", es: "es_ES", de: "de_DE" };

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};

  const copy = getCopy(locale);
  const description = book.shortDescription[locale] || book.shortDescription.en;
  return {
    title: book.title,
    description,
    openGraph: {
      title: `${book.title} — ${book.author}`,
      description,
      siteName: "Leonardo Piccardi",
      type: "book",
      locale: openGraphLocales[locale] || openGraphLocales.en,
    },
    twitter: { title: book.title, description },
    alternates: {
      languages: Object.fromEntries(["en", "it", "es", "de"].map((item) => [item, `/${item}/books/${book.slug}`])),
    },
    keywords: [book.title, book.series, book.author, "fantasy", "children's books"],
    other: { "book:author": book.author },
    applicationName: copy.seo.booksTitle,
  };
}

export default async function BookDetailPage({ params }) {
  const { locale, slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  const copy = getCopy(locale);
  const story = book.synopsis[locale] || book.synopsis.en;

  return (
    <div className="book-detail-page">
      <section className="book-detail-hero interior-intro--dark">
        <div className="page-shell book-detail-hero__layout">
          <div className="book-detail-hero__copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href={`/${locale}/books`}>{copy.nav.books}</Link>
              <span aria-hidden="true">/</span>
              <span>{book.title}</span>
            </nav>
            <p className="eyebrow eyebrow--gold">{copy.bookPage.eyebrow}</p>
            <p className="book-detail-series">{book.series}</p>
            <h1 className="display-title book-detail-title">{book.title}</h1>
            <p className="book-detail-subtitle">{book.subtitle}</p>
            <p className="book-detail-standfirst">{copy.bookPage.label}</p>
            <div className="book-detail-actions">
              <PurchaseLink book={book} label={copy.bookPage.buy} className="button button--gold" useCampaign />
              <Link className="text-link text-link--light" href={`/${locale}/books`}>
                <span>{copy.bookPage.back}</span><span className="text-link__arrow" aria-hidden="true">←</span>
              </Link>
            </div>
          </div>
          <div className="book-detail-hero__art">
            <BookCover book={book} locale={locale} className="cover-figure--detail" priority caption={copy.featured.coverCaption} />
          </div>
        </div>
      </section>

      <section className="book-synopsis-section paper-texture">
        <div className="page-shell synopsis-layout">
          <aside className="synopsis-aside">
            <p className="eyebrow">{copy.bookPage.synopsis}</p>
            <span className="synopsis-aside__line" aria-hidden="true" />
            <p>{copy.bookPage.listedFor}</p>
          </aside>
          <article className="synopsis-copy">
            <h2 className="display-title section-title">{copy.bookPage.synopsis}</h2>
            {story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <dl className="book-facts book-facts--detail">
              <div>
                <dt>{copy.featured.ageLabel}</dt>
                <dd>{copy.featured.age}</dd>
              </div>
              <div>
                <dt>{copy.bookPage.themesLabel}</dt>
                <dd>{copy.bookPage.themes}</dd>
              </div>
            </dl>
            <p className="source-note">{copy.bookPage.source}</p>
          </article>
        </div>
      </section>

      <section className="series-note-section">
        <div className="page-shell series-note-layout">
          <div>
            <p className="eyebrow eyebrow--gold">{book.series}</p>
            <h2 className="display-title section-title">{copy.bookPage.nextTitle}</h2>
          </div>
          <div className="series-note-copy">
            <p>{copy.bookPage.nextBody}</p>
            <PurchaseLink book={book} label={copy.bookPage.buy} className="button button--gold" />
          </div>
        </div>
      </section>
    </div>
  );
}
