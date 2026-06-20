// App.jsx
import React, { useEffect } from "react";
import "./styles.css";
import logo from "./assets/logo.png";

export default function App() {
  useEffect(() => {
    // Redirect when page loads
    const path = window.location.pathname;
    
    if (path === "/systeme-tutorial" || path === "/all-in-one-business-platform") {
      window.location.href = "https://systeme.io/?sa=sa0265282965e71650f1186b1a910b548b4b6d3618";
    } else {
      window.location.href = "https://warriorplus.com/o2/a/hffvq05/0";
    }
  }, []);
}