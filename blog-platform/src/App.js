import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Nav from "./components/nav";
function App() {
  return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh bg-primary">
          <Header />
          <div style={{ marginBottom: "20px" }}> {/* Add margin to create spacing */}
            <Nav />
          </div>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/me" element={<Profile />} />
              <Route path="/profiles/:username" element={<Profile />} />  */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;