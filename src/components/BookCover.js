import Image from "next/image";
import Link from "next/link";

export default function BookCover({
  book,
  locale = "en",
  className = "",
  priority = false,
  caption,
  clickable = true, // New prop to control if the image is clickable
}) {
  // This dynamically creates the alt text for screen readers based on the book title
  const altText = `Cover of ${book.title}: ${book.subtitle}`;
  const bookUrl = `/${locale}/books/${book.slug}`;

  const coverContent = (
    <div className="book-object">
      {book.coverImage ? (
        <Image
          className="book-object__image"
          src={book.coverImage}
          alt={altText}
          width={book.coverWidth || 313}
          height={book.coverHeight || 501}
          sizes="(max-width: 640px) 66vw, (max-width: 1000px) 36vw, 390px"
          priority={priority}
        />
      ) : (
        <div className="cover-placeholder" role="img" aria-label={altText}>
          <span className="cover-placeholder__orbit" aria-hidden="true" />
          <span className="cover-placeholder__mark">LP</span>
          <span className="cover-placeholder__title">Official cover<br />to be supplied</span>
          <span className="cover-placeholder__path">{book.coverAssetPath || "public/images/book-cover.jpg"}</span>
        </div>
      )}
    </div>
  );

  return (
    <figure className={`cover-figure ${className}`.trim()}>
      <div className="cover-orbit cover-orbit--one" aria-hidden="true" />
      <div className="cover-orbit cover-orbit--two" aria-hidden="true" />
      
      {clickable && book.slug ? (
        <Link href={bookUrl} style={{ display: "block" }} aria-label={`Read more about ${book.title}`}>
          {coverContent}
        </Link>
      ) : (
        coverContent
      )}

      {caption ? <figcaption className="cover-caption">{caption}</figcaption> : null}
    </figure>
  );
}