const initialState = {
    nominations: []
};

const nominationReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_NOMINATIONS':
            return {
                ...action.payload
            }
        default: 
        return state
    }
};

export default nominationReducer;