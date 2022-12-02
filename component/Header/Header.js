import './Header.css'
import { useDispatch } from 'react-redux'
import { cartUiinfoAction } from '../store/store'

function Header({ totalItem }) {
    const dispatch = useDispatch()

    const toggleCartHandler = () => {
        dispatch(cartUiinfoAction.showCart())
    }

    return (<header className='headerStyle'>
        <h1>ReduxCart</h1>
        <button onClick={toggleCartHandler} >
            My Cart {totalItem}
        </button>
    </header>)

}

export default Header