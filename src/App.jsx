import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CartOverlay from "./components/CartOverlay";

function App() {
  const [cart, setCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="app">
      <Header
        count={cart.length}
        onClearCart={handleClearCart}
        onCartOpen={handleCartOpen}
      />
      <Main onAddToCart={handleAddToCart} />
      <Footer />
      {isCartOpen && (
        <CartOverlay
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          total={totalPrice}
        />
      )}
    </div>
  );
}

export default App;
