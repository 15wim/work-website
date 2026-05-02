import { useIntersection } from '../../hooks/useIntersection';
import './About.css';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '$40B+', label: 'Portfolio Overseen' },
  { value: '3K+', label: 'Platform Users' },
];

export default function About() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="about" className="section about">
      <div className="section__inner about__inner" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`about__text reveal${isVisible ? ' reveal--visible' : ''}`}>
          <p className="section__label">About</p>
          <h2 className="section__title about__title">
            Technology executive.<br />Data strategist.<br />Team builder.
          </h2>

          <p className="about__bio">
            I lead the Strategic Insights &amp; Data Office at Innovation Federal Credit Union,
            where my mandate spans analytics, data engineering, governance, regulatory reporting,
            API delivery, application development, and integration architecture. My work is
            enterprise transformation — not a single technical lane.
          </p>

          <p className="about__bio">
            With over 15 years across banking, insurance, and financial services, I have learned
            that the best architecture in the world means nothing if the organization is not
            ready to own it. The real work is always at the intersection of technology, people,
            and trust.
          </p>

          <blockquote className="about__quote">
            "I care just as much about the human side as the technical side — because data
            quality is ultimately a team sport."
          </blockquote>

          <div className="about__langs">
            <span className="about__lang-label">Languages:</span>
            <span>English</span>
            <span>Bengali</span>
            <span>Hindi</span>
          </div>
        </div>

        <div className={`about__right reveal reveal--delay-2${isVisible ? ' reveal--visible' : ''}`}>
          <div className="about__photo-wrap">
            <img
              src="/work-website/images/walid-about.jpg"
              alt="Walid Matin — professional"
              className="about__photo"
              onError={e => {
                (e.currentTarget as HTMLImageElement).parentElement!.classList.add('about__photo-wrap--empty');
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="about__photo-fallback" aria-hidden="true">
              <div className="about__photo-accent" />
            </div>
          </div>

          <div className="about__stats">
            {stats.map(s => (
              <div key={s.label} className="about__stat">
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
