import remove from "../assets/images/icon-remove-item.svg";

export default function CartItem() {
  return (
    <div className="cartItem">
      <div className="cartItemDesc">
        <p>Item Name</p>
        <span className="quantity">2x</span>
        <span className="pricePerItem">@ $5.50</span>
        <span className="totalPrice">$11.00</span>
      </div>
      <img src={remove} alt="remove-item-icon" />
    </div>
  )
}
