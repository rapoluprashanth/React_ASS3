import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import About from './components/About';

const App: React.FC = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">About</Link> | <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
    </div>
  </Router>
);

export default App;
