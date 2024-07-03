import { Box, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <Box component={'header'}>
        <Typography fontSize={'28px'} fontWeight={'700'} fontFamily={'Ubuntu'} color={'#9785BA'} component={'h1'}>Bot AI</Typography>
    </Box>
  )
}

export default Navbar