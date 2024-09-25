import svgIconCart from "../../images/icon-add-to-cart.svg";
import imageProduct from "../../images/image-cake-desktop.jpg";

export function ProductsDesserts() {
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
      </article>
    </>
  );
}
