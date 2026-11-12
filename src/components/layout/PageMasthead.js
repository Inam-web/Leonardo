export default function PageMasthead({ eyebrow, title, description, marker }) {
  return (
    <section className="page-masthead">
      <div className="page-container page-masthead__inner">
        <div className="page-masthead__copy">
          <p className="eyebrow"><span className="eyebrow__rule" />{eyebrow}</p>
          <h1>{title}</h1>
          {description && <p className="page-masthead__description">{description}</p>}
        </div>
        {marker && <span className="page-masthead__marker" aria-hidden="true">{marker}</span>}
      </div>
    </section>
  );
}
