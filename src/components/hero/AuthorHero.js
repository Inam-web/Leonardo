import Link from "next/link";
import BookActions from "@/components/books/BookActions";
import BookCover from "@/components/books/BookCover";
import { author } from "@/data/author";

export default function AuthorHero({ book }) {
  return (
    <section className="author-hero" aria-labelledby="hero-title">
      <div className="author-hero__painting" aria-hidden="true" />
      <div className="author-hero__veil" aria-hidden="true" />
      <div className="author-hero__grain" aria-hidden="true" />

      <div className="author-hero__inner page-container">
        <div className="author-hero__copy">
          <p className="eyebrow author-hero__eyebrow">
            <span className="eyebrow__rule" />
            {author.name} <span className="eyebrow__divider">/</span> Author
          </p>
          <h1 id="hero-title">
            A summer holiday.<br />
            A journey across<br />
            <em>the galaxy.</em>
          </h1>
          <p className="author-hero__intro">
            Enter the world of <i>{book.title}</i>—a magical adventure about
            friendship, courage, and the kindness that can change a world.
          </p>
          <p className="author-hero__subtitle">{book.subtitle}</p>
          <div className="author-hero__actions">
            <BookActions book={book} />
            <Link className="author-hero__discover" href="#book">
              Discover the story <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>

        <div className="author-hero__stage" aria-label={`${book.title}, the featured book`}>
          <div className="author-hero__orbit author-hero__orbit--one" aria-hidden="true" />
          <div className="author-hero__orbit author-hero__orbit--two" aria-hidden="true" />
          <span className="author-hero__stage-note author-hero__stage-note--top" aria-hidden="true">
            A magical adventure<br />beyond the stars
          </span>
          <BookCover book={book} variant="hero" priority />
          <span className="author-hero__stage-note author-hero__stage-note--bottom" aria-hidden="true">
            <i>01</i><span>The first journey</span>
          </span>
        </div>
      </div>

      <div className="author-hero__foot page-container" aria-hidden="true">
        <span>Stories begin in the most unexpected places</span>
        <span className="author-hero__foot-mark">Scroll to explore <b>↓</b></span>
      </div>
    </section>
  );
}
