import { useEffect, useState } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import { highlights } from '../../data/content';
import './Highlights.css';

function Counter({ target, duration = 2000, start }: { target: number; duration?: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame: number;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return <>{count}</>;
}

export default function Highlights() {
  const { ref, isVisible } = useIntersection({ threshold: 0.2 });

  return (
    <section id="highlights" className="section section--dark highlights">
      <div className="section__inner" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`reveal${isVisible ? ' reveal--visible' : ''}`}>
          <p className="section__label">Impact</p>
          <h2 className="section__title">Career Highlights</h2>
        </div>

        <div className="highlights__grid">
          {highlights.map((stat, i) => (
            <div
              key={stat.id}
              className={`highlight-stat reveal reveal--delay-${Math.min(i + 1, 5)}${isVisible ? ' reveal--visible' : ''}`}
            >
              <div className="highlight-stat__value" aria-live="polite">
                {stat.prefix}
                <Counter target={stat.target} start={isVisible} />
                {stat.suffix}
              </div>
              <p className="highlight-stat__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
