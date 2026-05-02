import { Link } from 'react-router-dom';
import { useIntersection } from '../../hooks/useIntersection';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { formatDate } from '../../utils/markdown';
import './BlogPreview.css';

export default function BlogPreview() {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 });
  const posts = useBlogPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="section blog-preview">
      <div className="section__inner" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`blog-preview__header reveal${isVisible ? ' reveal--visible' : ''}`}>
          <div>
            <p className="section__label">Insights</p>
            <h2 className="section__title blog-preview__title">Latest Writing</h2>
          </div>
          <Link to="/blog" className="blog-preview__view-all">
            View all posts →
          </Link>
        </div>

        <div className="blog-preview__grid">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className={`blog-card reveal reveal--delay-${Math.min(i + 1, 3)}${isVisible ? ' reveal--visible' : ''}`}
            >
              <div className="blog-card__meta">
                <time className="blog-card__date" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <div className="blog-card__tags">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="blog-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="blog-card__title">
                <Link to={`/blog/${post.slug}`} className="blog-card__title-link">
                  {post.title}
                </Link>
              </h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="blog-card__read-more" aria-label={`Read: ${post.title}`}>
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
