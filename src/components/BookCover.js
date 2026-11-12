import Image from "next/image";

const altText = {
  en: "Illustrated cover of Puck and Liara: The Two Little Aliens and the Magic Stone",
  it: "Copertina illustrata di Puck e Liara, i due piccoli alieni e la pietra magica",
  es: "Cubierta ilustrada de Puck and Liara: The Two Little Aliens and the Magic Stone",
  de: "Illustriertes Cover von Puck and Liara: The Two Little Aliens and the Magic Stone",
};

export default function BookCover({
  book,
  locale = "en",
  className = "",
  priority = false,
  caption,
}) {
  return (
    <figure className={`cover-figure ${className}`.trim()}>
      <div className="cover-orbit cover-orbit--one" aria-hidden="true" />
      <div className="cover-orbit cover-orbit--two" aria-hidden="true" />
      <div className="book-object">
        {book.coverImage ? (
          <Image
            className="book-object__image"
            src={book.coverImage}
            alt={altText[locale] || altText.en}
            width={book.coverWidth || 313}
            height={book.coverHeight || 501}
            sizes="(max-width: 640px) 66vw, (max-width: 1000px) 36vw, 390px"
            priority={priority}
          />
        ) : (
          <div className="cover-placeholder" role="img" aria-label={altText[locale] || altText.en}>
            <span className="cover-placeholder__orbit" aria-hidden="true" />
            <span className="cover-placeholder__mark">LP</span>
            <span className="cover-placeholder__title">Official cover<br />to be supplied</span>
            <span className="cover-placeholder__path">{book.coverAssetPath || "public/images/book-cover.jpg"}</span>
          </div>
        )}
      </div>
      {caption ? <figcaption className="cover-caption">{caption}</figcaption> : null}
    </figure>
  );
}
