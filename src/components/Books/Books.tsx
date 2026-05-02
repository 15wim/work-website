import { useIntersection } from '../../hooks/useIntersection';
import { books } from '../../data/books';
import './Books.css';

export default function Books() {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 });
  const reading = books.filter(b => b.status === 'reading');
  const read = books.filter(b => b.status === 'read');

  return (
    <section id="books" className="section books">
      <div className="section__inner" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`reveal${isVisible ? ' reveal--visible' : ''}`}>
          <p className="section__label">Reading</p>
          <h2 className="section__title">What I&apos;m Reading</h2>
        </div>

        {reading.length > 0 && (
          <div className={`books__row reveal reveal--delay-1${isVisible ? ' reveal--visible' : ''}`}>
            <h3 className="books__row-label">Currently Reading</h3>
            <div className="books__list">
              {reading.map(book => (
                <article key={book.id} className="book-card book-card--reading">
                  <div className="book-card__spine" aria-hidden="true" />
                  <div className="book-card__body">
                    <h4 className="book-card__title">{book.title}</h4>
                    <p className="book-card__author">{book.author}</p>
                    {book.note && <p className="book-card__note">{book.note}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {read.length > 0 && (
          <div className={`books__row reveal reveal--delay-2${isVisible ? ' reveal--visible' : ''}`}>
            <h3 className="books__row-label">Have Read</h3>
            <div className="books__list">
              {read.map(book => (
                <article key={book.id} className="book-card">
                  <div className="book-card__spine" aria-hidden="true" />
                  <div className="book-card__body">
                    <h4 className="book-card__title">{book.title}</h4>
                    <p className="book-card__author">{book.author}</p>
                    {book.year && <p className="book-card__year">{book.year}</p>}
                    {book.note && <p className="book-card__note">{book.note}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <p className={`books__add-hint reveal reveal--delay-3${isVisible ? ' reveal--visible' : ''}`}>
          Add books by editing <code>src/data/books.ts</code>
        </p>
      </div>
    </section>
  );
}
