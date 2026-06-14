import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Skills.css'

const skills = {
  'What I Build': ['Fast Websites', 'Web Apps', 'E-commerce', 'Booking Systems', 'Custom CMS', 'Mobile-Ready'],
  'Growth & Marketing': ['More Traffic (SEO)', 'Google & Meta Ads', 'Lead Generation', 'Email Campaigns', 'Conversion Boost', 'Analytics'],
  'Brand & Content': ['Logo & Branding', 'Social Media', 'Graphic Design', 'Reels & Video', 'Content Strategy', 'Ad Creatives'],
}

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skills > .section-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.skills > .section-title', start: 'top 85%' } })
      gsap.fromTo('.skill-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.skills-grid', start: 'top 85%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="skills" id="skills" ref={ref}>
      <h2 className="section-title">What I Do</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-card" key={category}>
            <h3>{category}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
