import React from 'react';

const TokenCard = ({ tokenName, tokenSymbol, price, marketCap }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{tokenName} ({tokenSymbol})</h3>
      <p style={styles.info}><strong>Price:</strong> ${price.toFixed(2)}</p>
      <p style={styles.info}><strong>Market Cap:</strong> ${marketCap.toLocaleString()}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '1rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '1rem',
  },
  title: {
    fontSize: '1.25rem',
    color: '#1a73e8',
  },
  info: {
    fontSize: '1rem',
    margin: '0.5rem 0',
  },
};

export default TokenCard;
