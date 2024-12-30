// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import ProductPage from './components/ProductPage';

// Importar ou criar os componentes das páginas
// const Home = () => <h1>Home</h1>;
const AboutUs = () => <h1>About Us</h1>;
const Team = () => <h1>Team</h1>;
const Store = () => <h1>Store</h1>;
const LoginRegister = () => <h1>Login/Register</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '60px', textAlign: 'center' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
