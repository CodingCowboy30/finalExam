// src/components/Footer.jsx

import { Box, Typography } from '@mui/material'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const StyledFooter = styled(Box)`
  background: linear-gradient(135deg, #C0C0C0, #ADD8E6);
  padding: 10px ;
  text-align: center;
  border-top: 1px solid #e7e7e7;
`

const IconContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: -1px;
`

const SocialIcon = styled.div`
  color: grey;
  font-size: 2.5rem;
  &:hover {
    color: ${({ $hoverColor }) => $hoverColor}; // Use transient prop
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Fade direction='down'>
        <Typography variant='body1' color='textSecondary'>
          &copy; 2024 Gadgets & Fashion. All rights reserved.
        </Typography>
        <IconContainer>
          <SocialIcon $hoverColor='#4267B2'>
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon $hoverColor='#1DA1F2'>
            <FaTwitter />
          </SocialIcon>
          <SocialIcon $hoverColor='#E1306C'>
            <FaInstagram />
          </SocialIcon>
          <SocialIcon $hoverColor='#2867B2'>
            <FaLinkedinIn />
          </SocialIcon>
        </IconContainer>
      </Fade>
    </StyledFooter>
  )
}

export default Footer
