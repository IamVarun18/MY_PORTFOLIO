import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Skills.css'

const skills = {
  Development: ['React', 'Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'Git'],
  Marketing: ['SEO', 'Google Ads', 'Meta Ads', 'Email Marketing', 'Analytics', 'CRO'],
  Tools: ['Figma', 'Vite', 'Tailwind CSS', 'Supabase', 'Vercel', 'n8n'],
}

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills > .section-title', {
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.skills', start: 'top 80%' },
      })
      gsap.from('.skill-card', {
        opacity: 0, y: 40, duration: 0.7, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.skills-grid', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="skills" id="skills" ref={ref}>
      <h2 className="section-title">Skills</h2>
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
