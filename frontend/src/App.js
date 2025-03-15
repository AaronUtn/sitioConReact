//import logo from './logo.svg';<img src={logo} className="App-logo" alt="logo" />
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import React from "react";

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Navegador";
import Footer from "./componentes/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";
//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Header>
          <BrowserRouter>
            <Nav></Nav>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="nosotros" element={<NosotrosPage />} />
              <Route path="novedades" element={<NovedadesPage />} />
              <Route path="contacto" element={<ContactoPage />} />
            </Routes>
          </BrowserRouter>
        </Header>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
