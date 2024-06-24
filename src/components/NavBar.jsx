import { AppBar, Toolbar, Typography, IconButton, Box, InputBase } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff', // Change search icon color here
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#ffffff', // Change text color here
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    '::placeholder': {
      color: '#cccccc', // Change placeholder color here
    },
  },
}))

const NavBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value)
  }

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Fade direction="left">
            <Typography variant="h6" noWrap>
              Gadgets & Fashion
            </Typography>
          </Fade>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleInputChange}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Link to="/liked" style={{ color: 'inherit' }}>
          <IconButton color="inherit">
            <FavoriteIcon />
          </IconButton>
        </Link>
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
