import "./App.css";
import { ProductsDesserts } from "./assets/components/productsDesserts/products";

function App() {
  return (
    <>
      <article className="bx-column-productDesserts">
        <h1 className="title">Desserts</h1>

        <section className="bx-productsDesserts">
          <ProductsDesserts />
        </section>
      </article>

      <article className="bx-column-section-productDessertsCart">
        {/*COMPONENTE CARRITO*/}
      </article>
    </>
  );
}

export default App;
