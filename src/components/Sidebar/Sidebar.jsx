import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import newchat from "../../assets/newchat.png"
import EditIcon from '@mui/icons-material/Edit';

const Sidebar = () => {
  return (
    <Box>
       <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{
          bgcolor:"#D7C7F4"
        }}>
          <Box component={'img'} src={newchat} height={45} width={45}>
          </Box>
          <Typography>New Chat</Typography>
          <EditIcon />
        
      </Stack>
      <Box sx={{bgcolor:"#D7C7F4", borderRadius:'5px'}} direction={'row'} m={3} p={1}  justifyContent={'center'}>
            <Typography textAlign={'center'}>Past Conversation</Typography>
          </Box>

    </Box>
   
  )
}

export default Sidebar