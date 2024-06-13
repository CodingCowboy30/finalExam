
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box, CircularProgress, Typography } from '@mui/material'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import Footer from './components/Footer'

const App = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
      <NavBar />
      <Box padding={2}>
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  )
}

export default App
