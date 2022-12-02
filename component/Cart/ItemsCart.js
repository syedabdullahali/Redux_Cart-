import './ItemsCart.css'
import { ShoppingCartAction } from '../store/store'
import { cartUiinfoAction } from '../store/store'
import {useDispatch } from 'react-redux'
const DUMMY_DATA = [

    {
        id: 'p1',
        title: 'My First Book',
        discription: 'This my first book that i ever wrote',
        price: '6.00',
    },

    {
        id: 'p2',
        title: 'My Second Book',
        discription: 'This my second book that i ever wrote',
        price: '12.00'
    },
]

function ItemsCart() {

    return (DUMMY_DATA.map((el) => {
        return <ItemCart book={el} key={el.id} />
    }))
}

export default ItemsCart


function ItemCart({ book }) {

    const dispatch = useDispatch()

    const updateShopingCart = () => {
        dispatch(ShoppingCartAction.updateShopingCart(book))
        dispatch(cartUiinfoAction.renderNotificationFun())

    }
    return (
        <div className="itemCart">

            <div>
                <h3>{book.title}</h3>
                <button>${book.price}</button>
            </div>

            <div>
                <h3>{book.discription}</h3>
                <button onClick={updateShopingCart} >Add to Cart</button>
            </div>
        </div>
    )

}

