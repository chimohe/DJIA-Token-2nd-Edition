import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>DJIA Token</div>
      <nav style={styles.nav}>
        <a href="/" style={styles.link}>Home</a>
        <a href="/about" style={styles.link}>About</a>
        <a href="/dashboard" style={styles.link}>Dashboard</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#1a73e8',
    color: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
  },
};

export default Header;
