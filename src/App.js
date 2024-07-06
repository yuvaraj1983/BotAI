
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
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Grid container 
//         sx={{background: "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%);"
// }}
sx={{ background: 'linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))' }}

>
          <Grid item xs={12} md={3}  height={'100vh'}
          sx={{
            bgcolor: 'white',
            '@media (max-width:800px)' : {
              width: '70%',
              transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 400ms ease',
            }
          }}
          position={{ xs: 'fixed', md: 'relative' }}
          zIndex={{ xs: 9999, md: 1 }}
          boxShadow={{ xs: menuOpen ? 10 : 0, md: 0 }}
        
          >
            <Sidebar closeMenu={() => setMenuOpen(false)} />
          </Grid>
          <Grid item  md={9}>
          <Outlet  context={{ chat: chat, setChat: setChat, handleMobileMenu: setMenuOpen }}  />
          </Grid>
        </Grid>
    </ThemeProvider>
  );
}

export default App;
