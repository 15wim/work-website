import { useIntersection } from '../../hooks/useIntersection';
import { education } from '../../data/content';
import './Education.css';

export default function Education() {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 });

  return (
    <section id="education" className="section education">
      <div className="section__inner" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`reveal${isVisible ? ' reveal--visible' : ''}`}>
          <p className="section__label">Academic</p>
          <h2 className="section__title">Education</h2>
        </div>

        <div className="education__grid">
          {education.map((item, i) => (
            <article
              key={item.id}
              className={`edu-card reveal reveal--delay-${Math.min(i + 1, 3)}${isVisible ? ' reveal--visible' : ''}`}
            >
              <div className="edu-card__year">{item.year}</div>
              <h3 className="edu-card__degree">{item.degree}</h3>
              <p className="edu-card__institution">{item.institution}</p>
              <p className="edu-card__location">{item.location}</p>
              {item.focus && <p className="edu-card__focus">{item.focus}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
