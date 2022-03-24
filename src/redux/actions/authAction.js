
import {signInURL} from '../../configurations/urlConfigurations';
import {httpPost} from '../services/httpServices';
import {
    resetAuthActionTypes,
    signInActionTypes
} from '../types';



// ** Home


// ** Auth
export const storeTokenAuthAction = (token) => {
    return {
        type: signInActionTypes.STORE_TOKEN_ACTION,
        value: token,
    }
}

export const resetAuthAction = () => {
    return {
        type: resetAuthActionTypes.RESET_ACTION,
    }
}

export const signInAction = data => {
    return httpPost({
        url: signInURL,
        actionTypes: signInActionTypes,
        data
    })
}
