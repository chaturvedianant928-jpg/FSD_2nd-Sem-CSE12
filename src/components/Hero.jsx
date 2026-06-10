function Hero() {
  return (
    <div>
      {/* Main Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #232f3e 0%, #37475a 50%, #232f3e 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(255,153,0,0.1) 0%, transparent 60%)'
        }}/>
        <h1 style={{ fontSize: '52px', fontWeight: 'bold', marginBottom: '16px', letterSpacing: '-1px' }}>
          Welcome to <span style={{ color: '#ff9900', fontStyle: 'italic' }}>amazon</span>
        </h1>
        <p style={{ fontSize: '20px', color: '#ccc', marginBottom: '30px' }}>
          Millions of products. Unbeatable prices. Free delivery on Prime!
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button style={{
            backgroundColor: '#ff9900',
            border: 'none',
            padding: '14px 32px',
            borderRadius: '25px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>Shop Now</button>
          <button style={{
            backgroundColor: 'transparent',
            border: '2px solid #ff9900',
            color: '#ff9900',
            padding: '14px 32px',
            borderRadius: '25px',
            fontSize: '16px',
            cursor: 'pointer'
          }}>Try Prime</button>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        {[
          { number: '10Cr+', label: 'Products' },
          { number: '2 Day', label: 'Prime Delivery' },
          { number: '100%', label: 'Secure Payments' },
          { number: '24/7', label: 'Customer Support' }
        ].map(stat => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#131921' }}>{stat.number}</div>
            <div style={{ fontSize: '13px', color: '#666' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Category Banners */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        padding: '30px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {[
          { emoji: '📱', title: 'Electronics', bg: '#1a1a2e', desc: 'Up to 40% off' },
          { emoji: '👗', title: 'Fashion', bg: '#2d1b33', desc: 'New arrivals daily' },
          { emoji: '🏠', title: 'Home & Kitchen', bg: '#1b2838', desc: 'Starting ₹199' },
          { emoji: '📚', title: 'Books', bg: '#1a2e1a', desc: 'Min 30% off' }
        ].map(cat => (
          <div key={cat.title} style={{
            backgroundColor: cat.bg,
            color: 'white',
            padding: '30px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'transform 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>{cat.emoji}</div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{cat.title}</div>
            <div style={{ fontSize: '13px', color: '#ff9900', marginTop: '6px' }}>{cat.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero