import { createStore, combineReducers } from 'redux';
import nominationReducer from './reducers/nominationReducer';
import resultReducer from './reducers/resultReducer';
import modeReducer from './reducers/modeReducer';

const rootReducer = combineReducers({
    nomination: nominationReducer,
    result: resultReducer,
    mode: modeReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
