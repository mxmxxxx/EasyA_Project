import React from 'react';
import Creator from './Creator';
import Upload from './Upload';
import Video from './Video';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './auth/Login';
import Signup from './auth/Signup';
import MyAccount from './screens/MyAccount';
import Subscription from './screens/Subscription';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/subscriptions" element={<Subscription />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/creator/:username" element={<Creator />} />
          <Route path="/upload-video" element={<Upload />} />
          <Route path="/video/:username/:videoId" element={<Video />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
