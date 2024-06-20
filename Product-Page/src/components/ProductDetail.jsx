// src/components/ProductDetail.jsx
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Card, CardContent, Typography, CardMedia, Box, Button, CircularProgress } from '@mui/material'
import { Fade } from 'react-awesome-reveal'

// Styled Components
const StyledCard = styled(Card)`
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const StyledCardMedia = styled(CardMedia)`
  height: 400px;
  object-fit: cover;
`

const StyledButton = styled(Button)`
  margin-top: 30px;
`

const LoadingContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const ErrorMessage = styled(Typography)`
  color: red;
  text-align: center;
`

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [id])

  if (loading) return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  )
  if (error) return (
    <ErrorMessage variant="h6">
      Error: {error.message}
    </ErrorMessage>
  )
  if (!product) return null

  return (
    <Box padding={2}>
      <Fade direction="up">
        <StyledCard>
          <StyledCardMedia
            component="img"
            alt={product.title}
            image={product.image}
          />
          <CardContent>
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="body1">${product.price}</Typography>
            <Typography variant="body2">Rating: {product.rating.rate}</Typography>
            <Typography variant="body2">{product.description}</Typography>
            <StyledButton
              variant="contained"
              onClick={() => navigate(-1)}
            >
              Back
            </StyledButton>
          </CardContent>
        </StyledCard>
      </Fade>
    </Box>
  )
}

export default ProductDetail
