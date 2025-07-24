import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = ({ cart = [], setCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const handleRemove = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <nav className="main-nav">
      <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
      </button>
      <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li style={{marginLeft: '1rem'}}>
          <span style={{position: 'relative', display: 'inline-block', cursor: 'pointer'}} onClick={() => setCartModalOpen(true)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            {cart.length > 0 && (
              <span style={{position: 'absolute', top: -6, right: -6, background: '#e74c3c', color: '#fff', borderRadius: '50%', padding: '2px 7px', fontSize: '0.8rem', fontWeight: 600}}>{cart.length}</span>
            )}
          </span>
        </li>
      </ul>
      {cartModalOpen && (
        <div className="modal-overlay" onClick={() => setCartModalOpen(false)}>
          <div className="modal-content" style={{maxWidth: 500, width: '90vw', position: 'relative'}} onClick={e => e.stopPropagation()}>
            <h2 style={{marginBottom: '1rem'}}>Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {cart.map((item, idx) => (
                  <li key={idx} style={{display: 'flex', alignItems: 'center', marginBottom: '1.2rem', gap: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem'}}>
                    <img src={item.image} alt={item.name} style={{width: 50, height: 50, objectFit: 'cover', borderRadius: 6}} />
                    <div style={{flex: 1}}>
                      <div style={{fontWeight: 600, color: '#2c3e50'}}>{item.name}</div>
                      <div style={{color: '#e74c3c', fontWeight: 500}}>{item.price}</div>
                      {item.orderInfo && (
                        <div style={{fontSize: '0.95rem', color: '#555', marginTop: 4}}>
                          <div><b>To:</b> {item.orderInfo.name}</div>
                          <div><b>Address:</b> {item.orderInfo.address}</div>
                          <div><b>Phone:</b> {item.orderInfo.phone}</div>
                        </div>
                      )}
                    </div>
                    <button style={{background: '#e74c3c', color: '#fff', border: 'none', borderRadius: 4, padding: '0.3rem 0.7rem', cursor: 'pointer'}} onClick={() => handleRemove(idx)}>Remove</button>
                  </li>
                ))}
              </ul>
            )}
            <button type="button" style={{marginTop: '1rem'}} onClick={() => setCartModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav; 