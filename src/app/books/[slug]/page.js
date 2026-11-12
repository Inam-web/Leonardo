import Link from "next/link";
import { notFound } from "next/navigation";
import BookActions from "@/components/books/BookActions";
import BookCover from "@/components/books/BookCover";
import { books } from "@/data/books";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const book = books.find((entry) => entry.slug === slug);

  if (!book) return { title: "Book not found" };

  const title = `${book.title}: ${book.subtitle}`;
  const description = `${book.tagline} ${book.synopsisExcerpt}`;

  return {
    title,
    description,
    openGraph: { title, description, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function BookDetailPage({ params }) {
  const { slug } = await params;
  const book = books.find((entry) => entry.slug === slug);

  if (!book) notFound();

  return (
    <main id="main-content" className="book-detail-page">
      <section className="book-detail-masthead">
        <div className="page-container book-detail-masthead__inner">
          <Link className="book-detail-masthead__back" href="/books">
            <span aria-hidden="true">←</span> All books
          </Link>
          <p className="eyebrow"><span>THE COLLECTION</span><span className="eyebrow__divider">/</span> {book.featured ? "Featured publication" : "Book"}</p>
          <h1>{book.title}</h1>
          <p className="book-detail-masthead__subtitle">{book.subtitle}</p>
        </div>
        <span className="book-detail-masthead__index" aria-hidden="true">01</span>
      </section>

      <section className="book-detail-overview section-paper" aria-label={`About ${book.title}`}>
        <div className="page-container book-detail-overview__layout">
          <div className="book-detail-overview__visual">
            <BookCover book={book} variant="detail" />
          </div>
          <div className="book-detail-overview__copy">
            <p className="eyebrow">{book.tagline}</p>
            <h2>A little wonder<br /><em>goes a long way.</em></h2>
            <p className="book-detail-overview__lead">{book.synopsisExcerpt}</p>
            <ul className="book-detail-overview__genres" aria-label="Genres">
              {book.genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
            <BookActions book={book} />
            <dl className="book-detail-facts">
              <div><dt>Format</dt><dd>{book.format}</dd></div>
              <div><dt>Language</dt><dd>{book.language}</dd></div>
              <div><dt>ASIN</dt><dd>{book.asin}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="book-synopsis" aria-labelledby="book-synopsis-title">
        <div className="page-container book-synopsis__layout">
          <div className="book-synopsis__heading">
            <p className="eyebrow"><span>THE STORY</span></p>
            <h2 id="book-synopsis-title">A glowing stone.<br /><em>A world in need.</em></h2>
            <p>Synopsis from the Amazon listing.</p>
          </div>
          <div className="book-synopsis__body">
            {book.synopsis.map((paragraph, index) => (
              <p className={index === 0 ? "book-synopsis__opening" : ""} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="book-detail-closing" aria-labelledby="book-detail-closing-title">
        <div className="page-container book-detail-closing__inner">
          <div>
            <p className="eyebrow">{book.title}</p>
            <h2 id="book-detail-closing-title">Ready to follow<br /><em>the light?</em></h2>
          </div>
          <BookActions book={book} />
        </div>
      </section>
    </main>
  );
}
