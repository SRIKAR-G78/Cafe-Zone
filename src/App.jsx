import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './components/Main';
import './App.css';

const demoOrders = [
  {
    id: 1,
    name: 'Espresso',
    price: '$3.50',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    orderInfo: {
      name: 'John Doe',
      address: '123 Coffee St, Brew City',
      phone: '555-1234'
    }
  },
  {
    id: 2,
    name: 'Chocolate Muffin',
    price: '$3.50',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    orderInfo: {
      name: 'Jane Smith',
      address: '456 Pastry Ave, Sweet Town',
      phone: '555-5678'
    }
  }
];

function App() {
  const [cart, setCart] = useState(demoOrders);
  return (
    <Router>
      <div className="app">
        <Header />
        <Nav cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/main" element={<Main setCart={setCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
