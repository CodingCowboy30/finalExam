// src/components/LikedItems.jsx
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card, CardContent, Typography, CardMedia, Box, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'

// Styled Components
const StyledCard = styled(Card)`
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`

const StyledCardMedia = styled(CardMedia)`
  height: 250px;
  width: 100%;
  object-fit: cover;
`

const StyledTypography = styled(Typography)`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
`

const LikeButton = styled(IconButton)`
  position: absolute;
  bottom: 16px;
  right: 16px;
  color: red;
`

const LikedItems = ({ likedItems, onToggleLike }) => {
  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        My Favorites
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {likedItems.map((product) => (
          <Box key={product.id} padding={2}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt={product.title}
                  image={product.image}
                />
                <CardContent>
                  <StyledTypography variant="h6" gutterBottom>
                    {product.title}
                  </StyledTypography>
                  <StyledTypography variant="body2" color="textSecondary">
                    ${product.price}
                  </StyledTypography>
                  <StyledTypography variant="body2" color="textSecondary">
                    Rating: {product.rating.rate}
                  </StyledTypography>
                  <LikeButton
                    aria-label="remove from favorites"
                    onClick={(e) => {
                      e.preventDefault()
                      onToggleLike(product)
                    }}
                  >
                    <FavoriteIcon />
                  </LikeButton>
                </CardContent>
              </StyledCard>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

LikedItems.propTypes = {
  likedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
      image: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
        count: PropTypes.number
      }).isRequired
    })
  ).isRequired,
  onToggleLike: PropTypes.func.isRequired,
}

export default LikedItems
