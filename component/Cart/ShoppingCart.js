import './ShoppingCart.css'
import { useDispatch, useSelector } from 'react-redux'
import { ShoppingCartAction } from '../store/store'
import {cartUiinfoAction} from '../store/store'

function ShoppingCart() {

  const state = useSelector(state => state)
  const items = state.cartData.books
  const renderCart = state.uiInfo.renderCart

  return (renderCart && <div className="shoppingCart">
    <div>
      <h3>Your Shopping Cart</h3>
    </div>
    {items.map((item) => <ShoppingItems item={item} key={item.id} />)}
  </div>
  )
}

export default ShoppingCart


function ShoppingItems({ item }) {

  const dispatch = useDispatch()

  const increment = () => {
    dispatch(ShoppingCartAction.increaseItem(item))
    dispatch(cartUiinfoAction.renderNotificationFun())

  }

  const decrement = () => {
    dispatch(ShoppingCartAction.decreaseItem(item))
    dispatch(cartUiinfoAction.renderNotificationFun())
  }




  return (
    <div className='shoppingItem'>

      <div className='productinfo'>
        <h2>{item.title}</h2>
        <h3>${item.totalPrice}<span>(${item.price}/item)</span></h3>
      </div>

      <div className='counter'>
        <h3><span>&#10006;</span>{item.count}</h3>
        <div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>


    </div>
  )



}
