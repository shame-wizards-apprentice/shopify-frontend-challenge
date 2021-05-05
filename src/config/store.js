import { createStore, combineReducers } from 'redux';
import nominationReducer from './reducers/nominationReducer';
import resultReducer from './reducers/resultReducer';

const rootReducer = combineReducers({
    nomination: nominationReducer,
    result: resultReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
