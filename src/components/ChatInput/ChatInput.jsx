import { Button, Stack, Box, TextField, Snackbar } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

const ChatInput = ({chatresponse, setScroll, chat, clearChat }) => {
    const [input, setInput] = useState('');
    const [showSnackbar, setShowSnackbar] = useState(false)
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        chatresponse(input);
       // setInput('');
        setInput('')
        setScroll(prev => !prev)
    }

    const handleSave = () => {
      const chat_history = JSON.parse(localStorage.getItem('chat')) || []
      const date = new Date();

      localStorage.setItem("chat",JSON.stringify([{chat: chat, datetime: date}, ...chat_history]));
      clearChat();
      setShowSnackbar(true)
    }

    useEffect(() =>{
        inputRef.current.focus();


    })
  return (
    <Box flexShrink={0}>

   
    <Box component={'form'} onSubmit={handleSubmit}>

 
   <Stack direction={'row'} spacing={2} justifyContent={'center'} p={2}>
   <TextField sx={{bgcolor:'white',  borderRadius: 1}}  fullWidth  inputRef={inputRef}
   value={input}
   onChange={(e) => setInput(e.target.value) }
   required
   />
  <Button type='submit' sx={{color:'black'}} variant='contained'>Ask</Button>
  <Button sx={{color:'black'}} variant='contained' onClick={handleSave}>Save</Button>
  <Snackbar
        open={showSnackbar}
        onClose={() => setShowSnackbar(false)}
        message="Chat saved"
        action={
          <a href='/history'>
            <Button size='small'>See past history</Button></a>
        }
      />
   </Stack>
   </Box>
   </Box>
  )
}

export default ChatInput