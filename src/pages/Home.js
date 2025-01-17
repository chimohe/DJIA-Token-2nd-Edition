import React from 'react';
import TokenCard from '../components/TokenCard';
import useFetchDJIA from '../hooks/useFetchDJIA';

const Home = () => {
  const { djiaData, loading, error } = useFetchDJIA();

  return (
    <div style={styles.container}>
      <h1>Welcome to DJIA Token</h1>
      <p>The blockchain solution for tracking the Dow Jones Industrial Average.</p>
      {loading && <p>Loading DJIA data...</p>}
      {error && <p>Error fetching data: {error}</p>}
      {djiaData && (
        <TokenCard 
          tokenName="DJIA Token" 
          tokenSymbol="DJIA" 
          price={djiaData.currentValue} 
          marketCap={djiaData.marketCap} 
        />
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
};

export default Home;
