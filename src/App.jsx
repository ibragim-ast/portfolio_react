import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="app">
      <Header count={cartCount} />
      <Main onAddToCart={handleAddToCart}/>
      <Footer />
    </div>
  );
}

export default App;
