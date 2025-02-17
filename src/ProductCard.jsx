import React, { useState } from 'react';

function ProductCard({ name, price }) {
  const [inCart, setInCart] = useState(false);

  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      textAlign: 'center',
      maxWidth: '250px',
      boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
    },
    button: {
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: inCart ? 'red' : '#61dafb',
      color: 'white',
      fontSize: '16px',
    },
  };
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>Цена: {price} ₽</p>
      <button style={styles.button} onClick={() => setInCart(!inCart)}>
        {inCart ? 'Удалить из корзины' : 'Добавить в корзину'}
      </button>
    </div>
  );
}
export default ProductCard;