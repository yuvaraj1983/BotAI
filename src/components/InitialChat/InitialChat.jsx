import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import icon from "../../assets/newchat.png"
import Card from "./Card"

const InitialChat = () => {

    const initialData = [
        {
            heading: "Hi, what is the weather",
            text: "Get immediate AI generated response"
        },
        {
            heading: "Hi, what is my location",
            text: "Get immediate AI generated response"
        },
        {
            heading: "Hi, what is the temperature",
            text: "Get immediate AI generated response"
        },
        {
            heading: "Hi, how are you",
            text: "Get immediate AI generated response"
        }
    ]
    console.log("initialData",initialData)
    
  return (

    <Stack height={1} alignItems={'center'} justifyContent={'flex-end'} p={3}>
        <Stack spacing={2}  alignItems={'center'}   my={5}>
        <Typography p={3} fontWeight={'500'} fontSize={'28px'} lineHeight={'32.17px'}>How can I help you today</Typography>
        <Box component={'img'} src={icon} height={45} width={45}></Box>
        </Stack>
        <Grid container spacing={3}>
            { initialData && initialData.length &&
                initialData.map((data) => (
                    <Grid item key={data.heading}  md={6}>
                            <Card heading={data.heading} text={data.text} />
                    </Grid>
                
                ))
            }
            
        </Grid>
    </Stack>

  )
}

export default InitialChat