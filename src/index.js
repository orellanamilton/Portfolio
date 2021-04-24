import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme} from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

const theme = extendTheme({ 
  colors: {
    green: {
      100: "#d4e8e2",
      200: "#0c6241",
      300: "#1f3932",
    },
    warm: {
      100: "#f2f0eb"
    },
    grey: {
      100: "#8e8e9d",
      200: "#8e8e93",
      300: "#3a3a3c",
      400: "#1c1c1e",
    }
  },
  fonts: {
    heading: "Roboto",
    Body: "Lato"
  },
 })

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} breakpoints={breakpoints}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);