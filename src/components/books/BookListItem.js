import Link from "next/link";
import BookActions from "@/components/books/BookActions";
import BookCover from "@/components/books/BookCover";

export default function BookListItem({ book, index }) {
  return (
    <article className="book-row">
      <div className="book-row__visual">
        <BookCover book={book} variant="catalog" />
      </div>
      <div className="book-row__copy">
        <p className="eyebrow book-row__eyebrow">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{book.featured ? "Featured publication" : "From the collection"}</span>
        </p>
        <h2>
          <Link href={`/books/${book.slug}`}>{book.title}</Link>
        </h2>
        <p className="book-row__subtitle">{book.subtitle}</p>
        <p className="book-row__description">{book.synopsisExcerpt}</p>
        <ul className="book-row__genres" aria-label="Genres">
          {book.genres.map((genre) => <li key={genre}>{genre}</li>)}
        </ul>
        <div className="book-row__links">
          <BookActions book={book} compact />
          <Link className="text-link" href={`/books/${book.slug}`}>
            Read the synopsis <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
