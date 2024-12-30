// src/components/Cta.js

import React from 'react';
import styled from 'styled-components';
import { Carousel, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import products from './Utils'; // Ajuste o caminho conforme necessário

// Styled Components

const CarouselContainer = styled.div`
  padding: 50px 0;
  background-color: #f0f2f5;
  
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const Slide = styled.div`
  display: flex !important;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 350px; /* Altura fixa */

  /* Definir o gap entre os elementos */
  gap: 20px; /* Reduzido de 40px para 20px */

  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 350px; /* Mesma altura no mobile */
    text-align: center;
    gap: 10px; /* Menor gap no mobile */
  }
`;

const ProductContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 10px 0;
    justify-content: center;
  }
`;

const ProductName = styled.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.3em;
  }
`;

const ProductPrice = styled.p`
  font-size: 1.4em;
  margin-bottom: 10px;
  color: #e63946;
`;

const ProductRating = styled.div`
  margin-bottom: 15px;
`;

const ProductImage = styled.img`
  width: 300px;
  height: auto;
  object-fit: contain; /* Mantém a proporção da imagem */
  border-radius: 10px;
  /* Remover margem esquerda */
  
  @media (max-width: 768px) {
    width: 200px;
    margin-left: 0;
    margin-bottom: 20px;
    max-height: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
    max-height: 150px;
  }
`;

const Cta = () => {
  const navigate = useNavigate();

  const handleProductClick = (url) => {
    navigate(url);
  };

  return (
    <CarouselContainer>
      <Carousel autoplay autoplaySpeed={3000} dots={true}>
        {products.map((product) => (
          <Slide key={product.id} onClick={() => handleProductClick(product.url)}>
            <ProductContent>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductRating>
                <Rate
                  allowHalf
                  disabled
                  defaultValue={calculateAverageRating(product.reviews)}
                />
              </ProductRating>
            </ProductContent>
            <ProductImage src={product.image} alt={product.name} loading="lazy" />
          </Slide>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

// Função para calcular a média das avaliações
const calculateAverageRating = (reviews) => {
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((acc, review) => acc + review.rating, 0);
  return total / reviews.length;
};

export default Cta;
