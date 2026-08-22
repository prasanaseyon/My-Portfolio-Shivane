/* ==================================================================
   main.jsx — entry point.

   BrowserRouter needs a server that rewrites unknown paths to
   index.html. On Netlify add a _redirects file containing
   `/*  /index.html  200`; on Vercel a vercel.json rewrite. On GitHub
   Pages, swap BrowserRouter for HashRouter instead.
   ================================================================== */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
