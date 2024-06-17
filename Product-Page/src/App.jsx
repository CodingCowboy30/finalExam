// src/App.jsx
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box, CircularProgress, Typography } from '@mui/material'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import LikedItems from './components/LikedItems'
import Footer from './components/Footer'

const App = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [likedItems, setLikedItems] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleToggleLike = (product) => {
    if (likedItems.find(item => item.id === product.id)) {
      setLikedItems(likedItems.filter(item => item.id !== product.id))
    } else {
      setLikedItems([...likedItems, product])
    }
  }

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress />
    </Box>
  )
  if (error) return (
    <Typography variant="h6" color="error" align="center">
      Error: {error.message}
    </Typography>
  )

  return (
    <Router>
      <NavBar onSearch={handleSearch} />
      <Box padding={2}>
        <Routes>
          <Route path="/" element={<ProductList products={filteredProducts} likedItems={likedItems} onToggleLike={handleToggleLike} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/liked" element={<LikedItems likedItems={likedItems} onToggleLike={handleToggleLike} />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  )
}

export default App
