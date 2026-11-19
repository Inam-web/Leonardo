import Image from "next/image";

export default function AuthorPortrait({ src, alt, caption, className = "" }) {
  return (
    <figure className={`portrait-figure ${className}`.trim()}>
      <div className="portrait-placeholder">
        {src ? (
          <Image
            src={src}
            alt={alt || "Author portrait"}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="portrait-image"
          />
        ) : (
          <>
            <span className="portrait-placeholder__ring portrait-placeholder__ring--one" aria-hidden="true" />
            <span className="portrait-placeholder__ring portrait-placeholder__ring--two" aria-hidden="true" />
            <span className="portrait-placeholder__initials" aria-hidden="true">LP</span>
            <span className="portrait-placeholder__label">{alt}</span>
          </>
        )}
      </div>
      {caption ? <figcaption className="portrait-caption">{caption}</figcaption> : null}
    </figure>
  );
}