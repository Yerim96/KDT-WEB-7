import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Clock from "./Clock";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <h1>Hello React</h1>
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
// );

setInterval(() => {
  //1초에 한번씩 실행
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}, 1000);
