import { useEffect } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

const techStack = ['React', 'Node.js', 'Python', 'PostgreSQL', 'Tailwind', 'Supabase']

export default function Hero() {
  useEffect(() => {
    gsap.to('.hero-badge', { opacity: 1, y: 0, duration: 0.7, delay: 0.2, ease: 'power3.out' })
    gsap.to('.hero h1',    { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out' })
    gsap.to('.hero-sub',   { opacity: 1, y: 0, duration: 0.8, delay: 0.75, ease: 'power3.out' })
    gsap.to('.hero-cta',   { opacity: 1, y: 0, duration: 0.8, delay: 1,   ease: 'power3.out' })
    gsap.to('.hv-card',    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15, delay: 0.7 })

    const words = ['websites', 'brands', 'products', 'experiences', 'growth']
    let wi = 0, ci = 0, deleting = false
    const el = document.getElementById('typed-text')
    let timerId = null
    function type() {
      const word = words[wi]
      if (!deleting) {
        el.textContent = word.slice(0, ci + 1); ci++
        if (ci === word.length) { timerId = setTimeout(() => { deleting = true; type() }, 1800); return }
      } else {
        el.textContent = word.slice(0, ci - 1); ci--
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length }
      }
      timerId = setTimeout(type, deleting ? 60 : 100)
    }
    timerId = setTimeout(type, 1400)
    return () => clearTimeout(timerId)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">Full-Stack Developer &amp; Digital Marketer</span>
          <h1>
            <span className="hero-static">We  build</span>
            <span className="typed-wrap">
              <span id="typed-text"></span><span className="cursor">|</span>
            </span>
            <span className="hero-static hero-static-dim">that grow businesses.</span>
          </h1>
          <p className="hero-sub">
            React · Node.js · SEO · Paid Ads · CRO — all under one roof.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">See My Work</a>
            <a href="#contact" className="btn-ghost">Get In Touch</a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hv-card hv-card-stack">
            <div className="hv-chrome">
              <span className="hv-dot" /><span className="hv-dot" /><span className="hv-dot" />
              <span className="hv-filename">tech-stack.json</span>
            </div>
            <div className="hv-tags">
              {techStack.map(t => <span key={t} className="hv-tag">{t}</span>)}
            </div>
          </div>

          <div className="hv-card hv-card-stats">
            <div className="hv-stat"><span className="hv-num">20+</span><span className="hv-lbl">Projects</span></div>
            <div className="hv-divider" />
            <div className="hv-stat"><span className="hv-num">3+</span><span className="hv-lbl">Years</span></div>
            <div className="hv-divider" />
            <div className="hv-stat"><span className="hv-num">10+</span><span className="hv-lbl">Clients</span></div>
          </div>

          <div className="hv-card hv-card-avail">
            <span className="hv-pulse" />
            Available for new projects
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
