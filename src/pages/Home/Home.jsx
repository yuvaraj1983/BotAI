import { Stack } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import InitialChat from "../../components/InitialChat/InitialChat"
import ChatInput from "../../components/ChatInput/ChatInput"
import apidata from "../../APIData/sampleData.json"
import { useOutletContext } from 'react-router-dom'
import { useContext } from 'react';
import ChattingCard from "../../components/ChattingCard/ChattingCard"

const Home = () => {

   const [chat, setChat] = useState([]);
  const [chatId, setChatId] = useState(1)

  const chatresponse = (input) => {
    let ans = "";
    console.log("input clicked", input);
    const response = apidata.find((item) => item.question.toLowerCase() === input.toLowerCase())
    if(response) {
      ans = response.response;
    }

    setChat((prev) => ( [...prev, 
    {
      type: "Human",
      text: input,
      time: new Date(),
      id: chatId
    },
    {
      type: "AI",
      text: ans,
      time: new Date(),
      id: chatId + 1
    }
  ]))

  setChatId((prevValue) => prevValue + 2)

  }
  return (
    <Stack  height={'100vh'} direction={'column'} sx={{background: "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%);"
    }} >
      <Navbar />
   
      { chat.length === 0 &&
        <InitialChat /> 
      }
      {
        chat.length > 0 && 
        <Stack>
          {
            chat && chat.map((item, index) =>(
              <ChattingCard
              item={item}
              key={index}
              />
            ))
          }
        </Stack>
      }
       <ChatInput chatresponse={chatresponse}  />
    </Stack>
  )
}

export default Home