import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Contact.css'

// TODO: Sign up at formspree.io, create a form, and paste your form ID below
const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function Contact() {
  const ref = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-head',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-head', start: 'top 85%' } })
      gsap.fromTo('.contact-info',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-body', start: 'top 80%' } })
      gsap.fromTo('.contact-form',
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-body', start: 'top 80%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact-inner">

        <div className="contact-head">
          <span className="contact-eyebrow">Contact</span>
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-sub">
            Have a project in mind? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <a href="mailto:varun.018072001@gmail.com" className="contact-link-item">
              <span className="cl-label">Email</span>
              <span className="cl-val">varun.018072001@gmail.com</span>
            </a>
            <a href="tel:+916263394196" className="contact-link-item">
              <span className="cl-label">Phone</span>
              <span className="cl-val">+91 6263394196</span>
            </a>
            <a href="https://instagram.com/VARUN_1807_" target="_blank" rel="noreferrer" className="contact-link-item">
              <span className="cl-label">Instagram</span>
              <span className="cl-val">@VARUN_1807_</span>
            </a>
            {/* TODO: replace YOUR_LINKEDIN and YOUR_GITHUB with your actual usernames */}
            <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer" className="contact-link-item">
              <span className="cl-label">LinkedIn</span>
              <span className="cl-val">linkedin.com/in/varun-vishwakarma</span>
            </a>
            <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer" className="contact-link-item">
              <span className="cl-label">GitHub</span>
              <span className="cl-val">github.com/varun-vishwakarma</span>
            </a>
          </div>

          {status === 'success' ? (
            <div className="form-success">
              <div className="form-success-icon">&#10003;</div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              <button className="btn-send" onClick={() => setStatus('idle')}>Send another →</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required disabled={status === 'loading'} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="your@email.com" required disabled={status === 'loading'} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required disabled={status === 'loading'}></textarea>
              </div>
              {status === 'error' && (
                <p className="form-error">Something went wrong — please try emailing me directly.</p>
              )}
              <button type="submit" className="btn-send" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
