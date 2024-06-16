// src/components/ProductList.jsx

import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card, CardContent, Typography, CardMedia, Box, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Slider from 'react-slick'

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

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 0 10px;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
  }
`

const ProductList = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <Box padding={3}>
      <StyledSlider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
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
}

export default ProductList
