export default function AuthorPortrait({ label, path, className = "" }) {
  return (
    <figure className={`portrait-figure ${className}`.trim()}>
      <div className="portrait-placeholder" role="img" aria-label={label}>
        <span className="portrait-placeholder__ring portrait-placeholder__ring--one" aria-hidden="true" />
        <span className="portrait-placeholder__ring portrait-placeholder__ring--two" aria-hidden="true" />
        <span className="portrait-placeholder__initials" aria-hidden="true">LP</span>
        <span className="portrait-placeholder__label">{label}</span>
      </div>
      {path ? <figcaption className="portrait-caption">{path}</figcaption> : null}
    </figure>
  );
}
