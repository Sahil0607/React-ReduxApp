import * as actionsCreators from '../Actions/actionsTypes';
import { updateObject } from './../utility';

const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsCreators.INCREAMENT:
            return updateObject(state, {counter: state.counter + 1});
            // return {
            //     ...state,
            //     counter: state.counter + 1
            // }
        case actionsCreators.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
        case actionsCreators.ADD:
            return updateObject(state, {counter: state.counter + action.value});
        case actionsCreators.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value});
        default:
            return state
            // break;
    }
}

export default CounterReducer;