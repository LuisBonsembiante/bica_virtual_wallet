import {DNI_CHANGED, LOGIN_USER_SUCCESS, PASSWORD_CHANGED, LOGIN_USER_FAILED, LOGIN_USER} from "../../redux/actions/types";

const INITIAL_STATE = {dni: '', password: '', user: null, error:'', loading: false};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case DNI_CHANGED:
            return {...state, dni: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER:
            return {...state, loading: true, error:''};
        case LOGIN_USER_SUCCESS:
            return {...state,...INITIAL_STATE, user: action.payload};
        case LOGIN_USER_FAILED:
            return {...state, error: 'Authentication Failed.', loading: false};
        default:
            return state;
    }
};