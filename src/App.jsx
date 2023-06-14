import React from "react";

// components
import { Navbar, Footer } from "./components";

// pages
import { Home, Features, Projects, About, Contact } from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
