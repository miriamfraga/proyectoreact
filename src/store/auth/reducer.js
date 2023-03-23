import {
    DO_LOGIN,
    DO_LOGIN_OK,
    DO_LOGIN_FAIL
} from './actionTypes';

const initialState = {
    loadingLogin: false,
    user: {},
    error: {
        message: ""
    }
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case DO_LOGIN:
            state = {...state, loadingLogin: true}
            break

        case DO_LOGIN_OK:
            state = {...state, loadingLogin: false, user: action.payload}
            break

        case DO_LOGIN_FAIL:
            state = {...state, loadingLogin: false, user: {}}
            break

        default:
            break
    }
    return state
}

export default AuthReducer;