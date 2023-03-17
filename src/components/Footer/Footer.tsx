import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="text-box">
        <p className="text">
          Utkarsh Raj 2023 —{' '}
          <a target="_blank" href="https://theroyalraj.netlify.app/" className="external-link">
            Designed & Coded by theroyalraj
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
