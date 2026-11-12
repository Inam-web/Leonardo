import Link from "next/link";
import BookActions from "@/components/books/BookActions";
import BookCover from "@/components/books/BookCover";

export default function FeaturedBookSection({ book }) {
  return (
    <section className="book-feature section-paper" id="book" aria-labelledby="book-feature-title">
      <div className="page-container">
        <div className="section-overline">
          <p className="eyebrow"><span>01</span> The featured book</p>
          <span className="section-overline__note">A first journey into the Puck and Liara universe</span>
        </div>

        <div className="book-feature__layout">
          <div className="book-feature__visual">
            <span className="book-feature__folio" aria-hidden="true">01</span>
            <BookCover book={book} variant="feature" />
          </div>

          <div className="book-feature__copy">
            <p className="eyebrow book-feature__series">{book.title}</p>
            <h2 id="book-feature-title">
              What if a summer holiday<br />
              led <em>across the galaxy?</em>
            </h2>
            <p className="book-feature__subtitle">{book.subtitle}</p>
            <div className="book-feature__synopsis">
              {book.synopsis.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <dl className="book-facts">
              <div><dt>Edition</dt><dd>{book.format}</dd></div>
              <div><dt>Language</dt><dd>{book.language}</dd></div>
              <div><dt>Genre</dt><dd>{book.genres.join(" · ")}</dd></div>
            </dl>

            <div className="book-feature__links">
              <BookActions book={book} />
              <Link className="text-link" href={`/books/${book.slug}`}>
                Read the full synopsis <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
