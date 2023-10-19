const reducer = (state, action) =>{
    switch (action.type) {
        case "Set_Loading":
            return {
                ...state,
                isLoading: true
            }

        case "Set_Api_Data":
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }

        case "Set_Api_Error":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
    
        default:
            return state;
    }
}

export default reducer