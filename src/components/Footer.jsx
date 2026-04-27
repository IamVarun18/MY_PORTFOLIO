import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">VV<span>.</span></div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Varun Vishwakarma. All rights reserved.
        </p>
        <div className="footer-links">
          {/* TODO: replace YOUR_GITHUB and YOUR_LINKEDIN with your actual usernames */}
          <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:varun.018072001@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
