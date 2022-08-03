import React from "react";
import ReactDOM from "react-dom/client";
import App from "pages";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { myTheme } from "theme";
import { GlobalStyle } from "global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
