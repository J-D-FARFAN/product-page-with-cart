import "./App.css";
import { ProductsDesserts } from "./assets/components/productsDesserts/products";

function App() {
  return (
    <>
      <article className="bx-column-productDesserts">
        <h1 className="title">Desserts</h1>

        <ProductsDesserts />
      </article>

      <article className="bx-column-section-productDessertsCart">
        {/*COMPONENTE CARRITO*/}
      </article>
    </>
  );
}

export default App;
