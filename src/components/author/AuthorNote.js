import Image from "next/image";
import Link from "next/link";
import { author } from "@/data/author";

export default function AuthorNote({ full = false }) {
  const hasBiography = Boolean(author.biography);
  const hasPortrait = Boolean(author.portraitImage);

  return (
    <section
      className={`author-note${full ? " author-note--full" : " author-note--preview"}`}
      id={full ? undefined : "about-preview"}
      aria-labelledby={full ? "about-title" : "author-note-title"}
    >
      <div className="page-container author-note__inner">
        <div className="author-note__portrait-wrap">
          <div className="author-note__portrait">
            {hasPortrait ? (
              <Image
                src={author.portraitImage}
                alt={`Portrait of ${author.name}`}
                fill
                sizes="(min-width: 800px) 360px, 75vw"
                className="author-note__portrait-image"
              />
            ) : (
              <div className="author-note__portrait-placeholder">
                <span className="author-note__initials" aria-hidden="true">LP</span>
                <span className="author-note__portrait-label">Portrait to be supplied</span>
              </div>
            )}
          </div>
          {!hasPortrait && (
            <p className="author-note__asset-note">Optional image: <code>public{author.portraitAssetPath}</code></p>
          )}
        </div>

        <div className="author-note__copy">
          <p className="eyebrow"><span>02</span> About the author</p>
          <h2 id={full ? "about-title" : "author-note-title"}>
            {full ? <>A place for<br /><em>Leonardo’s story.</em></> : <>An author’s story,<br /><em>in his own words.</em></>}
          </h2>
          {hasBiography ? (
            <p className="author-note__biography">{author.biography}</p>
          ) : (
            <div className="author-note__placeholder-copy">
              <p className="author-note__notice">Biography to be supplied by Leonardo Piccardi.</p>
              <p>
                {full
                  ? "This space is intentionally reserved for the author’s own biography. No personal history, achievements, education, or influences have been invented."
                  : "Leonardo’s biography has not yet been provided. This page is ready for his own words, without filling the silence with invented details."}
              </p>
            </div>
          )}

          {full && (
            <dl className="author-note__future-details">
              <div><dt>Biography</dt><dd>{hasBiography ? "Provided by the author" : "Awaiting author copy"}</dd></div>
              <div><dt>Portrait</dt><dd>{hasPortrait ? "Image supplied" : "Optional image, path noted above"}</dd></div>
              <div><dt>Literary influences</dt><dd>To be added if provided</dd></div>
            </dl>
          )}

          {!full && (
            <Link className="text-link author-note__link" href="/about">
              About Leonardo <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
