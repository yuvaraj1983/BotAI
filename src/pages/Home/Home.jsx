import { Stack } from '@mui/material'
import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import InitialChat from "../../components/InitialChat/InitialChat"
import ChatInput from "../../components/ChatInput/ChatInput"
import apidata from "../../APIData/sampleData.json"
import { useOutletContext } from 'react-router-dom'
import { useContext } from 'react';
import ChattingCard from "../../components/ChattingCard/ChattingCard"
import FeedbackModal from '../../components/FeedbackModal/FeedbackModal'

const Home = () => {

   const [chat, setChat] = useState([]);
  const [chatId, setChatId] = useState(1)
  const listRef = useRef(null)
  const [scrollToBottom, setScrollToBottom] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedChatId, setSelectedChatId] = useState(null)

  const chatresponse = (input) => {
    let ans = "";
    console.log("input clicked", input);
    const response = apidata.find((item) => item.question.toLowerCase() === input.toLowerCase())
    if(response) {
      ans = response.response;
    } else {
      ans = "Sorry, Did not understand your query!"
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


  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView()
}, [scrollToBottom])


  return (
    <Stack  height={'100vh'} direction={'column'} 
    sx={{background: "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%);"
    }} 
    
    >
      <Navbar />
   
      { chat.length === 0 &&
        <InitialChat /> 
      }
      {
        chat.length > 0 && 
        <Stack sx={{overflowY:"auto",
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
        ref={listRef}
        >
          {
            chat && chat.map((item, index) =>(
              <ChattingCard
              details={item}
              key={index}
              showFeedbackModal={() => setShowModal(true)}
              setSelectedChatId={setSelectedChatId}
              updateChat={setChat}
              />
            ))
          }
        </Stack>
      }
       {/* chat={chat} clearChat={() => setChat([]) */}
       <ChatInput chatresponse={chatresponse} setScroll={setScrollToBottom} chat={chat} clearChat={() => setChat([])} />

        <FeedbackModal open={showModal} setShowModal={setShowModal} 
        updateChat = {setChat}
        chatId={selectedChatId}
        handleClose={() => setShowModal(false)}/>
    </Stack>
  )
}

export default Home