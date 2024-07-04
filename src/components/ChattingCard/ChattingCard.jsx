import { Stack, Box, Typography, IconButton, Rating } from '@mui/material'
import React, { useState } from 'react'
import chatbot from "../../assets/newchat.png"
import human from "../../assets/human.png"
import { format } from "date-fns";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ChattingCard = ({details, showFeedbackModal, setSelectedChatId}) => {
  const [israting, setIsRating] = useState(false);
  const [rating, setRating] = useState(0)

  return (
    <Stack borderRadius={3} direction={'row'} spacing={3} m={3} p={3}
    boxShadow={"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"}
    sx={{
      '&:hover .feedback-btns' : {
        visibility: 'visible',
        opacity: 1
      }
    }}
    >
      <Box component={'img'} src={ details.type === "AI" ? chatbot : human}
      width={68}
      height={68}
      >

      </Box>
      <Box>
        <Typography sx={{fontSize:'16px', fontWeight:"700", fontFamily:"Ubuntu"}}>{details.type === "AI" ? "Soul AI" : "You"}</Typography>
        <Typography sx={{fontSize:'16px', fontWeight:"400", color:"#000000", fontFamily:"Open Sans"}}>{details.text}</Typography>
      
      <Stack direction={'row'} alignItems={'center'} >
      <Typography sx={{color: "#0000009E", fontSize:'12px', fontFamily:"Open Sans"}}>{format(details.time, "hh:mm a")}</Typography>
      { details.type === 'AI' && 
          <Stack direction={'row'} alignItems={'center'}   visibility={{ xs: 'visible', md: 'hidden' }}
          className='feedback-btns'>
                
                  <IconButton size='small' onClick={(e) => setIsRating(prev => !prev)} >
                      <ThumbUpIcon fontSize='inherit'/>
                  </IconButton>
                  <IconButton size='small' onClick={()=> {
                    setSelectedChatId(details.id)
                    showFeedbackModal()
                  } }>
                      <ThumbDownIcon fontSize='inherit' />
                  </IconButton>
          </Stack>
      }
      </Stack>
    

      { israting &&
        <Box> 
           <Typography component="legend" fontSize={12}>Rate this response</Typography>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
        </Box>
      }
      { details.feedback &&
      <Box>
      <Typography>
          <Box fontWeight={600} component={'span'}>
            Feedback :
          </Box>
          <Box component={'span'}>
          {details.feedback}
          </Box>
         </Typography>
      </Box>
      }
    
      
       

      </Box>
    </Stack>
  )
}

export default ChattingCard