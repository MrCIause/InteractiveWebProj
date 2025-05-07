import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Vehicles from "./Pages/Vehicles";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/InteractiveWebProj" element={<Home />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/Vehicles" element={<Vehicles />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
