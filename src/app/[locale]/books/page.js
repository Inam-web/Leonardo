import Link from "next/link";
import BookCover from "@/components/BookCover";
import { PurchaseLink, TextLink } from "@/components/PurchaseLink";
import { books } from "@/data/books";
import { getCopy } from "@/data/locales";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const copy = getCopy(locale);
  const title = copy.seo.booksTitle;
  const description = copy.seo.booksDescription;

  return {
    title,
    description,
    openGraph: { title, description, siteName: "Leonardo Piccardi", type: "website" },
    twitter: { title, description },
  };
}

export default async function BooksPage({ params }) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <div className="collection-page">
      <section className="interior-intro interior-intro--dark">
        <div className="page-shell interior-intro__inner">
          <p className="eyebrow eyebrow--gold">{copy.collection.eyebrow}</p>
          <h1 className="display-title interior-title">
            <span>{copy.collection.title[0]}</span>
            <em>{copy.collection.title[1]}</em>
          </h1>
          <p className="interior-intro__lead">{copy.collection.intro}</p>
        </div>
      </section>

      <section className="book-catalog paper-texture" aria-label={copy.collection.current}>
        <div className="page-shell">
          <div className="section-ruler">
            <span className="eyebrow">{copy.collection.current}</span>
            <span className="section-ruler__note">{String(books.length).padStart(2, "0")}</span>
          </div>
          <div className="catalog-list">
            {books.map((book, index) => (
              <article className="catalog-entry" key={book.slug}>
                <div className="catalog-entry__number">{String(index + 1).padStart(2, "0")}</div>
                <div className="catalog-entry__art">
                  <BookCover book={book} locale={locale} className="cover-figure--catalog" />
                </div>
                <div className="catalog-entry__copy">
                  <p className="eyebrow">{book.series} / {String(book.number).padStart(2, "0")}</p>
                  <h2 className="display-title catalog-entry__title">{book.title}</h2>
                  <p className="book-subtitle">{book.subtitle}</p>
                  <p className="catalog-entry__description">{book.shortDescription[locale] || book.shortDescription.en}</p>
                  <div className="catalog-entry__meta">
                    <span>{copy.featured.ageLabel}</span>
                    <strong>{copy.featured.age}</strong>
                  </div>
                  <div className="featured-actions">
                    <TextLink href={`/${locale}/books/${book.slug}`}>{copy.collection.explore}</TextLink>
                    <PurchaseLink book={book} label={copy.collection.buy} className="button button--dark" />
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="catalog-note">{copy.collection.note}</p>
          <Link className="back-link" href={`/${locale}`}>← {copy.nav.home}</Link>
        </div>
      </section>
    </div>
  );
}
