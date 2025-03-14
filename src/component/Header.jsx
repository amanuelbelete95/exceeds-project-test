import React from 'react';
import { Link } from 'react-router-dom';

import safariLogo from '../assets/safarilogo.jpeg'

function Header() {
  return (
    <header style={styles.header}>
      <img 
        src={safariLogo}
        alt="Safaricom Logo" 
        style={styles.logo} 
      />
      <nav>
        <Link to="/" style={styles.link}>Home</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#fff',
    borderBottom: '2px solid #ddd'
  },
  logo: {
    height: '50px'
  },
  link: {
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#00a859' // Safaricom green color
  }
};

export default Header;
