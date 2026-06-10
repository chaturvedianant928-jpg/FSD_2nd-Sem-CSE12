const productList = [
  { id: 1, name: 'iPhone 15 Pro Max', price: 134999, originalPrice: 159900, rating: 4.5, reviews: 2847, emoji: '📱', badge: 'Best Seller', category: 'Electronics' },
  { id: 2, name: 'MacBook Air M2', price: 114999, originalPrice: 129900, rating: 4.8, reviews: 1563, emoji: '💻', badge: 'Prime', category: 'Electronics' },
  { id: 3, name: 'Sony WH-1000XM5', price: 24990, originalPrice: 34990, rating: 4.7, reviews: 4201, emoji: '🎧', badge: 'Deal', category: 'Electronics' },
  { id: 4, name: 'Nike Air Max 270', price: 7995, originalPrice: 11995, rating: 4.3, reviews: 892, emoji: '👟', badge: 'Best Seller', category: 'Fashion' },
  { id: 5, name: 'Samsung 65" QLED TV', price: 89999, originalPrice: 129999, rating: 4.6, reviews: 731, emoji: '📺', badge: 'Prime', category: 'Electronics' },
  { id: 6, name: 'Kindle Paperwhite', price: 13999, originalPrice: 16999, rating: 4.8, reviews: 5621, emoji: '📖', badge: 'Amazon Pick', category: 'Books' },
  { id: 7, name: 'boAt Rockerz 450', price: 1299, originalPrice: 3990, rating: 4.1, reviews: 28943, emoji: '🎵', badge: 'Deal', category: 'Electronics' },
  { id: 8, name: 'Levi\'s 511 Jeans', price: 2099, originalPrice: 3999, rating: 4.4, reviews: 1204, emoji: '👖', badge: 'Best Seller', category: 'Fashion' },
  { id: 9, name: 'Instant Pot Duo', price: 8999, originalPrice: 12999, rating: 4.7, reviews: 3892, emoji: '🍲', badge: 'Prime', category: 'Home' },
  { id: 10, name: 'PS5 Controller', price: 5999, originalPrice: 7499, rating: 4.9, reviews: 6731, emoji: '🎮', badge: 'Best Seller', category: 'Gaming' },
  { id: 11, name: 'Adidas Ultraboost', price: 9999, originalPrice: 17999, rating: 4.5, reviews: 542, emoji: '🏃', badge: 'Deal', category: 'Fashion' },
  { id: 12, name: 'JBL Flip 6 Speaker', price: 8999, originalPrice: 11999, rating: 4.6, reviews: 2134, emoji: '🔊', badge: 'Prime', category: 'Electronics' },
]

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
      {[1,2,3,4,5].map(star => (
        <span key={star} style={{ color: star <= Math.round(rating) ? '#ff9900' : '#ddd', fontSize: '14px' }}>★</span>
      ))}
      <span style={{ fontSize: '12px', color: '#007185' }}>({rating})</span>
    </div>
  )
}

function Products({ addToCart }) {
  const discount = (original, current) => Math.round(((original - current) / original) * 100)

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>

      {/* Section Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#131921' }}>
          Today's Best Deals 🔥
        </h2>
        <span style={{ color: '#007185', cursor: 'pointer', fontSize: '14px' }}>See all deals →</span>
      </div>

      {/* Products Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '20px',
      }}>
        {productList.map(product => (
          <div key={product.id} style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            position: 'relative',
            cursor: 'pointer'
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
            }}
          >
            {/* Badge */}
            <div style={{
              position: 'absolute', top: '10px', left: '10px',
              backgroundColor: product.badge === 'Best Seller' ? '#FF6B35' : product.badge === 'Deal' ? '#cc0c39' : '#007185',
              color: 'white', padding: '3px 8px', borderRadius: '3px', fontSize: '11px', fontWeight: 'bold'
            }}>{product.badge}</div>

            {/* Emoji Image */}
            <div style={{ textAlign: 'center', fontSize: '72px', padding: '20px 0' }}>
              {product.emoji}
            </div>

            {/* Product Info */}
            <div style={{ fontSize: '13px', color: '#666', marginBottom: '4px' }}>{product.category}</div>
            <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#0F1111', lineHeight: '1.4' }}>
              {product.name}
            </h3>

            <StarRating rating={product.rating} />
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
              {product.reviews.toLocaleString()} reviews
            </div>

            {/* Price */}
            <div style={{ marginBottom: '14px' }}>
              <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#0F1111' }}>
                ₹{product.price.toLocaleString()}
              </span>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '2px' }}>
                <span style={{ fontSize: '13px', color: '#666', textDecoration: 'line-through' }}>
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span style={{ fontSize: '13px', color: '#cc0c39', fontWeight: 'bold' }}>
                  {discount(product.originalPrice, product.price)}% off
                </span>
              </div>
            </div>

            {/* Buttons */}
            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: '#ff9900',
                border: 'none',
                padding: '10px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '100%',
                fontSize: '14px',
                marginBottom: '8px'
              }}
            >Add to Cart</button>
            <button style={{
              backgroundColor: '#ffd814',
              border: 'none',
              padding: '10px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              width: '100%',
              fontSize: '14px'
            }}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products