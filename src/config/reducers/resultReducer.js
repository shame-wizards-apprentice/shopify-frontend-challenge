const initialState = {
    results: []
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_MOVIES':
            return {
                ...action.payload
            }
        default: 
            return state
    }
};

export default resultReducer;