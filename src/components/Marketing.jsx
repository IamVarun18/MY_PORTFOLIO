import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Marketing.css'

const services = [
  {
    label: 'Build',
    outcome: 'Websites that convert',
    description: 'Sites built to turn visitors into customers — clear, fast, and made to sell. Not just pretty.',
  },
  {
    label: 'Grow',
    outcome: 'More clients',
    description: 'SEO, ads, and content that bring the right people to you — and turn them into real enquiries.',
  },
  {
    label: 'Brand',
    outcome: 'A brand people trust',
    description: 'Logo, identity, and content that make your business look as good as it actually is.',
  },
  {
    label: 'Maintain',
    outcome: 'Run it for you',
    description: 'Updates, fixes, and improvements handled. It stays live, fast, and growing — without you lifting a finger.',
  },
]

export default function Marketing() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.marketing-head',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.marketing-head', start: 'top 85%' } })
      gsap.fromTo('.marketing-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.marketing-grid', start: 'top 85%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="marketing" id="marketing" ref={ref}>
      <div className="marketing-inner">
        <div className="marketing-head">
          <span className="marketing-eyebrow">What you get</span>
          <h2 className="section-title">Outcomes, not deliverables</h2>
          <p className="marketing-sub">
            One partner for everything your business needs to grow — built, then run for you.
          </p>
        </div>
        <div className="marketing-grid">
          {services.map((s) => (
            <div className="marketing-card" key={s.outcome}>
              <div className="m-accent" />
              <h3>{s.label}</h3>
              <div className="m-metric">{s.outcome}</div>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
        <p className="marketing-tech">Built with: React, Node, and modern tooling.</p>
      </div>
    </section>
  )
}
