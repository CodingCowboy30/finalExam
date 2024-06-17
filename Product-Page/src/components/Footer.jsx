import { Box, Typography } from '@mui/material'
import styled from 'styled-components'

const StyledFooter = styled(Box)`
  background-color: #f8f8f8;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #e7e7e7;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 Gadgets & Fashion. All rights reserved.
      </Typography>
    </StyledFooter>
  )
}

export default Footer
