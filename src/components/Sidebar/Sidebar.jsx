import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import newchat from "../../assets/newchat.png"
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({closeMenu}) => {
  const isMobile = useMediaQuery('(max-width:800px)')
  return (
    <Box >
      {
        isMobile && 
        <Button endIcon={<CloseIcon />}
        sx={{width: 1, justifyContent:'flex-end'}}
        onClick={closeMenu}
        >
          Close
        </Button>
      }


      <a style={{textDecoration:'none'}} href='/'>
     
     
       <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{
          bgcolor:"#D7C7F4",
          '&:hover': {
            bgcolor: "#AF9FCD"
          }
        }}>
          <Box component={'img'} src={newchat} height={45} width={45}
          flexShrink={0}
          boxShadow={4}
          >
          </Box>
          <Typography>New Chat</Typography>
          <EditIcon />
        
      </Stack>
      </a>
      <Box sx={{bgcolor:"#D7C7F4", borderRadius:'5px', 
        '&:hover': {
          bgcolor: "#AF9FCD"
        }

      }} direction={'row'} m={3} p={1}  justifyContent={'center'}>
          <a href='/history' style={{textDecoration:'none'}}>
            <Typography textAlign={'center'}>Past Conversation</Typography>
          </a>
            
      </Box>

    </Box>
   
  )
}

export default Sidebar