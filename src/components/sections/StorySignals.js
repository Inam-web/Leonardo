export default function StorySignals({ beats }) {
  return (
    <section className="story-signals" aria-labelledby="story-signals-title">
      <div className="page-container">
        <div className="story-signals__heading">
          <p className="eyebrow"><span>THE JOURNEY</span><span className="eyebrow__divider">/</span> {beats.length} turning points</p>
          <h2 id="story-signals-title">A small discovery.<br /><em>A galaxy of possibility.</em></h2>
        </div>
        <ol className="story-signals__list">
          {beats.map((beat) => (
            <li className="story-signals__item" key={beat.number}>
              <span className="story-signals__number">{beat.number}</span>
              <div>
                <h3>{beat.title}</h3>
                <p>{beat.description}</p>
              </div>
              <span className="story-signals__arrow" aria-hidden="true">↗</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
