import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Projects.css'

// Project screenshots — drop your own JPG/PNG files in public/projects/
// (e.g. public/projects/ishita-music.jpg). Until the file exists the
// colored block shows; once added it appears automatically.
const projects = [
  {
    title: 'Ishita Music',
    result: 'Artist site that turns fans into bookings',
    description: 'Music, press, and gallery in one polished place — built to convert visitors into real event enquiries.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://ishitamusic.com', // TODO: replace with actual live URL
    accent: '#1a1a2e',
    badge: 'Live Site',
    shot: '/projects/ishita-music.png',
  },
  {
    title: 'Life in a Lens',
    result: 'Photography site that books sessions on autopilot',
    description: 'Portfolio plus a booking flow and lightbox gallery that fills the calendar — no back-and-forth.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://life-in-a-lens.vercel.app',
    accent: '#2c1a10',
    badge: 'Live Site',
    shot: '/projects/life-in-a-lens.png',
  },
  {
    title: 'Varun & Co.',
    result: 'Agency brand clients trust on sight',
    description: 'A full-service agency site for branding, content, and web — positioned to win bigger clients.',
    tags: ['React', 'Tailwind', 'Vercel'],
    link: '#', // TODO: add live URL when ready
    accent: '#2347d6',
    badge: 'Agency',
    shot: '/projects/varun-and-co.jpg',
  },
]

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-head',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-head', start: 'top 85%' } })
      gsap.fromTo('.project-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects-head">
        <h2 className="section-title">Work</h2>
        <p className="projects-sub">Real projects, real clients, real results.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => {
          const live = project.link && project.link !== '#'
          return (
            <a
              className="project-card"
              key={project.title}
              href={live ? project.link : undefined}
              target={live ? '_blank' : undefined}
              rel={live ? 'noreferrer' : undefined}
              aria-disabled={!live}
            >
              <div className="project-preview" style={{ background: project.accent }}>
                <span className="project-badge">{project.badge}</span>
                <div className="preview-bars">
                  <div className="preview-bar" />
                  <div className="preview-bar" />
                  <div className="preview-bar" />
                </div>
                {project.shot && (
                  <img
                    className="project-shot"
                    src={project.shot}
                    alt={`${project.title} website screenshot`}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                )}
              </div>
              <div className="project-body">
                <span className="project-client">{project.title}</span>
                <h3 className="project-result">{project.result}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="project-link">
                  {live ? 'View Project →' : 'Coming soon'}
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
