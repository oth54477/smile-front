import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD
// import { SetStateAction } from "react";
=======
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
>>>>>>> 7ae00389a0f87a9bacd257b7fe5c7efe6b5c1774

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
<<<<<<< HEAD
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
=======
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
>>>>>>> 7ae00389a0f87a9bacd257b7fe5c7efe6b5c1774
);
