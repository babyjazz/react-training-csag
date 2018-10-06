import {
    createStore,
    combineReducers
} from 'redux';
import addMyBalanceReducer from './reducer';

const store = createStore(combineReducers({
    myWallet: addMyBalanceReducer
}))

export default store
