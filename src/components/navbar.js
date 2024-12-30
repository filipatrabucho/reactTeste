// src/components/Navbar.js

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'antd'; // Importação do Button do Ant Design
import LogoTipo from './assets/logo-navbar.png';

const Nav = styled.nav`
  background: #333;
  /* Remova a altura fixa para permitir que a navbar ajuste sua altura automaticamente */
  /* height: 60px; */
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px; /* Padding simétrico */
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  img {
    height: 40px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center; /* Garante alinhamento vertical */

  li {
    margin-left: 20px;
    display: flex;
    align-items: center; /* Alinha os itens verticalmente */
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;

    &:hover {
      color: #ddd;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 60px; /* Altura da navbar */
    left: 0;
    right: 0;
    background-color: #333;
    width: 100%;
    height: calc(100% - 60px);
    display: ${props => (props.open ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    li {
      margin: 15px 0;
      text-align: center;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 28px;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Estilização do Button do Ant Design
const StyledButton = styled(Button)`
  /* Remover altura fixa para permitir alinhamento automático */
  padding: 0 15px;
  display: flex;
  align-items: center;
  height: auto; /* Remove a altura fixa */
  border: none;
  color: #fff !important;

  /* Ajustar o tamanho da fonte para corresponder aos outros links */
  font-size: 16px;

  /* Garantir que o botão não tenha margem superior ou inferior */
  margin-top: 0;
  margin-bottom: 0;

  &:hover {
    color: #fff !important;
    background-color: #1890ff !important; /* Cor primária do Ant Design */
  }

  /* Ajustar o botão no modo mobile */
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

// Componente Navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  // Fechar o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Nav ref={navRef}>
      <Logo to="/">
        <img src={LogoTipo} alt="Logo" />
      </Logo>
      <Hamburger onClick={handleToggle} aria-label="Menu" aria-expanded={isOpen}>
        &#9776;
      </Hamburger>
      <NavLinks open={isOpen}>
        <li>
          <Link to="/" onClick={handleCloseMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about-us" onClick={handleCloseMenu}>About</Link>
        </li>
        <li>
          <Link to="/team" onClick={handleCloseMenu}>Team</Link>
        </li>
        <li>
          <Link to="/store" onClick={handleCloseMenu}>Store</Link>
        </li>
        <li>
          {/* Botão Login/Register usando o Button do Ant Design */}
          <StyledButton type="primary" onClick={handleCloseMenu}>
            <Link to="/login-register" style={{ color: '#fff' }}>Login/Register</Link>
          </StyledButton>
        </li>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
