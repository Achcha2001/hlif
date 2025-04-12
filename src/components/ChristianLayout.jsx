import React from 'react';
import MenuBar from './MenuBar';
import './ChristianFoundation.css';

function ChristianLayout({ children }) {
  // Define menu items for the Christian Foundation (Menu Bar B)
  const menuItems = [
    { label: 'Home', link: '/christian' },
    { label: 'What We Do', link: '/christian/cwhatwedo' },
    { label: 'About', link: '/christian/About' },
    { label: 'Projects', link: '/projects' },
    { label: 'For Healing', link: '/christian/forhealing' },
    { label: 'Contact', link: '/christian/contact' },
    { label: 'Go to General Home', link: '/general', isButton: true }
  ];
  const donateLink = { label: 'Donate', link: '/christian/donate' };

  return (
    <div className="layoutWrapper4">
      <MenuBar menuItems={menuItems} donateLink={donateLink} logoSrc="/images/logo-gif.gif" />
      <main className="mainContent4">{children}</main>
    </div>
  );
}

export default ChristianLayout;
