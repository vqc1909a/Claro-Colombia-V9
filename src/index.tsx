import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider, createTheme, responsiveFontSizes} from "@mui/material/styles";
import {StyledEngineProvider} from "@mui/material/styles";
import {BrowserRouter} from "react-router-dom";


let theme = responsiveFontSizes(
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 1024,
        lg: 1200,
        xl: 1536
      }
    },
    palette: {
      primary: {
        light: "#FF5555",
        main: "#EF3829",
        dark: "#DA291C",
        contrastText: "#fff"
      },
      secondary: {
        light: "#333333",
        main: "#212121",
        dark: "#000000",
        contrastText: "#fff"
      }
    },
    typography: {
      h4: {
        fontSize: "2.325rem"
      }
    }
  })
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
