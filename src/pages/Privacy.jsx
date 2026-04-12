export default function Privacy() {
  return (
    <div style={s.page}>

      {/* NAV */}
      <nav style={s.nav}>
        <span style={s.navLogo}>MultiverseAIAPP</span>
        <div style={s.navLinks}>
          <a href="/" style={s.navLink}>Home</a>
          <a href="/terms" style={s.navLink}>Terms</a>
        </div>
      </nav>

      {/* HEADER */}
      <div style={s.header}>
        <h1 style={s.h1}>Privacy Policy</h1>
        <p style={s.headerSub}>Last updated: April 2026</p>
      </div>

      {/* CONTENT */}
      <div style={s.content}>

        <h2 style={s.h2}>Overview</h2>
        <p style={s.p}>
          This Privacy Policy explains how Multiverse AI collects and uses basic
          information when you visit this website.
        </p>

        <hr style={s.divider} />

        <h2 style={s.h2}>Information We Collect</h2>
        <ul style={s.ul}>
          <li style={s.li}>Usage data (pages visited, browser type)</li>
          <li style={s.li}>IP address and device information</li>
          <li style={s.li}>Cookies for analytics and performance</li>
        </ul>

        <hr style={s.divider} />

        <h2 style={s.h2}>How We Use Information</h2>
        <ul style={s.ul}>
          <li style={s.li}>Improve website performance</li>
          <li style={s.li}>Understand user behavior</li>
          <li style={s.li}>Maintain security</li>
        </ul>

        <hr style={s.divider} />

        <h2 style={s.h2}>Cookies</h2>
        <p style={s.p}>
          Cookies help improve your experience. You can disable them in your browser.
        </p>

        <hr style={s.divider} />

        <h2 style={s.h2}>Third-Party Links</h2>
        <p style={s.p}>
          This website may link to third-party platforms. We are not responsible for their policies.
        </p>

        <hr style={s.divider} />

        <h2 style={s.h2}>Data Security</h2>
        <p style={s.p}>
          We take reasonable steps to protect your data.
        </p>

        <hr style={s.divider} />

        <h2 style={s.h2}>Contact</h2>
        <div style={s.contactCard}>
          <div style={s.contactName}>Multiverse AI</div>
          <p style={s.contactItem}>
            🌐 <a href="https://www.multiverseaiapp.com" style={s.link}>multiverseaiapp.com</a>
          </p>
          <p style={s.contactItem}>
            ✉️ <a href="mailto:support@multiverseaiapp.com" style={s.link}>
              support@multiverseaiapp.com
            </a>
          </p>
        </div>

      </div>

      {/* FOOTER */}
      <footer style={s.footer}>
        <span>© 2026 MultiverseAIAPP</span>
        <div style={s.footerLinks}>
          <a href="/privacy" style={s.footerLink}>Privacy Policy</a>
          <a href="/terms" style={s.footerLink}>Terms & Conditions</a>
        </div>
      </footer>

    </div>
  );
}

const s = {
  page: {
    minHeight: '100vh',
    background: 'radial-gradient(circle at top, #0f1b3d, #020617 70%)',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  },

  nav: {
    position: 'sticky',
    top: 0,
    background: 'rgba(2,6,23,0.95)',
    borderBottom: '1px solid #1e293b',
    padding: '0 10%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  navLogo: { fontWeight: 800, fontSize: '20px' },
  purple: { color: '#818cf8' },

  navLinks: { display: 'flex', gap: '20px' },
  navLink: { color: '#94a3b8', textDecoration: 'none', fontSize: '14px' },

  header: {
    padding: '60px 10%',
    borderBottom: '1px solid #1e293b',
  },

  badge: {
    background: 'rgba(129,140,248,0.15)',
    color: '#818cf8',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    marginBottom: '10px',
  },

  h1: { fontSize: '32px', fontWeight: 800 },
  headerSub: { fontSize: '13px', color: '#475569' },

  content: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 10%',
  },

  h2: { fontSize: '18px', marginBottom: '10px' },

  p: {
    fontSize: '14px',
    color: '#94a3b8',
    lineHeight: 1.7,
  },

  ul: { listStyle: 'none', paddingLeft: 0 },

  li: {
    fontSize: '14px',
    color: '#94a3b8',
    marginBottom: '6px',
  },

  divider: {
    border: 'none',
    borderTop: '1px solid #1e293b',
    margin: '30px 0',
  },

  contactCard: {
    background: '#020617',
    border: '1px solid #1e293b',
    borderRadius: '10px',
    padding: '20px',
    marginTop: '10px',
  },

  contactName: { fontWeight: 600 },
  contactItem: { fontSize: '14px', color: '#94a3b8' },

  link: { color: '#818cf8', textDecoration: 'none' },

  footer: {
    borderTop: '1px solid #1e293b',
    padding: '20px 10%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    fontSize: '13px',
    color: '#475569',
  },

  footerLinks: { display: 'flex', gap: '15px' },
  footerLink: { color: '#475569', textDecoration: 'none' },
};