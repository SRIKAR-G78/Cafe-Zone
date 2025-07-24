import React, { useState } from 'react';
import '../styles/Main.css';

const Main = ({ setCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const phone = form.phone.value;
    setCart((prev) => [
      ...prev,
      {
        ...selectedItem,
        orderInfo: { name, address, phone }
      }
    ]);
    closeModal();
  };

  const featuredItems = [
    {
      id: 1,
      name: 'Espresso',
      description: 'Rich and bold Italian-style coffee',
      price: '$3.50',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'coffee'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Perfect blend of espresso, steamed milk, and foam',
      price: '$4.50',
      image: 'https://imgs.search.brave.com/bLpBummS7Rocqtu50DGNBhUlN5X_42EcwxnY-i0WLMo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/OTM2OTkzMi9waG90/by9jcm9wcGVkLXNo/b3Qtb2Ytd29tYW4t/aGFuZHMtaG9sZGlu/Zy1hLWN1cC1vZi1o/b3QtbGF0dGUtY29m/ZmVlLWluLWhlci1o/YW5kcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VHgzcVVB/azlPa1dmZ1JtQlhL/ZzdoWDE3WWNzQ29F/dmNrRGtYNTgzS0dh/QT0',
      category: 'coffee'
    },
    {
      id: 3,
      name: 'Croissant',
      description: 'Buttery, flaky French pastry',
      price: '$3.00',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'pastry'
    }
  ];

  const relatedItems = [
    {
      id: 4,
      name: 'Latte',
      description: 'Smooth espresso with steamed milk',
      price: '$4.00',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'coffee'
    },
    {
      id: 5,
      name: 'Chocolate Muffin',
      description: 'Rich chocolate muffin with a soft center',
      price: '$3.50',
      image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'pastry'
    },
    {
      id: 6,
      name: 'Cinnamon Roll',
      description: 'Sweet roll with cinnamon filling and icing',
      price: '$4.00',
      image: 'https://imgs.search.brave.com/XM3eBl9BbrW3ZPTnKjmboMKG9yZP1Me0EXI1o9Roak4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzI2LzU3LzI5/LzM2MF9GXzEzMjY1/NzI5MThfQkZqVFc2/SDJJenJTWGw2VHdh/WUlEN2hVVm8waW9j/MlkuanBn',
      category: 'pastry'
    }
  ];

  return (
    <main className="main-content">
      {/* Modal for address form */}
      {isModalOpen && selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem'}}>
              <img src={selectedItem.image} alt={selectedItem.name} style={{width: 60, height: 60, objectFit: 'cover', borderRadius: 8, boxShadow: '0 2px 8px rgba(44,62,80,0.08)'}} />
              <div>
                <span style={{fontWeight: 600, fontSize: '1.2rem', color: '#2c3e50'}}>{selectedItem.name}</span><br/>
                <span style={{color: '#e74c3c', fontWeight: 500, fontSize: '1.1rem'}}>{selectedItem.price}</span>
              </div>
            </div>
            <h2>Enter Delivery Address</h2>
            <form onSubmit={handleSubmit}>
              <div style={{marginBottom: '1rem'}}>
                <label>Name:</label><br/>
                <input type="text" name="name" required style={{width: '100%'}} />
              </div>
              <div style={{marginBottom: '1rem'}}>
                <label>Address:</label><br/>
                <input type="text" name="address" required style={{width: '100%'}} />
              </div>
              <div style={{marginBottom: '1rem'}}>
                <label>Phone:</label><br/>
                <input type="tel" name="phone" required style={{width: '100%'}} />
              </div>
              <button type="submit" style={{marginRight: '1rem'}}>Submit</button>
              <button type="button" onClick={closeModal}>Close</button>
            </form>
          </div>
        </div>
      )}
      <section className="hero-section">
        <h1>Welcome to Cafe Zone</h1>
        <p>Discover our delicious selection of coffee and pastries</p>
      </section>

      <section className="featured-section">
        <h2>Featured Items</h2>
        <div className="cafe-cards">
          {featuredItems.map((item) => (
            <div key={item.id} className="cafe-card featured">
              <div className="card-image">
                <img src={item.image} alt={item.name} />
                <span className="category-tag">{item.category}</span>
              </div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="card-footer">
                  <span className="price">{item.price}</span>
                  <button className="order-btn" onClick={() => openModal(item)}>Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="related-section">
        <h2>You May Also Like</h2>
        <div className="cafe-cards">
          {relatedItems.map((item) => (
            <div key={item.id} className="cafe-card">
              <div className="card-image">
                <img src={item.image} alt={item.name} />
                <span className="category-tag">{item.category}</span>
              </div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="card-footer">
                  <span className="price">{item.price}</span>
                  <button className="order-btn" onClick={() => openModal(item)}>Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main; 