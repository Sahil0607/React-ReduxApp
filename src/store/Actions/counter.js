import * as actionTypes from './actionsTypes';

export const increament = () => {
    return {
        type: actionTypes.INCREAMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        value
    }
}

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        value
    }
}



