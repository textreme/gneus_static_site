import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>gneus</title>
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            background-color: #000;
            color: #fff;
            font-family: sans-serif;
          }
        `}</style>
      </Head>

      <div style={pageStyle}>
        {/* HEADER */}
        <header style={headerStyle}>
          <div style={headerInner}>
            <div style={logo}>gneus</div>
          </div>
        </header>

        {/* MAIN */}
        <main style={mainStyle}>
          <h1 style={heroText}>Unleash your inner genius</h1>
<p style={subText}>
  One-on-one online academic and exam tutoring<br />
  applying technology to accelerate learning and deliver extraordinary outcomes.
</p>
          <div style={buttonGroup}>
            <a href="mailto:gneus.live@gmail.com" style={primaryButton}>Get in touch</a>
            <a href="https://www.gneus.live" target="_blank" rel="noopener noreferrer" style={secondaryButton}>Learn</a>
          </div>
        </main>

        {/* FOOTER */}
        <footer style={footerStyle}>
          <div style={footerContent}>
            <p style={footerText}>
              © {new Date().getFullYear()} GNEUS, LLC
            </p>
            <p style={footerText}>
<a href="/terms.pdf" target="_blank" rel="noopener noreferrer" style={footerLink}>Terms</a>
<a href="/privacy.pdf" target="_blank" rel="noopener noreferrer" style={footerLink}>Privacy</a>

            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const headerStyle = {
  backgroundColor: '#000',
  padding: '1rem 2rem',
};

const headerInner = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const logo = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const mainStyle = {
  flex: 1,
  padding: '6rem 2rem',
  textAlign: 'center',
};

const heroText = {
  fontSize: '2.75rem',
  fontWeight: 'bold',
  marginBottom: '1.25rem',
};

const subText = {
  fontSize: '1.2rem',
  color: '#ccc',
  maxWidth: '700px',
  margin: '0 auto 2.5rem',
};

const buttonGroup = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
};

const primaryButton = {
  backgroundColor: '#fff',
  color: '#000',
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  fontSize: '1rem',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const secondaryButton = {
  backgroundColor: '#222',
  color: '#fff',
  border: '1px solid #444',
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  fontSize: '1rem',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const footerStyle = {
  backgroundColor: '#000',
  padding: '2rem 1rem',
  textAlign: 'center',
};

const footerContent = {
  maxWidth: '800px',
  margin: '0 auto',
};

const footerText = {
  fontSize: '0.9rem',
  color: '#888',
  margin: '0.5rem 0',
};

const footerLink = {
  color: '#888',
  textDecoration: 'underline',
  marginLeft: '0.3rem',
  marginRight: '0.3rem',
};
