import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#projects', label: 'Work' },
  { href: '#design', label: 'Design' },
  { href: '#marketing', label: 'Services' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const nav = document.getElementById('navbar')
    const handleScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav id="navbar">
      <a href="#home" className="logo" aria-label="Back to top">VV<span>.</span></a>

      <ul className="nav-links">
        {links.map(({ href, label }) => (
          <li key={href}><a href={href}>{label}</a></li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta">Hire Me</a>

      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
          <a href="#contact" className="btn-primary" onClick={close}>Hire Me</a>
        </div>
      )}
    </nav>
  )
}
