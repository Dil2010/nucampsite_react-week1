import React from "react";

// import { Container, Navbar, NavbarBrand } from "reactstrap";
// import NucampLogo from "./app/assets/img/logo.png";

import Header from "./components/Header";
import Footer from "./components/Footer";

import CampsitesList from "./features/campsites/CampsitesList";
// import CampsiteCard from "./features/campsites/CampsiteCard.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer/>
    </div>
  );
}

export default App;
