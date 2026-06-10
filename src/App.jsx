import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Hero />
      <Products addToCart={addToCart} />
      <Footer />
    </>
  )
}

export default App