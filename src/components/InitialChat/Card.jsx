import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Card = ({heading, text, handleClick}) => {
    console.log(heading);
    console.log(text);
  return (
    <Stack p={2}  sx={{cursor:'pointer'}} direction={'row'} bgcolor={'white'} borderRadius={1}
    onClick={() => handleClick(heading)} >
        <Box>
        <Typography sx={{color: "#000000", fontFamily:'Ubuntu', fontWeight:'700', fontSize:'20px', lineHeight:'22.98px'}} component={'h3'}>{heading}</Typography>
        <Typography sx={{color: "#00000080", fontFamily:'Open Sans', fontWeight:'400', fontSize:'2', lineHeight:'21.79px'}} component={'p'}>{text}</Typography>
        </Box>
    
    </Stack>
  )
}

export default Card