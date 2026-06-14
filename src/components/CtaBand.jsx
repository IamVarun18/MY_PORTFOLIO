import '../styles/CtaBand.css'

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-inner">
        <h2 className="cta-title">Tell me what you're stuck on</h2>
        <p className="cta-sub">
          Tell me the problem — I'll tell you what it takes to fix it, usually within a day.
        </p>
        <div className="cta-actions">
          <a
            className="cta-btn cta-btn-wa"
            href="https://wa.me/916263394196"
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp
          </a>
          <a className="cta-btn cta-btn-mail" href="mailto:varun.018072001@gmail.com">
            Email me
          </a>
        </div>
      </div>
    </section>
  )
}
