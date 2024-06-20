// src/components/Footer.jsx
import { Box, Typography } from '@mui/material'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const StyledFooter = styled(Box)`
  background-color: #f8f8f8;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #e7e7e7;
`

const IconContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`

const SocialIcon = styled(motion.div)`
  color: grey;
  font-size: 1.5rem;
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`

const Footer = () => {
  return (
    <StyledFooter
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 Gadgets & Fashion. All rights reserved.
      </Typography>
      <IconContainer>
        <SocialIcon whileHover={{ scale: 1.2 }} hoverColor="#4267B2">
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon whileHover={{ scale: 1.2 }} hoverColor="#1DA1F2">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon whileHover={{ scale: 1.2 }} hoverColor="#E1306C">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon whileHover={{ scale: 1.2 }} hoverColor="#2867B2">
          <FaLinkedinIn />
        </SocialIcon>
      </IconContainer>
    </StyledFooter>
  )
}

export default Footer
