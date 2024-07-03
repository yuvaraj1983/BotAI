
import './App.css';
import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';


export const theme = createTheme({
  components:{
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "56px",
          fontWeight: "700"
        },
        h2: {
          fontSize: "48px",
          fontWeight: "600"
        },
        h3: {
          fontSize: "30px",
          fontWeight: "500"
        },
      }
    },
    MuiContainer:{  
      styleOverrides: {
        root:{
          width:'90%'
        }
      }
    }
  }
})



function App() {
  const [chat, setChat] = useState([])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Grid container sx={{background: "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%);"
}}>
          <Grid md={3} item height={'100vh'}>
            <Sidebar />
          </Grid>
          <Grid item md={9}>
          <Outlet  context={{ chat: chat, setChat: setChat }}  />
          </Grid>
        </Grid>
    </ThemeProvider>
  );
}

export default App;
