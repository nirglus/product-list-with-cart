import { useState } from "react"
import carbonIcon from "../assets/images/icon-carbon-neutral.svg"

export default function Cart() {
  const [cartQuantity, setCartQuantity] = useState(7);
  return (
    <aside>
        <h1>Your Cart ({cartQuantity})</h1>
        <div className="cartItems">

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
    </aside>
  )
}
