// src/components/ProductList.jsx
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card, CardContent, Typography, CardMedia, Box, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { NextArrow, PrevArrow } from './CustomArrows'
import { motion } from 'framer-motion'

// Styled Components
const StyledCard = styled(Card)`
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  position: sticky;
  width: 50%;  /* Ensure cards take full width of the slide */
  height: 45vh;
  padding: 1px 20px 0px 10px;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`

const StyledCardMedia = styled(CardMedia)`
  padding: 10px;
  height: 200px;
  width: 100%;
  object-fit: scale-down;
`

const StyledTypography = styled(Typography)`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
`

const LikeButton = styled(IconButton)`
  position: absolute;
  bottom: 16px;
  right: 16px;
  color: ${({ liked }) => (liked ? 'red' : 'rgba(0, 0, 0, 0.54)')}; // Change color based on liked state
`

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 1px 2px 0.5px 3px;
    margin: 20px 0px -90px -1px;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
  }
`

const ProductList = ({ products, likedItems, onToggleLike }) => {
  const settings = {
    dots: true, // Show dots
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Box padding={[1, 3]} marginBottom={[1, 5]}>
      <StyledSlider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
              <StyledCard as={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                    aria-label="add to favorites"
                    liked={!!likedItems.find(item => item.id === product.id)}
                    onClick={(e) => {
                      e.preventDefault()
                      onToggleLike(product)
                    }}
                    component={motion.div}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {likedItems.find(item => item.id === product.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </LikeButton>
                </CardContent>
              </StyledCard>
            </Link>
          </div>
        ))}
      </StyledSlider>
    </Box>
  )
}

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
  likedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  onToggleLike: PropTypes.func.isRequired,
}

export default ProductList
