import { configureStore } from '@reduxjs/toolkit'
import { shopingCartReducerData } from './shoppingCratData'
import { cartUiinfoReducer } from './cartUiHandler'

export const ShoppingCartAction = shopingCartReducerData[0]
export const cartUiinfoAction = cartUiinfoReducer[0]

const store = configureStore({
    reducer: {
        cartData: shopingCartReducerData[1],
        uiInfo: cartUiinfoReducer[1]
    }
})


export default store