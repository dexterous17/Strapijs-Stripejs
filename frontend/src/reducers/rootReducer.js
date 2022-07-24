const initState = {

    itemId: []

}

export const addtocart = (id) => {

    return {

        type: 'ADDTOCART',
        payload: id

    }
}

export const removefromcart = () => {

    return {

        type: 'REMOVEFROMCART'

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

            const index = state.itemId.findIndex(

                (basketItem) => basketItem.id === action.id

            );

            let NewBasket = [...state.itemId]

            if (index >= 0) {

                NewBasket.splice(index, 1);

            } else {

                console.warn(`can't remove ${action.id}`)

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