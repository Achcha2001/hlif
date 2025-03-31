// src/components/Footer.jsx
import React from 'react';
import './GeneralFoundation.css';

function Footer() {
  return (
    <footer style={{ background: '#5a0e78', padding: '20px', color: 'white', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Help Island Lanka Foundation. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
