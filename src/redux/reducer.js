const addMyBalanceReducer = (state = {
    balance: 100
}, action) => {
    switch (action.type) {
        case 'INC':
            state.balance += action.payload
            break;
        default:
    }
    return state
}

export default addMyBalanceReducer
