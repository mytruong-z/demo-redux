import * as actionTypes from './action';
const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            return {
                ...state,//Spread Operator
                counter: state.counter + 1
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            };
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            };
        default:
            return {
                ...state,
                counter: state.counter + 1
            };
    }
};

export default reducer;