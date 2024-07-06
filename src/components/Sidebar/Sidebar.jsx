import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import newchat from "../../assets/newchat.png"
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { NoEncryption } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box>
      <a style={{textDecoration:'none'}} href='/'>
     
     
       <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{
          bgcolor:"#D7C7F4",
          '&:hover': {
            bgcolor: "#AF9FCD"
          }
        }}>
          <Box component={'img'} src={newchat} height={45} width={45}>
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