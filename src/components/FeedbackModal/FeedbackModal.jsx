import React, { useState } from 'react'
import { Modal, Box, Stack, Typography, IconButton, TextField, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import FeedbackIcon from '@mui/icons-material/Feedback';


const FeedbackModal = ({open, setShowModal, handleClose, updateChat, chatId}) => {

    const [input, setInput] = useState('');

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '95%',
        backgroundColor: '#EFEFEF',
        boxShadow: 24,
        p: { xs: 2, md: 3 },
        maxWidth: 720,
        borderRadius: '10px'
    }

    const handleSubmit = (e) => {
            e.preventDefault();
            console.log("input", input)
            console.log("chatId", chatId)
            // updateChat.map((item) => (
            //     if(item.id === chatId) {
            //         return {...item, feedback: input}
            //     } else {
            //         return {...item}
            //     }
            // ))

            updateChat((prev) => (
                prev.map((item) => {
                    if(item.id === chatId) {
                        console.log("enter")
                        return {...item, feedback: input}
                    } else {
                        return {...item}
                    }
                })
            ))

            setInput('')
            handleClose();
    }

  return (
   <Modal 
   open={open}
//    onClose={() => setShowModal(false)}
   onClose={handleClose}
   >
    <Box  sx={{
        width: "95%",
        maxWidth: 600,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: 24,
        p: { xs: 3, md: 4 },
        outline: 0,
        bgcolor: "#fff",
        borderRadius: 2,
      }}>
       
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack direction={'row'} spacing={3} >
                <FeedbackIcon />    
                <Typography>Provide Additional Feedback</Typography>
            </Stack>
            <IconButton >
                <CloseIcon  />
            </IconButton>
        </Stack>

        <Box component={'form'} sx={{display:'flex', flexDirection:'column', alignItems:'flex-end'} }
        gap={3} onSubmit={handleSubmit}
        >
            <TextField 
            multiline
            rows={5}
            sx={{ width: 1 }}
            value = {input}
            onChange={(e) => setInput(e.target.value)}
            />
            <Button type='submit' variant='contained'>Submit</Button>
        </Box>
       
    </Box>
   </Modal>
  )
}

export default FeedbackModal