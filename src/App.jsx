import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import JoinHI from './pages/JoinHI';
import Blog from './pages/Blog';
import Mission from './pages/Mission';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        {/* Main content area where pages swap out */}
        <main className="main-content">
          <Routes>
            {/* Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<JoinHI />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
