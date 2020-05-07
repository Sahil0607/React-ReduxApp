import * as actionTypes from './actionsTypes';

export const saveResult = (value) => {
    return {
        type: actionTypes.SAVE_RESULT,
        value
    }
}

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id
    }
}