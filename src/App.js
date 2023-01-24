import {Fragment, useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [loadCart, setLoadCart] = useState(false);

    function showCartHandler() {
        setLoadCart(true);
    }

    function hideCartHandler() {
        setLoadCart(false);
    }

    return <CartProvider>
      {loadCart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
          <Meals/>
      </main>
    </CartProvider>
}

export default App;
