import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showEmptyView = cartList.length === 0
      const initialValue = 0
      const total = cartList.reduce(
        (accumulator, current) =>
          accumulator + current.price * current.quantity,
        initialValue,
      )
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
                <div className="check-out-container">
                  <h1 className="total-price-heading">
                    Total Price <span className="price-span">Rs {total}</span>
                  </h1>
                  {cartList.length > 0 ? (
                    <p className="items-count">
                      {cartList.length} items in cart
                    </p>
                  ) : null}
                  <div>
                    <button type="button" className="checkout-btn">
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
