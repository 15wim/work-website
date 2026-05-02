import { useIntersection } from '../../hooks/useIntersection';
import { certifications } from '../../data/content';
import './Certifications.css';

export default function Certifications() {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 });

  return (
    <section id="certifications" className="section certifications">
      <div className="section__inner" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`reveal${isVisible ? ' reveal--visible' : ''}`}>
          <p className="section__label">Credentials</p>
          <h2 className="section__title">Certifications</h2>
        </div>

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className={`cert-item reveal reveal--delay-${Math.min(i + 1, 6)}${isVisible ? ' reveal--visible' : ''}`}
            >
              <span className="cert-item__icon" aria-hidden="true">✦</span>
              <div>
                <p className="cert-item__name">{cert.name}</p>
                {cert.issuer && <p className="cert-item__issuer">{cert.issuer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
