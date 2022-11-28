import { createSlice} from '@reduxjs/toolkit'

const shoppingCart = { books: [] }

const shoppingItemCount = (books, action, actionPrice) => {
    books.forEach((el) => {
        const result = +el.totalPrice + +actionPrice
        const machedElId = el.id === action.payload.id

        if (machedElId && !(result < el.totalPrice)) {
            el.count++
            el.totalPrice = +el.totalPrice + +actionPrice
        } else if (machedElId && !(result < 0)) {
            el.count--
            el.totalPrice = +el.totalPrice + +actionPrice
        }
    })
}

const removeItem = (books) => {

    const removeItemIndex = books.findIndex((el) => {
        return el.totalPrice === 0
    })

    if (removeItemIndex !== -1) {
        books.splice(removeItemIndex, 1)
    }
}

const cartInfo = createSlice({
    name: 'shopingCart',
    initialState: shoppingCart,
    reducers: {
        updateShopingCart(state, action) {
            if (!state.books.some((el) => el.id === action.payload.id)) {
                action.payload.count = 1
                action.payload.totalPrice = action.payload.price
                state.books.push({ ...action.payload })
            } else {
                shoppingItemCount(state.books, action, +action.payload.price)
            }
        },
        increaseItem(state, action) {
            shoppingItemCount(state.books, action, +action.payload.price)
        },

        decreaseItem(state, action) {
            shoppingItemCount(state.books, action, -action.payload.price)
            removeItem(state.books)
        },

        updateWithFetchData(state,action){
            state.books=action.payload
        }

    }

})

export const shopingCartReducerData = [cartInfo.actions, cartInfo.reducer] 
