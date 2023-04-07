/* IMPORT DO_LOGIN DO_LOGIN_OK DO_LOGIN_FAIL */
import {
    DO_LOGIN,
    DO_LOGIN_OK,
    DO_LOGIN_FAIL
} from './actionTypes';

/* IMPORT AXIOS */
import axios from 'axios';

/* ACTION DO_LOGIN */
export const actionDoLogin = (loginData) => {
    return {
        type: DO_LOGIN,
        payload: loginData
    }
};

/* ACTION DO_LOGIN_OK */
export const actionDoLoginOk = (userDetails) => {
    return {
        type: DO_LOGIN_OK,
        payload: userDetails
    }
};

/* ACTION DO_LOGIN_FAIL */
export const actionDoLoginFail = (error) => {
    return {
        type: DO_LOGIN_FAIL,
        payload: error
    }
};

export const doLogin = (userData) => {
    return async (dispatch) => {
        try {
            dispatch(actionDoLogin(userData))
            const response = await axios.post("https://dummyjson.com/auth/login", userData)
            dispatch(actionDoLoginOk(response.data))
        } catch (error) {
            dispatch(actionDoLoginFail(error))
        }
    }
}
