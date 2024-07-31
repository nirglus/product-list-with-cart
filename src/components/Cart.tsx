import { useState } from "react"
import carbonIcon from "../assets/images/icon-carbon-neutral.svg"
import CartItem from "./CartItem";
import "./Cart.scss";

export default function Cart() {
  const [cartQuantity, setCartQuantity] = useState(7);
  return (
    <aside>
      <div className="cart">
        <h1 className="yourCart">Your Cart ({cartQuantity})</h1>
        <div className="cartItems">
          <CartItem />
        </div>
        <div className="orderTotal">
          <p>Order Total</p>
          <h1>$</h1>
        </div>
        <div className="carbon">
          <img src={carbonIcon} alt="carbon-neutral" />
          <span>This is <strong>carbon-neutral</strong> delivery</span>
        </div>
        <button>Confirm Order</button>
      </div>
    </aside>
  )
}
