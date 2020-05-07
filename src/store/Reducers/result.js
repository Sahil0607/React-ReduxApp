import * as actionsCreators from '../Actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const ResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsCreators.SAVE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(),val: action.value})});
        case actionsCreators.DELETE_RESULT:
            return updateObject(state, {results: state.results.filter(result => result.id !== action.id)});
        default:
            return state
    }
}

export default ResultReducer;