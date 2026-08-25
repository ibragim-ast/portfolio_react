import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CartOverlay from "./components/CartOverlay";

function App() {
  const [cart, setCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(() =>
        cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <Header
        count={totalItems}
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
          count={totalItems}
        />
      )}
    </div>
  );
}

export default App;
