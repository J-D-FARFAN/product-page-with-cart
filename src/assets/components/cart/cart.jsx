import svgIconCart from "../../../../public/images/illustration-empty-cart.svg";

export function CartProduct({ cartItems }) {
  return (
    <article className="bx-cartProducts">
      <span className="titleCart">Your Cart ({cartItems.length})</span>
      {cartItems.length === 0 ? (
        <div className="bx-iconCartEmpty">
          <img className="iconCartEmpty" src={svgIconCart} alt="" />
          <span className="descriptionEmptyCart">
            Your added items will appear here
          </span>
        </div>
      ) : (
        <article className="cartItemsList">
          {cartItems.map((item, index) => (
            <article className="content__all-productCartList">
              <section key={index} className="cartItem">
                <div className="cartItemDetails">
                  <span className="cartItemName">{item.name}</span>

                  <div className="bx-details-price">
                    <span className="quantity">x{item.quantity}</span>
                    <span className="cartItemPrice">
                      @ {item.price.toFixed(2)}
                    </span>

                    <span className="cartItemPriceTotal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="bx-iconRemoveProduct">
                  <svg
                    className="iconRemove"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                  >
                    <path
                      className="iconRemove-color"
                      d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                    />
                  </svg>
                </div>
              </section>

              <span className="line"></span>
            </article>
          ))}
        </article>
      )}
    </article>
  );
}
