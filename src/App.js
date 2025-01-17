import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { BlockchainProvider } from './contexts/BlockchainContext';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BlockchainProvider>
      <Router>
        <div style={styles.container}>
          <Header />
          <main style={styles.main}>
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    </BlockchainProvider>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
    padding: '1rem',
  },
};

export default App;
