import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

window.addEventListener("blur", () => {
    document.title = "Montgomery Teofilus - Personal Portofolio";
});

window.addEventListener("focus", () => {
    document.title = "Montgomery's Portofolio";
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
