import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ⭐ AOS IMPORT
import AOS from "aos";
import "aos/dist/aos.css";

// ⭐ AOS INIT
AOS.init({
  duration: 900,
  once: false,
  easing: "ease-in-out",
  offset: 60,
  delay: 100
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
