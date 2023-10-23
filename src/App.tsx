import React from "react";

import "./index.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
