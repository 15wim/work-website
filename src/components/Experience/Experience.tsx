import { useIntersection } from '../../hooks/useIntersection';
import { experience } from '../../data/content';
import './Experience.css';

export default function Experience() {
  const { ref, isVisible } = useIntersection({ threshold: 0.05 });

  return (
    <section id="experience" className="section experience">
      <div className="section__inner" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`reveal${isVisible ? ' reveal--visible' : ''}`}>
          <p className="section__label">Career</p>
          <h2 className="section__title">Experience</h2>
        </div>

        <div className="timeline">
          {experience.map((item, i) => (
            <article
              key={item.id}
              className={`timeline__item reveal reveal--delay-${Math.min(i + 1, 6)}${isVisible ? ' reveal--visible' : ''}`}
            >
              <div className="timeline__marker">
                <div className={`timeline__dot${item.current ? ' timeline__dot--current' : ''}`} />
              </div>

              <div className="timeline__body">
                <div className="timeline__header">
                  <div className="timeline__meta">
                    <span className="timeline__period">{item.period}</span>
                    {item.current && <span className="timeline__badge">Current</span>}
                  </div>
                  <h3 className="timeline__role">{item.title}</h3>
                  <p className="timeline__company">
                    {item.company}
                    <span className="timeline__location"> · {item.location}</span>
                  </p>
                </div>

                <ul className="timeline__bullets">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="timeline__bullet">{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
