import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ChatFilter from '../../components/ChatFilter/ChatFilter';
import ChatHistoryCard from '../../components/ChatHistoryCard/ChatHistoryCard';

const History = () => {

  const [chats,setChats] = useState([]);
  const [filteredChats, setFilteredChats] = useState([]);

  useEffect(() => {
    const chats = localStorage.getItem("chat") || [];
    console.log('chats', chats)
    if(chats.length>0){
      setChats(JSON.parse(chats));
      setFilteredChats(JSON.parse(chats));
    }
  },[])

  return (
    <Box   height={'100vh'}
    overflow={'hidden'}
    sx={{
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
          width: '10px',
      },
      '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 8px rgba(0,0,0,0.1)',
          borderRadius: '8px'
      },
      '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(151, 133, 186,0.4)',
          borderRadius: '8px'
      }
  }}
    >
      <Navbar />
      <Box>
        <Typography sx={{textAlign:'center'}} p={4}>Conversation History</Typography>
        <ChatFilter  allchats={chats} filterChats={setFilteredChats} />

        {
          filteredChats.length === 0 && 
          <Typography textAlign={'center'}>No saved chats</Typography>
        }

        {
          filteredChats && 
          <Stack spacing={4}>
          {
            filteredChats &&  filteredChats.map((item, index) => (
                 
                  <ChatHistoryCard key={index} details={item} />
            ))
          }
        </Stack>
        }
       
      </Box>
      
    </Box>
  )
}

export default History