import { cartUiinfoAction } from "./store"

export const sendCartData = (cardData) => {

    return async (dispatch) => {

        dispatch(cartUiinfoAction.showNotification(
            {
                title: 'Pending...',
                message: 'Sending Cart Data',
                className: 'pending'
            }))

        const sedRequest = async () => {
            const response = await fetch(`https://reduxcart-cdcd2-default-rtdb.firebaseio.com/cart.json`, {
                method: 'PUT',
                body: JSON.stringify(cardData)
            })

            if (!response.ok) {
                throw Error('Sending Cart Data Faild.')
            }
            return response.ok
        }
        try {
            const result  = await sedRequest()

            dispatch(cartUiinfoAction.showNotification(
                {
                    title: 'Success',
                    message: 'SentCart cart data successfully!',
                    className: 'success'
                }))

                if(result){
                    setTimeout(()=>{
                        dispatch(cartUiinfoAction.removedNotification())
                    },2500)
                }

        } catch (error) {
            dispatch(cartUiinfoAction.showNotification(
                {
                    title: 'Error',
                    message: 'Sending cart data Faild.',
                    className: 'error'
                }))
        }
    }

}