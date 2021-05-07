const initialState = {
    mode: 'Light'
}

const modeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SWITCH_MODE':
            return {
                ...action.payload
            }
        default: 
        return state
    }
};

export default modeReducer;