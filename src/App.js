import React from 'react';
import "./styles/main.scss";

import Navigation from "./components/Navigation";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="app-nav-container">
          <Navigation />
        </div>
        <Home />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
