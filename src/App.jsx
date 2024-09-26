import "./App.css";
import { ProductsDesserts } from "./assets/components/productsDesserts/products";
import { CartProduct } from "./assets/components/cart/cart";
import data from "./data.json";

function App() {
  return (
    <>
      <article className="bx-column-productDesserts">
        <h1 className="title">Desserts</h1>

        <section className="bx-productsDesserts">
          {data.map((products) => {
            return (
              <ProductsDesserts
                typeProduct={products.category}
                nameProduct={products.name}
                priceProduct={products.price.toFixed(2)}
                imageProduct={products.image.desktop}
              />
            );
          })}
        </section>
      </article>

      <article className="bx-column-section-productDessertsCart">
        <CartProduct />
      </article>
    </>
  );
}

export default App;
