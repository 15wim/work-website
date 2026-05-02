import { useIntersection } from '../../hooks/useIntersection';
import { skills } from '../../data/content';
import './Skills.css';

export default function Skills() {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 });

  return (
    <section id="skills" className="section skills">
      <div className="section__inner" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`reveal${isVisible ? ' reveal--visible' : ''}`}>
          <p className="section__label">Capabilities</p>
          <h2 className="section__title">Skills &amp; Tools</h2>
        </div>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`skills__group reveal reveal--delay-${Math.min(i + 1, 4)}${isVisible ? ' reveal--visible' : ''}`}
            >
              <div className="skills__group-header">
                <span className="skills__group-icon" aria-hidden="true">{group.icon}</span>
                <h3 className="skills__group-title">{group.category}</h3>
              </div>
              <div className="skills__tags">
                {group.skills.map(skill => (
                  <span key={skill} className="skills__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
