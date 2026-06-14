import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/About.css'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-text',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-text', start: 'top 82%' } })
      gsap.fromTo('.stat',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.about-stats', start: 'top 85%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-container">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p>I'm the person businesses call when they know they need to grow but aren't sure what to build first. I figure out what actually moves the needle — then build it, fast.</p>
          <p>Website, ads, content, automations — whatever the goal needs. You don't manage tech or juggle freelancers. You tell me what you're stuck on; I handle the rest.</p>
        </div>
        <div className="about-stats">
          <div className="stat">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}
