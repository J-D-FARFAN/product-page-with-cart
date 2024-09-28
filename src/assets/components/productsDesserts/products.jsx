import svgIconCart from "../../../../public/images/icon-add-to-cart.svg";
import { useState } from "react";

export function ProductsDesserts({
  typeProduct,
  nameProduct,
  priceProduct,
  imageProduct,
  addToCart,
}) {
  const [btnState, setBtnState] = useState(false);

  const handleClick = () => {
    setBtnState(true);
    addToCart({
      typeProduct,
      name: nameProduct,
      price: parseFloat(priceProduct),
      image: imageProduct,
    });
  };

  const btnStateAdded = btnState ? "addCart addedProdutcCart" : "addCart";

  return (
    <>
      <article className="content-cardProductDessert">
        <figure className="image-presentationProductDessert">
          <div className="bx-presentationDesserts">
            <img src={imageProduct} alt="" className="productDessert" />
          </div>

          {!btnState ? (
            <button className={btnStateAdded} onClick={handleClick}>
              <img src={svgIconCart} alt="" className="btn-addCart" />
              Add to Cart
            </button>
          ) : (
            <button className={btnStateAdded} onClick={handleClick}>
              <div className="content-iconAdded-product">
                <svg
                  className="iconAddedProduct"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="none"
                  viewBox="0 0 10 2"
                >
                  <path
                    className="iconAddedProduct-color"
                    d="M0 .375h10v1.25H0V.375Z"
                  />
                </svg>
              </div>

              <span className="numberProduct">0</span>

              <div className="content-iconAdded-product">
                <svg
                  className="iconAddedProduct"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    className="iconAddedProduct-color"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                  />
                </svg>
              </div>
            </button>
          )}
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
