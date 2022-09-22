const initState = {

    cartItems: [],
    user: {
        jwt: '',
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

export const removequantity = (id) => {
    return {
        type: 'REMOVEQUANTITY',
        payload: id
    }
}

export const addquantity = (id) => {
    return {
        type: 'ADDQUANTITY',
        payload: id
    }
}

const rootReducer = (state = initState, action) => {
    var newcartitems = state.cartItems
    switch (action.type) {

        case 'ADDTOCART':

            if (!state.cartItems.find(item => item.itemid === action.payload)) {
                let item = [...state.cartItems]
                item.push({
                    ...action.payload,
                    quantity: 1
                })

                console.log(item)
                return {
                    ...state,
                    cartItems: [...item]
                }
            }


            if (state.cartItems.find(item => item.itemid === action.payload)) {
                const index = state.cartItems.findIndex(object => object.itemid === action.payload)


                newcartitems[index].quantity = newcartitems[index].quantity + 1

                return {
                    ...state,
                    cartItems: [...newcartitems]
                }
            }
            return {

                ...state,
                cartItems: [...state.cartItems, action.payload]

            }

        case 'REMOVEFROMCART':
            console.log(action.payload)
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

        case 'ADDQUANTITY':
            if (state.cartItems.find(item => item.itemid === action.payload)) {

                const index = state.cartItems.findIndex(object => object.itemid === action.payload)
                console.log(index)

                newcartitems[index].quantity = newcartitems[index].quantity + 1
                console.log(state)
                return {
                    ...state,
                    cartItems: [...newcartitems]
                }
            }
            return {
                ...state
            }

        case 'REMOVEQUANTITY':
            console.log(action.payload)


            if (state.cartItems.find(item => item.itemid === action.payload)) {
                const index = state.cartItems.findIndex(object => object.itemid === action.payload)
                console.log(index)
                if (state.cartItems[index].quantity > 1) {
                    newcartitems[index].quantity = newcartitems[index].quantity - 1
                    return {
                        ...state,
                        cartItems: [...newcartitems]
                    }
                } else {
                    if (index > -1 && state.cartItems[index].quantity === 1) {

                        newcartitems.splice(index, 1);
                        return {
                            ...state,
                            cartItems: [...newcartitems]
                        }
                    } else {

                        console.warn(`can't remove ${action.payload}`)

                    }
                }
            }
            return {
                ...state
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
            localStorage.removeItem('jwt')
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