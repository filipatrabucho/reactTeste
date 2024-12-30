// src/components/ProductPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import products from './Utils'; // Ajuste o caminho conforme necessário
import { Rate } from 'antd';

const ProductContainer = styled.div`
  padding: 50px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductImage = styled.img`
  width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
  }
`;

const ProductDetails = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ProductName = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  color: #e63946;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ProductDetailsInfo = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 10px;
`;

const ProductReviews = styled.div`
  margin-top: 30px;
`;

const Review = styled.div`
  margin-bottom: 15px;
`;

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h1>Produto não encontrado</h1>;
  }

  const averageRating = calculateAverageRating(product.reviews);

  return (
    <ProductContainer>
      <ProductWrapper>
        <ProductImage src={product.image} alt={product.name} />
        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price}</ProductPrice>
          <Rate allowHalf disabled defaultValue={averageRating} />
          <ProductDescription>{product.description}</ProductDescription>
          <ProductDetailsInfo><strong>Detalhes:</strong> {product.details}</ProductDetailsInfo>
          <ProductDetailsInfo><strong>Entrega:</strong> {product.delivery}</ProductDetailsInfo>
          <ProductDetailsInfo><strong>Especificações:</strong> {product.productDetails}</ProductDetailsInfo>
          <ProductReviews>
            <h3>Avaliações</h3>
            {product.reviews.map((review, index) => (
              <Review key={index}>
                <Rate allowHalf disabled defaultValue={review.rating} />
                <p>{review.comment}</p>
              </Review>
            ))}
          </ProductReviews>
        </ProductDetails>
      </ProductWrapper>
    </ProductContainer>
  );
};

// Função para calcular a média das avaliações
const calculateAverageRating = (reviews) => {
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((acc, review) => acc + review.rating, 0);
  return total / reviews.length;
};

export default ProductPage;
