import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home'); // Simple toggle between 'home' and 'cart'

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} setView={setView} />
      
      <main className="container">
        {view === 'home' ? (
          <Home addToCart={addToCart} />
        ) : (
          <Cart cartItems={cart} removeFromCart={removeFromCart} setView={setView} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;