import { useIntersection } from '../../hooks/useIntersection';
import { expertise } from '../../data/content';
import './Expertise.css';

export default function Expertise() {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 });

  return (
    <section id="expertise" className="section section--dark expertise">
      <div className="section__inner" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`reveal${isVisible ? ' reveal--visible' : ''}`}>
          <p className="section__label">Core Domains</p>
          <h2 className="section__title">Areas of Expertise</h2>
        </div>

        <div className="expertise__grid">
          {expertise.map((domain, i) => (
            <article
              key={domain.id}
              className={`expertise__card reveal reveal--delay-${Math.min(i + 1, 6)}${isVisible ? ' reveal--visible' : ''}`}
            >
              <span className="expertise__icon" aria-hidden="true">{domain.icon}</span>
              <h3 className="expertise__card-title">{domain.title}</h3>
              <p className="expertise__card-desc">{domain.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
