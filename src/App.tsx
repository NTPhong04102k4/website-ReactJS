import React from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import { Route, useLocation } from "react-router-dom";
import { NavBar } from "./component/topNavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
