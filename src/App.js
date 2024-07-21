import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Creator from './Creator';
import Upload from './Upload';
import Video from './Video';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/creator/:username" element={<Creator />} />
          <Route path="/upload-video" element={<Upload />} />
          <Route path="/video/:username/:videoId" element={<Video />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
