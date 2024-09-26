import svgIconCart from "../../images/illustration-empty-cart.svg";

export function CartProduct() {
  return (
    <article className="bx-cartProducts">
      <span className="titleCart">Your Cart (0)</span>
      <div className="bx-iconCartEmpty">
        <img className="iconCartEmpty" src={svgIconCart} alt="" />
        <span className="descriptionEmptyCart">
          Your added items will appear here
        </span>
      </div>
    </article>
  );
}
