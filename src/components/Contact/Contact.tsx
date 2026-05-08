import { useState } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import './Contact.css';

// Get your free access key at web3forms.com — enter walid.matin@gmail.com and paste the key here.
const WEB3FORMS_KEY = '01f774b2-27d5-4d01-8392-e186fe3b394a';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export default function Contact() {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    data.append('access_key', WEB3FORMS_KEY);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section section--dark contact">
      <div className="section__inner contact__inner" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`contact__left reveal${isVisible ? ' reveal--visible' : ''}`}>
          <p className="section__label">Get in Touch</p>
          <h2 className="section__title contact__title">Let&apos;s Connect</h2>
          <p className="contact__intro">
            Whether you are exploring data strategy, enterprise transformation, or just want to
            talk about the intersection of technology and business — I am always open to a good
            conversation.
          </p>

          <div className="contact__links">
            <a
              href="https://www.linkedin.com/in/walidmatin/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
              aria-label="Connect on LinkedIn"
            >
              <span className="contact__link-icon" aria-hidden="true">in</span>
              <span>linkedin.com/in/walidmatin</span>
            </a>
            <a href="mailto:walid.matin@gmail.com" className="contact__link" aria-label="Send email">
              <span className="contact__link-icon" aria-hidden="true">@</span>
              <span>walid.matin@gmail.com</span>
            </a>
            <div className="contact__link">
              <span className="contact__link-icon" aria-hidden="true">◎</span>
              <span>Stoney Creek, Ontario, Canada</span>
            </div>
          </div>
        </div>

        <div className={`contact__right reveal reveal--delay-2${isVisible ? ' reveal--visible' : ''}`}>
          {status === 'sent' ? (
            <div className="contact__success" role="alert">
              <span className="contact__success-icon" aria-hidden="true">✓</span>
              <p>Message sent. I&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="What would you like to discuss?"
                  rows={5}
                  required
                />
              </div>

              {status === 'error' && (
                <p className="contact__error" role="alert">
                  Something went wrong. Please email directly at walid.matin@gmail.com
                </p>
              )}

              <button
                type="submit"
                className="contact__submit"
                disabled={status === 'sending'}
                aria-busy={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="contact__footer">
        <div className="contact__footer-inner">
          <p className="contact__copyright">
            © {new Date().getFullYear()} Walid Matin · VP, Strategic Insights &amp; Data Office
          </p>
        </div>
      </div>
    </section>
  );
}
