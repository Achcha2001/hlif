// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Landing page with two big buttons
import GeneralHome from './components/GeneralHome';// General Foundation page with menu bar A
import ChristianHome from './components/christianHome';// Christian Foundation page with menu bar B
import ContactUs from './components/ContactUs';
import About from './components/About';
import Projects from './components/Projects';
import Donation from './components/donation';
import ForHealing from './components/ForHealing';
import ChristianAbout from './components/ChristianAbout';
import WhatWeDo from './components/WhatWeDo';
import ChristianWhatWeDo from './components/ChristianWhatWeDo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/general" element={<GeneralHome />} />
        <Route path="/christian" element={<ChristianHome />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/donate" element={<Donation/>} />
        <Route path="christian/forhealing" element={<ForHealing/>} />
        <Route path="christian/About" element={<ChristianAbout/>} />
        <Route path="/whatwedo" element={<WhatWeDo/>} />
        <Route path="christian/cwhatwedo" element={<ChristianWhatWeDo/>} />
      </Routes>
    </Router>
  );
}

export default App;
