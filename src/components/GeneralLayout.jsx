// src/components/GeneralLayout.jsx
import React from 'react';
import MenuBar from './MenuBar';
import './GeneralFoundation.css'; // Global CSS for foundation pages

function GeneralLayout({ children }) {
  // Define menu items for the General Foundation (Menu Bar A)
  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Projects', link: '/projects' },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Contact Us', link: '/contact-us' } // Updated contact part
  ];
  
  const donateLink = { label: 'Donate', link: '/donate' };

  return (
    <div className="layoutWrapper3">
      <MenuBar menuItems={menuItems} donateLink={donateLink} logoSrc="/images/logo-gif.gif" />
      <main className="mainContent3">{children}</main>
    </div>
  );
}

export default GeneralLayout;
