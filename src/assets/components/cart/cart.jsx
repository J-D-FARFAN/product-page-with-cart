import svgIconCart from "../../../../public/images/illustration-empty-cart.svg";
import iconComplete from "../../../../public/images/icon-order-confirmed.svg";
import { useState } from "react";

export function CartProduct({ cartItems, removeFromCartAll, defualtNewOrder }) {
  const handleRemove = (product) => {
    removeFromCartAll(product, "decrement");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [modal, setModal] = useState(false);

  const showModal = modal
    ? "bx-modelCompleteOrderProduct activeModal"
    : "bx-modelCompleteOrderProduct";

  const blurPageModal = modal ? "blurModal activeBlurModal" : "blurModal";

  const handleClick = () => {
    setModal(true); // Abrir modal al confirmar pedido
  };

  const newOrder = () => {
    defualtNewOrder();
    setModal(false); // Cerrar modal al iniciar nueva orden
  };

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
          <article className="hiddenProductCart">
            {cartItems.map((item, index) => (
              <section className="content__all-productCartList" key={index}>
                <section className="cartItem">
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

                  <div
                    className="bx-iconRemoveProduct"
                    onClick={() => handleRemove(item)}
                  >
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
              </section>
            ))}
          </article>

          <section className="bx-orderConfirm-total">
            <header className="sectionTotal">
              <span className="orderTotal">Order Total</span>
              <span className="priceTotalProduct">
                ${totalPrice.toFixed(2)}
              </span>
            </header>

            <div className="carbonNeutral">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                viewBox="0 0 21 20"
              >
                <path
                  fill="#1EA575"
                  d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
                />
                <path
                  fill="#1EA575"
                  d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
                />
              </svg>
              <span className="description">
                This is a <span className="semibold">carbon-neutral</span>{" "}
                delivery
              </span>
            </div>
            <button className="confirmOrder" onClick={handleClick}>
              Confirm Order
            </button>
          </section>
        </article>
      )}

      <section className={showModal}>
        <img src={iconComplete} alt="Order Completed" />

        <header className="introductionModal">
          <span className="titleModal">Order Confirmed</span>
          <span className="descriptionModal">We hope you enjoy your food!</span>
        </header>

        <article className="contentAllProductOrder">
          <section className="bx-productOrderCart">
            {cartItems.map((item, index) => (
              <section className="productOrderCart" key={index}>
                <div className="orderCard-product">
                  <figure className="infoProductOrderCart">
                    <div className="contentImageProduct">
                      <img
                        className="imageProductOrderCart"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>

                    <section className="infoProduct">
                      <span className="titleProduct">{item.name}</span>
                      <div className="bx-quantity-order__price">
                        <span className="quantity">x{item.quantity}</span>
                        <span className="priceIndividual">
                          @ ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </section>
                  </figure>

                  <span className="priceProduct">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <span className="line"></span>
              </section>
            ))}
          </section>

          <section className="bx-priceTotal">
            <span className="orderTotal">Order Total</span>
            <span className="priceTotal">${totalPrice.toFixed(2)}</span>
          </section>
        </article>

        <button className="newOrder" onClick={newOrder}>
          Start New Order
        </button>
      </section>
      <span className={blurPageModal}></span>
    </article>
  );
}
