import React from 'react';

function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #5a0e78;
          padding: 10px 20px;
          color: white;
          text-align: center;
          font-size: 0.85rem;
        }
        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-bottom: 5px;
        }
        .footer-logo-container {
          flex: 1;
          text-align: left;
        }
        .footer-logo {
          max-width: 80px;
        }
        .footer-menu {
          flex: 2;
          text-align: center;
        }
        .footer-menu a {
          color: white;
          text-decoration: none;
          margin: 0 10px;
          font-size: 0.9rem;
          transition: color 0.3s;
        }
        .footer-menu a:hover {
          color: #d1b3ff;
        }
        .footer-social {
          flex: 1;
          text-align: right;
        }
        .footer-fb-link {
          display: inline-block;
          width: 30px;
          height: 30px;
          fill: white;
          transition: fill 0.3s;
        }
        .footer-fb-link:hover {
          fill: #d1b3ff;
        }
        .footer-text {
          font-size: 0.8rem;
          margin: 0;
        }
        /* Mobile Responsive Styles */
        @media screen and (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            text-align: center;
          }
          .footer-logo-container, .footer-menu, .footer-social {
            flex: none;
            margin: 5px 0;
          }
          .footer-menu a {
            margin: 0 8px;
            font-size: 0.8rem;
          }
        }
      `}</style>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo-container">
            <img 
              src="/images/logo-help.png" 
              alt="Help Island Lanka Logo" 
              className="footer-logo" 
            />
          </div>
          <div className="footer-menu">
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact-us">Contact Us</a>
          </div>
          <div className="footer-social">
            <a 
              href="https://www.facebook.com/YourPage" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-fb-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91V127.41c0-25.35 
                12.42-50.06 52.24-50.06H293V6.26S262.43 0 234.36 
                0c-73.22 0-121.36 44.38-121.36 124.72v70.62H22.89V288h90.11v224h107.86V288z"/>
              </svg>
            </a>
          </div>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Help Island Lanka Foundation. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
