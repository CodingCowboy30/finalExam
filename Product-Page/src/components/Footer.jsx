// src/components/Footer.jsx
import { Box, Typography } from '@mui/material'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const StyledFooter = styled(Box)`
  background: linear-gradient(to right, #1e1d1da0, #2f78df);
  padding: 30px 10px;
  text-align: center;
  border: 4px solid #0c0606;
`

const IconContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`

const SocialIcon = styled.div`
  color: grey;
  font-size: 1.5rem;
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Fade direction="up">
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 Gadgets & Fashion. All rights reserved.
        </Typography>
        <IconContainer>
          <SocialIcon hoverColor="#4267B2">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon hoverColor="#1DA1F2">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon hoverColor="#E1306C">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon hoverColor="#2867B2">
            <FaLinkedinIn />
          </SocialIcon>
        </IconContainer>
      </Fade>
    </StyledFooter>
  )
}

export default Footer
