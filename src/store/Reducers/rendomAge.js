import * as actionsCreators from '../Actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    myInfo: []
}

const RandomAgeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsCreators.RANDOM_AGE:
            return updateObject(state, {myInfo: state.myInfo.concat({id: new Date(), name: 'Sahil Patel', age: Math.floor(Math.random() * 100)})});
            
        case actionsCreators.DELETE_AGE:
            return updateObject(state, {myInfo: state.myInfo.filter(info => info.id !== action.id)});
            
        case actionsCreators.SUBMIT_FORM:
            return updateObject(state, {myInfo: state.myInfo.concat({id: new Date(), name: action.name, age: action.age})});
            
        default:
            return state;
    }
}

export default RandomAgeReducer;