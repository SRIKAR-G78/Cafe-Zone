import React, { useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const menuItems = {
    coffee: [
      { 
        name: 'Espresso', 
        price: '$3.50', 
        description: 'Rich and bold Italian-style coffee',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60'
      },
      { 
        name: 'Cappuccino', 
        price: '$4.50', 
        description: 'Espresso with steamed milk and foam',
        image: 'https://imgs.search.brave.com/bLpBummS7Rocqtu50DGNBhUlN5X_42EcwxnY-i0WLMo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/OTM2OTkzMi9waG90/by9jcm9wcGVkLXNo/b3Qtb2Ytd29tYW4t/aGFuZHMtaG9sZGlu/Zy1hLWN1cC1vZi1o/b3QtbGF0dGUtY29m/ZmVlLWluLWhlci1o/YW5kcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VHgzcVVB/azlPa1dmZ1JtQlhL/ZzdoWDE3WWNzQ29F/dmNrRGtYNTgzS0dh/QT0',
      },
      { 
        name: 'Latte', 
        price: '$4.00', 
        description: 'Espresso with steamed milk',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=60'
      },
      { 
        name: 'Americano', 
        price: '$3.00', 
        description: 'Espresso with hot water',
        image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&auto=format&fit=crop&q=60'
      }
    ],
    pastries: [
      { 
        name: 'Croissant', 
        price: '$3.00', 
        description: 'Buttery, flaky French pastry',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60'
      },
      { 
        name: 'Chocolate Muffin', 
        price: '$3.50', 
        description: 'Rich chocolate muffin',
        image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&auto=format&fit=crop&q=60'
      },
      { 
        name: 'Cinnamon Roll', 
        price: '$4.00', 
        description: 'Sweet roll with cinnamon filling',
        image: 'https://imgs.search.brave.com/XM3eBl9BbrW3ZPTnKjmboMKG9yZP1Me0EXI1o9Roak4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzI2LzU3LzI5/LzM2MF9GXzEzMjY1/NzI5MThfQkZqVFc2/SDJJenJTWGw2VHdh/WUlEN2hVVm8waW9j/MlkuanBn',
      }
    ]
  };

  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredItems = Object.entries(menuItems).reduce((acc, [category, items]) => {
    if (filter === 'all' || filter === category) {
      acc.push(...items.map(item => ({ ...item, category })));
    }
    return acc;
  }, []);

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => handleFilterChange('coffee')} className={filter === 'coffee' ? 'active' : ''}>Coffee</button>
        <button onClick={() => handleFilterChange('pastries')} className={filter === 'pastries' ? 'active' : ''}>Pastries</button>
      </div>
      <div className="menu-sections">
        {filteredItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-header">
              <h3>{item.name}</h3>
              <span className="price">{item.price}</span>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu; 