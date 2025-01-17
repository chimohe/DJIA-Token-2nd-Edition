import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} DJIA Token. All rights reserved.</p>
      <p>
        <a href="/terms" style={styles.link}>Terms</a> | 
        <a href="/privacy" style={styles.link}>Privacy</a>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2d3436',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '0.875rem',
  },
  link: {
    color: '#1a73e8',
    textDecoration: 'none',
    margin: '0 0.5rem',
  },
};

export default Footer;
