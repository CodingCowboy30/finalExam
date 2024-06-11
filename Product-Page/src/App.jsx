import { useState, useEffect } from 'react'
import ProductList from './components/ProductList'

// Styled Components
import { Box } from '@mui/material'

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

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <Box padding={2}>
      <ProductList products={products} onProductClick={(product) => {
        console.log('Product clicked:', product)
      }} />
    </Box>
  )
}

export default App
