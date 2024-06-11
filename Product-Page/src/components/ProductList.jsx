import styled from 'styled-components';
import { Card, CardContent, Typography, CardMedia, Grid, Box } from '@mui/material';

// Styled Components
const StyledCard = styled(Card)`
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
  object-fit: cover;
`;

const StyledLink = styled.div`
  text-decoration: none;
  color: inherit;
`;

const ProductList = ({ products, onProductClick }) => (
  <Box padding={2}>
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <StyledLink onClick={() => onProductClick(product)}>
            <StyledCard>
              <StyledCardMedia
                component="img"
                alt={product.title}
                image={product.image}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Rating: {product.rating.rate}
                </Typography>
              </CardContent>
            </StyledCard>
          </StyledLink>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ProductList;
