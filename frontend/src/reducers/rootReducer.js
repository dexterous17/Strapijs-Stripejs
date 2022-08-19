const initState = {

    cartItems: [],
    user: {
        jwt: "",
        email: ""
    }
}

export const addtocart = (id) => {

    return {

        type: 'ADDTOCART',
        payload: id

    }
}

export const removefromcart = (id) => {

    return {

        type: 'REMOVEFROMCART',
        payload: id

    }

}

export const adduser = (jwt, email) => {

    return {
        type: 'ADDUSER',
        jwt: jwt,
        email: email
    }

}

export const removeuser = () => {

    return {
        type: 'REMOVEUSER'
    }

}


const rootReducer = (state = initState, action) => {
    switch (action.type) {

        case 'ADDTOCART':

            if (!state.cartItems.find(item => item.itemid === action.payload)) {
                let item = [...state.cartItems]
                item.push({
                    itemid: action.payload,
                    quantity: 1
                })

                console.log(item)
                return {
                    ...state,
                    cartItems: [...item]
                }
            }


            if (state.cartItems.find(item => item.itemid === action.payload)) {

                var newcartitems = state.cartItems
                const index = state.cartItems.findIndex(object => object.itemid === action.payload)
                console.log(index)

                newcartitems[index].quantity = newcartitems[index].quantity + 1
                console.log(state.cartItems)
                return {
                    ...state,
                    cartItems: [...newcartitems]
                }
            }


            console.log(state.cartItems)

            return {

                ...state,
                cartItems: [...state.cartItems, action.payload]

            }

        case 'REMOVEFROMCART':

            const index = state.cartItems.findIndex(object => object.itemid === action.payload)
            
            let NewBasket = [...state.cartItems]

            if (index > -1) {

                NewBasket.splice(index, 1);

            } else {

                console.warn(`can't remove ${action.payload}`)

            }

            return {

                ...state,
                cartItems: NewBasket

            }

        case 'INCREASEPRODUCTAMOUNT':

            return {

            }

        case 'DECREASEPRODUCTAMOUNT':

            return {

            }

        case 'ADDUSER':
            console.log(action.jwt, action.email)
            return {
                ...state,
                user: {
                    jwt: action.jwt,
                    email: action.email
                }
            }

        case 'REMOVEUSER':
            return {
                ...state,
                user: {
                    jwt: "",
                    email: ""
                }
            }

        default:
            return state
    }
}

export default rootReducer