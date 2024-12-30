import Hoddie from './assets/hoddie.webp';
import MousePad from './assets/mousepad.webp';
import Mug from './assets/mug.webp';

const products = [
    {
      id: 1,
      name: 'Hoddie Club Party',
      description: 'Hoddie exclusiva da Club Party, ideal para quem curte a vibe da comunidade!',
      price: '€15,00',
      image: Hoddie,
      details: 'Detalhes adicionais sobre a hoddie, como material, capacidade e design.',
      delivery: 'Entrega em 15 dias úteis.',
      productDetails: 'Material: Tecido. Medidas: 350ml de capacidade.',
      reviews: [
        { rating: 4, comment: 'Muito boa, adorei a qualidade!' },
        { rating: 5, comment: 'Excelente caneca, recomendo!' },
      ],
    },
    {
      id: 2,
      name: 'Mousepad da Club Party',
      description: 'Mousepad perfeito para gamers, com um design único da Club Party.',
      price: '€10,00',
      image: MousePad,
      details: 'Informações detalhadas sobre o mousepad, como tamanho e material.',
      delivery: 'Entrega em 15 dias úteis.',
      productDetails: 'Material: Borracha com acabamento em tecido. Medidas: 30cm x 25cm.',
      reviews: [
        { rating: 5, comment: 'Mousepad ótimo! Perfeito para jogos.' },
        { rating: 4, comment: 'Boa qualidade, mas poderia ser maior.' },
      ],
    },
    {
      id: 3,
      name: 'Mug Club Party',
      description: 'Outra versão da caneca da Club Party, para você colecionar.',
      price: '€15,00',
      image: Mug,
      details: 'Detalhes sobre essa versão da caneca, incluindo características especiais.',
      delivery: 'Entrega em 15 dias úteis.',
      productDetails: 'Material: Porcelana. Medidas: 300ml de capacidade.',
      reviews: [
        { rating: 3, comment: 'Boa caneca, mas o design poderia ser mais elaborado.' },
        { rating: 4, comment: 'Gostei bastante, mas achei o preço um pouco alto.' },
      ],
    },
  ];
  
  export default products;
  