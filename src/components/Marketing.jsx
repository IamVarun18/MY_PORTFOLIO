import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Marketing.css'

const services = [
  {
    title: 'Web Development',
    metric: 'MERN Full Stack',
    description: 'React frontends, Node.js backends, MongoDB databases — complete web apps built, tested, and deployed.',
  },
  {
    title: 'Graphic Design',
    metric: 'Brand & Identity',
    description: 'Logos, banners, social kits, and brand guidelines that make your business look premium and consistent.',
  },
  {
    title: 'Social Media',
    metric: 'Content + Growth',
    description: 'Strategy, scheduling, content creation, and community management across Instagram, LinkedIn, and more.',
  },
  {
    title: 'Video & Motion',
    metric: 'Reels & Animations',
    description: 'Short-form video editing, reels, ads, and motion graphics crafted to stop the scroll and convert.',
  },
]

export default function Marketing() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.marketing-head', {
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.marketing', start: 'top 80%' },
      })
      gsap.from('.marketing-card', {
        opacity: 0, y: 40, duration: 0.7, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: '.marketing-grid', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="marketing" id="marketing" ref={ref}>
      <div className="marketing-inner">
        <div className="marketing-head">
          <span className="marketing-eyebrow">Varun &amp; Co.</span>
          <h2 className="section-title">The Full-Package Studio</h2>
          <p className="marketing-sub">
            One partner for everything your business needs online — code, design, content, and growth.
          </p>
        </div>
        <div className="marketing-grid">
          {services.map((s) => (
            <div className="marketing-card" key={s.title}>
              <div className="m-accent" />
              <div className="m-metric">{s.metric}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
