import {DNI_CHANGED, LOGIN_USER_SUCCESS, PASSWORD_CHANGED, LOGIN_USER_FAILED, LOGIN_USER} from "./types";
import {Actions} from 'react-native-router-flux';

export const dniChanged = (text) => {

    return {
        type: DNI_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {

    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});
        setTimeout(() =>{
            //do what you need here
            loginUserSucces(dispatch, {});
        }, 2000);
    };
};

const loginUserFail = (dispatch) => {

    dispatch({
        type: LOGIN_USER_FAILED
    });
};

const loginUserSucces = (dispatch, user) => {

    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};