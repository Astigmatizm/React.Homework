import React from 'react';
import ProductCard from './ProductCard.jsx';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      <ProductCard name="Ноутбук" price={75000} />
      <ProductCard name="Смартфон" price={45000} />
      <ProductCard name="Наушники" price={7000} />
    </div>
  );
}

export default App;
