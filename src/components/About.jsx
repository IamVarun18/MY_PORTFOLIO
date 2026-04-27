import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/About.css'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-text', start: 'top 82%' },
      })
      gsap.from('.stat', {
        opacity: 0, y: 30, duration: 0.6, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: '.about-stats', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-container">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p>I'm a full-stack developer and digital marketer passionate about building products that are both technically solid and strategically effective. I blend code and creativity to deliver real results.</p>
          <p>When I'm not shipping features, I'm analysing funnels, running A/B tests, or reading about the latest in web performance.</p>
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
