const initState = {

    itemId: [],
    user:[
        
    ]
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

        default:

            return state
    }
}

export default rootReducer