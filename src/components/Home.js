// src/components/Home.js

import React from 'react';
import styled from 'styled-components';
import Logo from './assets/logo.png'; // Certifique-se de que o caminho está correto
import Cta from './Cta'; // Importação do componente Cta

// Styled Components

const BannerContainer = styled.div`
  background-color: #1a1a1a;
  color: #fff;
  padding: 100px 20px;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Ajustes para telas menores */
  @media (max-width: 768px) {
    padding: 80px 15px;
    height: auto;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 60px 10px;
  }
`;

const LogoContainer = styled.div`
  margin-right: 40px;
  
  img {
    width: 100px; /* Ajuste o tamanho conforme necessário */
    height: auto;
  }

  /* Ajustes para telas menores */
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const Content = styled.div`
  max-width: 800px;
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const Subtext = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Button = styled.button`
  background-color: #e63946;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d62839;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.8em;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <HomeContainer>
      <BannerContainer>
        <LogoContainer>
          <img src={Logo} alt="Logo" />
        </LogoContainer>
        <Content>
          <Heading>The Ultimate PC Gamer Community</Heading>
          <Subtext>
            Join a community of passionate PC gamers, share experiences, and stay up-to-date with the latest in gaming.
          </Subtext>
          <ButtonContainer>
            <Button>Get Started</Button>
            <Button>Watch Streams</Button>
          </ButtonContainer>
        </Content>
      </BannerContainer>
      {/* Inserir o componente Cta */}
      <Cta />
    </HomeContainer>
  );
};

export default Home;
