import * as actionTypes from './actionsTypes';

export const myRandomAge = () => {
    return {
        type: actionTypes.RANDOM_AGE
    }
}

export const randomAge = () => {
    return dispatch => {      // Use bec. of redux-thunk and it will async
        setTimeout(() => {
            dispatch(myRandomAge())   // But dispatch is sync.
        }, 1000)
    }
}

export const deleteAge = (id) => {
    return {
        type: actionTypes.DELETE_AGE,
        id
    }
}

export const submitForm = (name, age) => {
    return {
        type: actionTypes.SUBMIT_FORM,
        name,
        age
    }
}