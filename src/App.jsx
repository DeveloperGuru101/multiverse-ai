// App.jsx
import React, { useEffect } from "react";
import "./styles.css";
import logo from "./assets/logo.png";

export default function App() {
  useEffect(() => {
    // Redirect when page loads
    const path = window.location.pathname;
    
    if (path === "/ghl" || path === "/automation") {
      window.location.href = "https://www.gohighlevel.com/?fp_ref=guruprasad57";
    } else {
      window.location.href = "https://warriorplus.com/o2/a/hffvq05/0";
    }
  }, []);
}