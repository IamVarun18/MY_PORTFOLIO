import { useRef } from 'react'
import '../styles/DesignWork.css'

/**
 * HOW TO ADD YOUR IMAGES:
 * 1. Export Canva designs as JPG (800×800px)
 * 2. Drop them in: public/work/
 * 3. Replace src: null with src: '/work/filename.jpg'
 * Placeholders show until you add real images.
 */
const row1 = [
  { src: null, client: 'Ice Cream Brand',   bg: '#fce4ec' },
  { src: null, client: 'Sweet Donut',        bg: '#fff3e0' },
  { src: null, client: 'Vaseline',           bg: '#e8f5e9' },
  { src: null, client: 'Parachute',          bg: '#e3f2fd' },
  { src: null, client: 'Tata Tea Gold',      bg: '#f3e5f5' },
  { src: null, client: 'Diwali Post',        bg: '#fff8e1' },
]

const row2 = [
  { src: null, client: 'Parle Hide & Seek', bg: '#ede7f6' },
  { src: null, client: 'Vaibhav Dairy',     bg: '#fbe9e7' },
  { src: null, client: 'Quality Bazaar',    bg: '#e0f7fa' },
  { src: null, client: 'Pitara Filmz',      bg: '#e8eaf6' },
  { src: null, client: 'Nilons Mix',        bg: '#fce4ec' },
  { src: null, client: 'Fauget Coffee',     bg: '#efebe9' },
]

function MarqueeRow({ items, reverse = false }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="dw-row-wrap">
      <div className={`dw-track${reverse ? ' dw-track-rev' : ''}`}>
        {doubled.map((item, i) => (
          <div className="dw-item" key={i}>
            {item.src ? (
              <img src={item.src} alt={item.client} loading="lazy" />
            ) : (
              <div className="dw-placeholder" style={{ background: item.bg }}>
                <span>{item.client}</span>
                <small>Add image</small>
              </div>
            )}
            <div className="dw-overlay">
              <span>{item.client}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DesignWork() {
  const wrapRef = useRef(null)

  return (
    <section className="design-work" id="design">
      <div className="dw-head">
        <span className="dw-eyebrow">Creative Portfolio</span>
        <h2 className="section-title">Design Work</h2>
        <p className="dw-sub">
          Social media graphics, web builds, and video — crafted for real clients through Varun &amp; Co.
        </p>
      </div>

      <div className="dw-marquee" ref={wrapRef}>
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
      </div>

      <div className="dw-footer">
        <a
          href="https://instagram.com/VARUN_1807_"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          See more on Instagram →
        </a>
      </div>
    </section>
  )
}
