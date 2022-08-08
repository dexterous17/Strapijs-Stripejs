const initState = {

    itemId: [],
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
            return {

                ...state,
                itemId: [...state.itemId, action.payload]

            }

        case 'REMOVEFROMCART':

            const index = state.itemId.indexOf(action.payload)
            console.log(`Index ${index} ${state.itemId[index]}`)
            console.log(state.itemId)
            let NewBasket = [...state.itemId]

            if (index > -1) {

                NewBasket.splice(index, 1);

            } else {

                console.warn(`can't remove ${action.payload}`)

            }

            return {

                ...state,
                itemId: NewBasket

            }

        case 'ADDUSER':
            console.log(action.jwt,action.email)
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
                    jwt:"",
                    email:""
                }
            }
        
        default:
            return state
    }
}

export default rootReducer