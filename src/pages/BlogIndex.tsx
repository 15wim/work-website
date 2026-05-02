import { Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { formatDate } from '../utils/markdown';
import './Blog.css';

export default function BlogIndex() {
  const posts = useBlogPosts();

  return (
    <div className="blog-page">
      <div className="blog-page__hero">
        <div className="blog-page__hero-inner">
          <Link to="/" className="blog-page__back">← Back to site</Link>
          <p className="blog-page__eyebrow">Insights &amp; Commentary</p>
          <h1 className="blog-page__heading">Writing</h1>
          <p className="blog-page__sub">
            Weekly observations on data strategy, analytics leadership, financial services
            technology, and the intersection of people and systems.
          </p>
        </div>
      </div>

      <div className="blog-page__body">
        <div className="blog-page__inner">
          {posts.length === 0 ? (
            <p className="blog-page__empty">No posts yet — check back soon.</p>
          ) : (
            <div className="blog-index__list">
              {posts.map(post => (
                <article key={post.slug} className="blog-index__item">
                  <div className="blog-index__meta">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <div className="blog-index__tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="blog-index__tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h2 className="blog-index__title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-index__excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="blog-index__read-more" aria-label={`Read: ${post.title}`}>
                    Read →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
