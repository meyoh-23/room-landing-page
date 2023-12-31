import React from 'react';
import { ThemeProvider, createTheme, Box } from "@mui/material";
import HeroSection from './components/HeroSection';
import About from './components/About';
import Footer from './components/Footer';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    }
  },
})

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <Box>
        <HeroSection/>
      </Box>
      <About/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App;
