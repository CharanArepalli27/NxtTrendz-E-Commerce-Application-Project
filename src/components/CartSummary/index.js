// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let TotalPrice = 0
      cartList.forEach(eachCartItem => {
        TotalPrice += eachCartItem.price * eachCartItem.quantity
      })
      console.log(TotalPrice)
      return (
        <div className="Summary-container">
          <h1 className="total-heading">
            Order Total: <span>Rs {TotalPrice}</span>
          </h1>
          <p className="total-items">{cartList.length} Items in cart</p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
