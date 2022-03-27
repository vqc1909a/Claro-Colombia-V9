import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider, createTheme, responsiveFontSizes} from "@mui/material/styles";
import {StyledEngineProvider} from "@mui/material/styles";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "redux/store";

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
        fontSize: "2.3rem"
      },
      h6: {
        fontSize: "1.15rem"
      },
      overline: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 400,
        fontSize: "0.6rem",
        lineHeight: 1.66,
        letterSpacing: "0.03333em",
        textTransform: "capitalize"
      }
    }    
  })
);


//!Aqui puede ir el suspense con normalidad y el renderizado de cada pagina sería lo mismo si el suspense va aqui o en las rutas, la ventaja es lo visual en las rutas de poner suspense en cada uno de ellas.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
