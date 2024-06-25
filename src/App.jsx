// src/App.jsx
import  { useState, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import LikedItems from './components/LikedItems'
import AnimatedBackground from './components/AnimatedBackground'
import theme from './theme'


const App = () => {
  const [products, setProducts] = useState([])
  const [likedItems, setLikedItems] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handleToggleLike = (product) => {
    setLikedItems((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    )
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <AnimatedBackground />
        <HashRouter>
          <NavBar onSearch={handleSearch} />
          <Routes>
            <Route path='/' element={<ProductList products={filteredProducts} likedItems={likedItems} onToggleLike={handleToggleLike} />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/liked' element={<LikedItems likedItems={likedItems} onToggleLike={handleToggleLike} />} />
          </Routes>
          <Footer />
        </HashRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
