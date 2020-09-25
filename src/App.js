import React from 'react';
import "./styles/main.scss";

import Navigation from "./components/Navigation";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
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
