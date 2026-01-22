export default function Navbar({ cartCount, setView }) {
  return (
    <nav className="navbar">
      <h1 onClick={() => setView('home')}>JS Store</h1>
      <button className="cart-btn" onClick={() => setView('cart')}>
        🛒 Cart ({cartCount})
      </button>
    </nav>
  );
}