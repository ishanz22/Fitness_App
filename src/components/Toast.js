import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showToast} from '../configurations/ToastConfig';
import {View} from 'react-native'

const Toast = () => {

    let dispatch = useDispatch();


    // login page related messages
    // const signInSuccess = useSelector(state => state.authState.signInSuccess);
    // const signInFailed = useSelector(state => state.authState.signInFailed);


    // handle login page related toasts



    // handle sign up page related toasts
    // useEffect(() => {
    //     if (signUpSuccess) {
    //         showToast({code: 203, result: 'Sign up Success!'})
    //     }
    //     if (signUpFailed) {
    //         showToast({code: -1, result: 'Please, Enter the valid School Code!'})
    //     }
    //
    // }, [signUpSuccess, signUpFailed])


    // lesson sub screen page , submit related toasts
    // useEffect(() => {
    //     if (assignmentSaveSuccess) {
    //         showToast({code: 203, result: 'assignment submitted successfully!'})
    //     }
    //     if (assignmentSaveFailed) {
    //         showToast({code: 500, result: 'something is wrong!'});
    //     }
    //
    // }, [assignmentSaveSuccess, assignmentSaveFailed])




    return <View></View>;

}

export default Toast
