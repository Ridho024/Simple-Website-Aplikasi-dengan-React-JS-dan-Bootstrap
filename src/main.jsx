import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Impor main css
import "./dist/css/main.css";

// Impor boostrap
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./components/ScrollTop.jsx";

// Animasi AOS
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
