import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/Footer";

import Movie from "./components/Movie";
function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       
      
       <Movie></Movie>
       <Footer></Footer>
      
    </div>
  );
}

export default App;
