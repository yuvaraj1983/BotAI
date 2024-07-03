import { Button, Stack, Box, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

const ChatInput = ({chatresponse}) => {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        chatresponse(input);
       // setInput('');
    }

    useEffect(() =>{
        inputRef.current.focus();


    })
  return (
    <Box component={'form'} onSubmit={handleSubmit}>

 
   <Stack direction={'row'} spacing={2} justifyContent={'center'} p={2}>
   <TextField sx={{bgcolor:'white',  borderRadius: 1}}  fullWidth  inputRef={inputRef}
   value={input}
   onChange={(e) => setInput(e.target.value) }
   required
   />
  <Button type='submit' sx={{color:'black'}} variant='contained'>Ask</Button>
  <Button sx={{color:'black'}} variant='contained'>Save</Button>
 
   </Stack>
   </Box>
  )
}

export default ChatInput