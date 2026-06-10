function Footer() {
  return (
    <footer style={{ marginTop: '60px' }}>
      {/* Back to top */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          backgroundColor: '#37475a',
          color: 'white',
          textAlign: 'center',
          padding: '14px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
        Back to top ↑
      </div>

      {/* Links Section */}
      <div style={{
        backgroundColor: '#232f3e',
        color: 'white',
        padding: '40px 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '30px'
      }}>
        {[
          { title: 'Get to Know Us', links: ['About Amazon', 'Careers', 'Press Releases', 'Amazon Science'] },
          { title: 'Connect with Us', links: ['Facebook', 'Twitter', 'Instagram', 'YouTube'] },
          { title: 'Make Money with Us', links: ['Sell on Amazon', 'Affiliate Program', 'Advertise', 'Self-Publish'] },
          { title: 'Let Us Help You', links: ['COVID-19 Info', 'Your Account', 'Returns & Replacements', 'Help'] }
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ marginBottom: '14px', fontSize: '15px' }}>{col.title}</h4>
            {col.links.map(link => (
              <div key={link} style={{ color: '#ccc', fontSize: '13px', marginBottom: '8px', cursor: 'pointer' }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = '#ccc'}
              >{link}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div style={{
        backgroundColor: '#131921',
        color: '#ccc',
        textAlign: 'center',
        padding: '24px',
      }}>
        <p style={{ color: '#ff9900', fontSize: '24px', fontStyle: 'italic', fontWeight: 'bold', marginBottom: '8px' }}>amazon</p>
        <p style={{ fontSize: '12px' }}>© 2024 Amazon Clone by Anant Chaturvedi | ABES Engineering College</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px', fontSize: '12px' }}>
          {['Conditions of Use', 'Privacy Notice', 'Interest-Based Ads'].map(link => (
            <span key={link} style={{ cursor: 'pointer' }}>{link}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer