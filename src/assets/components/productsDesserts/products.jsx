import svgIconCart from "../../../../public/images/icon-add-to-cart.svg";
import { useState, useEffect } from "react";

export function ProductsDesserts({
  typeProduct,
  nameProduct,
  priceProduct,
  imageProduct,
  addToCart,
  removeFromCart,
  quantity,
}) {
  const [productSelect, setProductSelect] = useState(false);

  // Usar useEffect para restablecer el estado de selección cuando quantity sea 0
  useEffect(() => {
    if (quantity === 0) {
      setProductSelect(false); // Restablecer el estado de selección al eliminar todos los productos
    }
  }, [quantity]);

  const handleClickIncrement = () => {
    addToCart({
      typeProduct,
      name: nameProduct,
      price: parseFloat(priceProduct),
      image: imageProduct,
    });

    setProductSelect(true); // Establecer el borde como seleccionado
  };

  const handleClickDecrement = () => {
    if (quantity > 0) {
      removeFromCart({
        name: nameProduct,
      });
    }
  };

  const btnStateAdded = quantity > 0 ? "addCart addedProdutcCart" : "addCart";

  const selectedProductCart = productSelect
    ? "productDessert productDessertBorder"
    : "productDessert";

  return (
    <article className="content-cardProductDessert">
      <figure className="image-presentationProductDessert">
        <div className="bx-presentationDesserts">
          <img src={imageProduct} alt="" className={selectedProductCart} />
        </div>

        {quantity === 0 ? (
          <button className={btnStateAdded} onClick={handleClickIncrement}>
            <img src={svgIconCart} alt="" className="btn-addCart" />
            Add to Cart
          </button>
        ) : (
          <button className={btnStateAdded}>
            <div
              className="content-iconAdded-product"
              onClick={handleClickDecrement}
            >
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

            <span className="numberProduct">{quantity}</span>

            <div
              className="content-iconAdded-product"
              onClick={handleClickIncrement}
            >
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
  );
}
