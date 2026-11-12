import Image from "next/image";

export default function BookCover({ book, variant = "default", priority = false }) {
  const hasCover = Boolean(book.coverImage);

  return (
    <figure className={`book-art book-art--${variant}`}>
      <div className="book-art__frame">
        {hasCover ? (
          <Image
            src={book.coverImage}
            alt={`${book.title}: ${book.subtitle} — official book cover`}
            fill
            sizes="(min-width: 1000px) 360px, 75vw"
            priority={priority}
            className="book-art__image"
          />
        ) : (
          <div
            className="book-art__missing"
            aria-label={`Official cover artwork for ${book.title} has not been supplied`}
          >
            <svg
              className="book-art__constellation"
              viewBox="0 0 280 360"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="140" cy="178" r="96" />
              <circle cx="140" cy="178" r="74" />
              <path d="M43 192c36-56 74-84 111-84 28 0 56 17 83 50" />
              <path d="M64 249c26-36 53-54 80-54 21 0 41 10 61 31" />
              <path d="m140 116 9 16 18 3-13 13 3 18-17-9-16 9 3-18-13-13 18-3 8-16Z" />
              <circle cx="57" cy="95" r="2.5" />
              <circle cx="220" cy="100" r="2.5" />
              <circle cx="220" cy="270" r="2.5" />
              <circle cx="64" cy="277" r="2.5" />
            </svg>
            <div className="book-art__missing-copy">
              <span className="book-art__status">Official cover artwork</span>
              <span className="book-art__awaiting">Awaiting<br />client image</span>
              <span className="book-art__filename">{book.coverAssetPath}</span>
            </div>
          </div>
        )}
      </div>
      {!hasCover && (
        <figcaption className="book-art__caption">
          Cover not yet supplied · add the official image at <code>public{book.coverAssetPath}</code>
        </figcaption>
      )}
    </figure>
  );
}
