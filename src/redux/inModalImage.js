const initialState = {
    items: [],
    loading: false
}
const modalImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'modalImage/load/start':
            return {
                ...state,
                loading: true
            };

        case 'modalImage/load/success':
            return {
                ...state,
                items: action.payload,
                loading: false
            };

        default:
            return state;
    }
}


export default modalImageReducer;
