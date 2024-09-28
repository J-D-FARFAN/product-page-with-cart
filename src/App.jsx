import "./App.css";
import { ProductsDesserts } from "./assets/components/productsDesserts/products";
import { CartProduct } from "./assets/components/cart/cart";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isProductInCart = prevItems.find(
        (item) => item.name === product.name
      );
      if (isProductInCart) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <article className="bx-column-productDesserts">
        <h1 className="title">Desserts</h1>

        <section className="bx-productsDesserts">
          {data.map((products) => {
            return (
              <ProductsDesserts
                key={products.name}
                typeProduct={products.category}
                nameProduct={products.name}
                priceProduct={products.price.toFixed(2)}
                imageProduct={products.image.desktop}
                addToCart={addToCart}
              />
            );
          })}
        </section>
      </article>

      <article className="bx-column-section-productDessertsCart">
        <CartProduct cartItems={cartItems} />
      </article>
    </>
  );
}

export default App;
