import { useParams, Link, Navigate } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { formatDate } from '../utils/markdown';
import './Blog.css';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const posts = useBlogPosts();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="blog-page">
      <div className="blog-page__hero blog-page__hero--post">
        <div className="blog-page__hero-inner">
          <Link to="/blog" className="blog-page__back">← All posts</Link>
          <div className="blog-post__meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <div className="blog-index__tags">
              {post.tags.map(tag => (
                <span key={tag} className="blog-index__tag">{tag}</span>
              ))}
            </div>
          </div>
          <h1 className="blog-page__heading blog-page__heading--post">{post.title}</h1>
        </div>
      </div>

      <div className="blog-page__body">
        <div className="blog-page__inner blog-post__content">
          <div
            className="blog-post__prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="blog-post__footer">
            <p className="blog-post__author">
              — Walid Matin, VP Strategic Insights &amp; Data Office
            </p>
            <Link to="/blog" className="blog-index__read-more">← Back to all posts</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
