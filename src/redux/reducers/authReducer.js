import {
    resetAuthActionTypes,
    signInActionTypes,
} from '../types';

const initialState = {
    token: null,
    userId: null,
    sessionExpired: null,

    signInLoading: false,
    signInSuccess: null,
    signInFailed: null,

}

export default (state = initialState, action) => {
    switch (action.type) {
        // ** core
        case signInActionTypes.SESSION_EXPIRED_ACTION:
            return {
                ...state,
                sessionExpired: action.value
            }

        //  ** sign in
        case signInActionTypes.REQUEST_ACTION:
            return {
                ...state,
                signInLoading: true,
                signInSuccess: null,
                signInFailed: null
            }
        case signInActionTypes.SUCCESS_ACTION:
            return {
                ...state,
                signInLoading: false,
                signInSuccess: action.value,
                signInFailed: null,
                token: action.value ? action.value.result.token : null,
                userId: action.value ? action.value.result.id : null,
            }
        case signInActionTypes.FAILED_ACTION:
            return {
                ...state,
                signInLoading: false,
                signInSuccess: null,
                signInFailed: action.value
            }

        // ** store token
        case signInActionTypes.STORE_TOKEN_ACTION:
            return {
                ...state,
                token: action.value,
            }

        // ** Reset
        case resetAuthActionTypes.RESET_ACTION:
            return {
                ...state,
                signInLoading: false,
                signInSuccess: null,
                signInFailed: null,


                userId: "Working..."

            }


        default:
            return state
    }
}
