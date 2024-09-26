import svgIconCart from "../../images/icon-add-to-cart.svg";

export function ProductsDesserts({
  typeProduct,
  nameProduct,
  priceProduct,
  imageProduct,
}) {
  return (
    <>
      <article className="content-cardProductDessert">
        <figure className="image-presentationProductDessert">
          <div className="bx-presentationDesserts">
            <img src={imageProduct} alt="" className="productDessert" />
          </div>

          <button className="addCart">
            <img src={svgIconCart} alt="" className="btn-addCart" />
            Add to Cart
          </button>
        </figure>

        <section className="information-cardProductDessert">
          <span className="typeProduct">{typeProduct}</span>
          <span className="nameProduct">{nameProduct}</span>
          <span className="priceProduct">${priceProduct}</span>
        </section>
      </article>
    </>
  );
}
