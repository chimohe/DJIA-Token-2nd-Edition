import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1>About DJIA Token</h1>
      <p>
        The DJIA Token is a blockchain-powered cryptocurrency that mirrors the performance
        of the Dow Jones Industrial Average. Our mission is to make investing in indices
        easier, more accessible, and transparent through decentralized technology.
      </p>
      <h2>Key Features</h2>
      <ul style={styles.list}>
        <li>Real-time price tracking powered by Chainlink</li>
        <li>Tokenized access to the Dow Jones Industrial Average</li>
        <li>Dividend distributions for token holders</li>
        <li>Gasless transactions for seamless trading</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  list: {
    textAlign: 'left',
    margin: '1rem auto',
    maxWidth: '600px',
    lineHeight: '1.6',
  },
};

export default About;
