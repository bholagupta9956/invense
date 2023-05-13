/* eslint-disable */
import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/main.css";
import App from "./App";
import "./index.css"
import "./assets/custom-theme.css";
import "./assets/custom.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  
    <App />
 
);
