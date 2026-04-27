import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Projects.css'

const projects = [
  {
    title: 'Ishita Music',
    description: 'Music artist website with streaming integrations, event listings, and a custom CMS for managing releases, videos, and gallery.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://ishitamusic.com', // TODO: replace with actual live URL
    accent: '#1a1a2e',
    badge: 'Live Site',
  },
  {
    title: 'Life in a Lens',
    description: 'Photography portfolio and client booking platform with a dynamic lightbox gallery, session enquiry form, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://life-in-a-lens.vercel.app',
    accent: '#2c1a10',
    badge: 'Live Site',
  },
  {
    title: 'Varun & Co.',
    description: 'Full-service digital agency website showcasing branding, social media, video, and web development services for businesses.',
    tags: ['React', 'Tailwind', 'Vercel'],
    link: '#', // TODO: add live URL when ready
    accent: '#2347d6',
    badge: 'Agency',
  },
]

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-head', {
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.projects', start: 'top 80%' },
      })
      gsap.from('.project-card', {
        opacity: 0, y: 50, duration: 0.7, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' },
      })
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
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-preview" style={{ background: project.accent }}>
              <span className="project-badge">{project.badge}</span>
              <div className="preview-bars">
                <div className="preview-bar" />
                <div className="preview-bar" />
                <div className="preview-bar" />
              </div>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
