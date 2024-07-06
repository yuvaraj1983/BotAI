import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ChattingCard from '../ChattingCard/ChattingCard'
import { format, isEqual, startOfDay, add} from "date-fns"

const ChatHistoryCard = ({details}) => {
    console.log("ChatHistoryCard", details)


    const formatDate = (date) => {
        const today = startOfDay(new Date());

        if(isEqual(date, today)) {
            return "Today's chats"
        } else if(isEqual(date, add(date, { days: 1}))) {
            return "Yesterday's chats"
        } else {
            return format(date, "do LLL yyyy")
        }
    }
  return (
    <Box>
        <Typography  fontWeight={700}>
        {formatDate(startOfDay(new Date(details.datetime)))}
        </Typography>
        <Stack sx={{background: "linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%);"}}>
            {
                details && details.chat && details.chat.map((item, index) => {
                    console.log(item);
                return   <ChattingCard key={index} details={item} readOnly={true}/>
})
            }
             
        </Stack>
    </Box>
  )
}

export default ChatHistoryCard