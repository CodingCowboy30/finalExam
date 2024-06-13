
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card, CardContent, Typography, CardMedia, Grid, Box, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

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
  color: rgba(0, 0, 0, 0.54);
`

const ProductList = ({ products }) => (
  <Box padding={3}>
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
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
                <LikeButton aria-label="add to favorites">
                  <FavoriteBorderIcon />
                </LikeButton>
              </CardContent>
            </StyledCard>
          </Link>
        </Grid>
      ))}
    </Grid>
  </Box>
)

ProductList.propTypes = {
  products: PropTypes.arrayOf(
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
}

export default ProductList
