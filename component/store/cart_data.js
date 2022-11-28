import { cartUiinfoAction } from "./store"
import { ShoppingCartAction } from "./store"

export function fetchCartData() {
    return (async (dispatch) => {
        const fetchData = async () => {
            const response =
                await fetch(`
   https://reduxcart-cdcd2-default-rtdb.firebaseio.com/cart.json
 `)
            if (!response.ok) {
                throw new Error('Could not fetch cart daat!')
            }

            const data = await response.json()
            return data
        }
        try {
            const cartData = await fetchData()
            if (!cartData) {
                return
            }
            dispatch(ShoppingCartAction.updateWithFetchData(cartData))

        } catch (error) {
            dispatch(cartUiinfoAction.showNotification(
                {
                    title: 'Error',
                    message: 'Fetching cart data Faild.',
                    className: 'error'
                }))
        }

    })
}