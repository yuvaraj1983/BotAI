import { Box, Typography, useMediaQuery } from '@mui/material'
import { useOutletContext } from 'react-router-dom'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const { handleMobileMenu } = useOutletContext();
  const isMobile = useMediaQuery('(max-width:800px)');

  return (
    <Box component={'header'}>
      {
        isMobile && <MenuIcon onClick={() => handleMobileMenu(prev => !prev) } />
      }
        <Typography fontSize={'28px'} fontWeight={'700'} fontFamily={'Ubuntu'} color={'#9785BA'} component={'h1'}>Bot AI</Typography>
    </Box>
  )
}

export default Navbar