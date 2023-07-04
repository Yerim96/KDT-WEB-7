import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

const mySiteThem = {
  //전역 변수. 사이트 전체적으로 모두 쓸 수 있음.
  textColor: "#333333",
  bg: "pink",
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mySiteThem}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
