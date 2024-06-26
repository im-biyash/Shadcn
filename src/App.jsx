import React from "react";
import Login from "./Pages/Login";
import { ThemeProvider } from "@/components/theme-provider";
import Homepage from "./Pages/Home/Homepage";
import Navbar from "./myComponents/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
     
    </ThemeProvider>
  );
}

export default App;
