import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CartOverlay from "./components/CartOverlay";
import SuccessOverlay from "./components/SuccessOverlay";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cartCatalog");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    setCart([]);
    setIsCartOpen(false);
    setIsSuccessOpen(true);
  };

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

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  useEffect(() => {
    localStorage.setItem("cartCatalog", JSON.stringify(cart));
  }, [cart]);

  const handleRemoveItem = (productId) => {
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem.quantity === 1) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(
        cart.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }),
      );
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <Header count={totalItems} onCartOpen={handleCartOpen} />
      <Main onAddToCart={handleAddToCart} />
      <Footer />
      {isCartOpen && (
        <CartOverlay
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          total={totalPrice}
          count={totalItems}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
        />
      )}
      {isSuccessOpen && (
        <SuccessOverlay onClose={() => setIsSuccessOpen(false)} />
      )}
    </div>
  );
}

export default App;
