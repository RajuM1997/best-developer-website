import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  const totalPrice = (previceValue, currentValue) =>
    previceValue + currentValue.projectPrice;
  const total = cart.reduce(totalPrice, 0);
  //   console.log(deve);
  return (
    <div className="single-cart">
      <h2>
        <i class="fas fa-shopping-cart counte-card"></i>
        Add Cart: <span className="card-number">{cart.length}</span>
      </h2>
      <h4>Total Price: ${parseInt(total)}</h4>
      {cart.map((developer) => (
        <h4 className="imgOrName">
          <span className="developerImg">
            <img src={developer.image} alt="" />
          </span>{" "}
          Name: {developer.name}
        </h4>
      ))}
    </div>
  );
};

export default Cart;
