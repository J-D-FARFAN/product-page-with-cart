import "./App.css";
import { ProductsDesserts } from "./assets/components/productsDesserts/products";
import { CartProduct } from "./assets/components/cart/cart";
import data from "./data.json";
import { useState, useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productStates, setProductStates] = useState({}); // Estado para rastrear la cantidad de productos seleccionados

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

    // Actualiza el estado de productos
    setProductStates((prev) => ({
      ...prev,
      [product.name]: (prev[product.name] || 0) + 1,
    }));
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      const foundProduct = prevItems.find((item) => item.name === product.name);

      if (foundProduct && foundProduct.quantity > 1) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevItems.filter((item) => item.name !== product.name);
      }
    });

    // Actualiza el estado de productos
    setProductStates((prev) => ({
      ...prev,
      [product.name]: Math.max((prev[product.name] || 1) - 1, 0), // Evita que el estado sea negativo
    }));
  };

  const removeFromCartAll = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== product.name)
    );

    // Restablece el estado del producto al eliminar todo
    setProductStates((prev) => ({
      ...prev,
      [product.name]: 0, // Restablece la cantidad a cero
    }));
  };

  const defualtNewOrder = () => {
    setCartItems([]);
    setProductStates([]);
  };

  // Efecto para restablecer todos los estados cuando el carrito está vacío
  useEffect(() => {
    if (cartItems.length === 0) {
      setProductStates({}); // Restablecer todos los estados
    }
  }, [cartItems]);

  return (
    <>
      <article className="bx-column-productDesserts">
        <h1 className="title">Desserts</h1>

        <section className="bx-productsDesserts">
          {data.map((products) => {
            const quantity = productStates[products.name] || 0; // Obtener la cantidad actual del estado

            return (
              <ProductsDesserts
                key={products.name}
                typeProduct={products.category}
                nameProduct={products.name}
                priceProduct={products.price.toFixed(2)}
                imageProduct={products.image.desktop}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                quantity={quantity} // Pasa la cantidad actual del estado
              />
            );
          })}
        </section>
      </article>

      <article className="bx-column-section-productDessertsCart">
        <CartProduct
          cartItems={cartItems}
          removeFromCartAll={removeFromCartAll}
          defualtNewOrder={defualtNewOrder}
        />
      </article>
    </>
  );
}

export default App;
