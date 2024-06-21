// src/components/CustomArrows.jsx
import { IconButton } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ArrowButton = styled(IconButton)`
  position: static;
  top: 2ch;
  color: #070707;
`

export const NextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <ArrowButton
      className={className}
      style={{ ...style, right: -750 }}
      onClick={onClick}
      component={motion.div}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowForwardIosIcon />
    </ArrowButton>
  )
}

export const PrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <ArrowButton
      className={className}
      style={{ ...style, left: 9 }}
      onClick={onClick}
      component={motion.div}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowBackIosIcon />
    </ArrowButton>
  )
}
