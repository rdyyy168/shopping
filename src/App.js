import React from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
import Product from './pages/Product';
import Bdetail from './pages/Bdetail';
import Checkout from './pages/Checkout';
import { useState } from 'react';
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'; // Correct import for routing
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent setting quantity to 0 or negative
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    ));
  };
  return (
    <BrowserRouter>
      <Routes>
        {/* Define a route for the Home component */}
        <Route path='/' element={<Home addToCart={addToCart} cartCount={cart.length}/>} />
        <Route path='/shop' element={<Shop addToCart={addToCart} cartCount={cart.length}/>} />
        <Route path='/contact' element={<Contact addToCart={addToCart} cartCount={cart.length} />} />
        <Route path='/blog' element={<Blog addToCart={addToCart} cartCount={cart.length}/>} />
        <Route path='/product' element={<Product addToCart={addToCart} cartCount={cart.length} />} />
        <Route path='/bdetail' element={<Bdetail addToCart={addToCart} cartCount={cart.length} />} />
        <Route path='/checkout' element={<Checkout addToCart={addToCart} cartCount={cart.length} />} />
        <Route path="/cart" element={
          <Cart
            cartItems={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            addToCart={addToCart} 
            cartCount={cart.length}
          />
        } />
        <Route path="*" element={<Navigate to="/"/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;