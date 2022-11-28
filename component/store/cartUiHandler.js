import { createSlice } from '@reduxjs/toolkit'

const uiState = { renderCart: false, notification: { title: '', message: '', className: '' }, renderNotification: false }

const cartInfo = createSlice({
    name: 'uiCart',
    initialState: uiState,
    reducers: {
        showCart(state) {
            state.renderCart = !state.renderCart
        },
        showNotification(state, action) {
            state.notification = {
                title: action.payload.title,
                message: action.payload.message,
                className: action.payload.className
            }
        },
        renderNotificationFun(state) {
            state.renderNotification = true
        },
        removedNotification(state) {
            state.renderNotification = false
        }

    }
})

export const cartUiinfoReducer = [cartInfo.actions, cartInfo.reducer]


