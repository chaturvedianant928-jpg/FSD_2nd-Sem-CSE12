function Navbar({ cartCount }) {
  return (
    <>
      {/* Top Bar */}
      <div style={{
        backgroundColor: '#232f3e',
        color: 'white',
        padding: '4px 20px',
        fontSize: '12px',
        textAlign: 'right'
      }}>
        Deliver to India 📍 Ghaziabad 201009
      </div>

      {/* Main Navbar */}
      <nav style={{
        backgroundColor: '#131921',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        gap: '10px'
      }}>
        {/* Logo */}
        <div style={{
          border: '1px solid transparent',
          padding: '6px 8px',
          borderRadius: '3px',
          cursor: 'pointer'
        }}>
          <span style={{ fontSize: '26px', fontWeight: 'bold', color: '#ff9900', fontStyle: 'italic' }}>amazon</span>
          <span style={{ fontSize: '10px', color: '#ff9900', display: 'block', textAlign: 'right' }}>.in</span>
        </div>

        {/* Search Bar */}
        <div style={{ display: 'flex', flex: 1, maxWidth: '700px' }}>
          <select style={{
            backgroundColor: '#f3f3f3',
            border: 'none',
            padding: '0 8px',
            borderRadius: '4px 0 0 4px',
            fontSize: '12px',
            cursor: 'pointer'
          }}>
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Books</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon.in"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '15px',
              border: 'none',
              outline: 'none'
            }}
          />
          <button style={{
            backgroundColor: '#ff9900',
            border: 'none',
            padding: '0 16px',
            cursor: 'pointer',
            borderRadius: '0 4px 4px 0',
            fontSize: '20px'
          }}>🔍</button>
        </div>

        {/* Nav Links */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '14px' }}>
          <div style={{ cursor: 'pointer' }}>
            <div style={{ fontSize: '11px', color: '#ccc' }}>Hello, Anant</div>
            <div style={{ fontWeight: 'bold' }}>Account & Lists ▾</div>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <div style={{ fontSize: '11px', color: '#ccc' }}>Returns</div>
            <div style={{ fontWeight: 'bold' }}>& Orders</div>
          </div>
          <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '28px' }}>🛒</span>
            <div>
              <div style={{ color: '#ff9900', fontWeight: 'bold', fontSize: '16px' }}>{cartCount}</div>
              <div style={{ fontSize: '12px' }}>Cart</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Nav */}
      <div style={{
        backgroundColor: '#232f3e',
        padding: '8px 20px',
        display: 'flex',
        gap: '20px',
        color: 'white',
        fontSize: '14px',
        overflowX: 'auto'
      }}>
        {['☰ All', 'Today\'s Deals', 'Customer Service', 'Electronics', 'Fashion', 'Prime', 'Mobiles', 'Books', 'Toys', 'Sports'].map(item => (
          <span key={item} style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}
            onMouseEnter={e => e.target.style.border = '1px solid white'}
            onMouseLeave={e => e.target.style.border = 'none'}
          >{item}</span>
        ))}
      </div>
    </>
  )
}

export default Navbar