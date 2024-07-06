import { Box, Select, MenuItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ChatFilter = ({allchats, filterChats}) => {
  const [option, setOption] = useState("All Ratings");

  const handleChange = (e) => {

    setOption(e.target.value)
  }
    useEffect(() => {
      if(option === "All Ratings") {
        filterChats(allchats)
      } else {
        console.log("allchats", allchats)
        console.log("option", option)
        const filtered = allchats.filter((item) => {
          let found = false;
          item.chat.forEach((ch) => {
            if(ch.rating === option) {
              found = true
            }
           
          })
          return found;
        })
        console.log("filtered", filtered)
        filterChats(filtered);
      }
  },[option])
  return (
   <Box mb={5}>
    <Typography>Filter by Rating</Typography>
    <Select value={option} onChange={handleChange} size='small' sx={{minWidth:130}}>
        <MenuItem value='All Ratings'>All Ratings</MenuItem>
        <MenuItem value={1}>1 Star</MenuItem>
        <MenuItem value={2}>2 Star</MenuItem>
        <MenuItem value={3}>3 Star</MenuItem>
        <MenuItem value={4}>4 Star</MenuItem>
        <MenuItem value={5}>5 Star</MenuItem>
    </Select>
    
   </Box>
  )
}

export default ChatFilter