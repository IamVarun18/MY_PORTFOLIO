import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/HowIWork.css'

const steps = [
  {
    n: '01',
    title: 'Understand',
    text: "We talk. I learn your business, your customers, and what's actually holding growth back.",
  },
  {
    n: '02',
    title: 'Plan',
    text: 'I map the shortest path to results — what to build, what to skip, and in what order.',
  },
  {
    n: '03',
    title: 'Build Fast',
    text: 'Website, ads, content, automations — built and shipped quickly, and done right.',
  },
  {
    n: '04',
    title: 'Run It For You',
    text: 'I keep it running and improving. You focus on the business, not the tech.',
  },
]

export default function HowIWork() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hiw-head',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.hiw-head', start: 'top 85%' } })
      gsap.fromTo('.hiw-step',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.hiw-grid', start: 'top 85%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="how-i-work" id="process" ref={ref}>
      <div className="hiw-head">
        <span className="hiw-eyebrow">How I Work</span>
        <h2 className="section-title">From stuck to sorted</h2>
        <p className="hiw-sub">
          One partner, start to finish. You tell me what you're stuck on — I handle the rest.
        </p>
      </div>

      <div className="hiw-grid">
        {steps.map((step) => (
          <div className="hiw-step" key={step.n}>
            <span className="hiw-num">{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
