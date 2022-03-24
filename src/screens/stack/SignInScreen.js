// ** Import Core
import React from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
// ** Import Images
import {ICONS, IMAGES} from '../../assets/images';
// ** Import constant
import {colors, dimensions, fontFamilies, fontSizes} from '../../configurations/constants';
// ** Import components
import EmptyView from '../../components/EmptyView';
import TextField from '../../components/TextField';
import ListButton from '../../components/ListButton';
import {useDispatch} from 'react-redux';
import {storeTokenAuthAction} from '../../redux/actions/authAction';


const SignInScreen = ({navigation}) => {

    const dispatch = useDispatch();

    // ** function here
    const forgotPasswordHandler = () => {
        //TODO: do something
        navigation.navigate('ForgetPasswordScreen');
    };

    const signInHandler = () => {
        // ** fake action
        dispatch(storeTokenAuthAction('fake-token-for-tem-login'));
        // dispatch(storeTokenAuthAction(null));

    };

    const goToRegisterHandler = () => {
        navigation.navigate('RegisterScreen');
    };

    return (
        <View style={{flex: 1}}>
            <Image source={IMAGES.upperDecoration} style={styles.upperDecoration}/>
            <Image source={IMAGES.bottomDecoration} style={styles.bottomDecoration}/>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>


                        <View style={{alignItems: 'center'}}>
                            {/*logo images*/}
                            <View style={styles.logoContainer}>
                                <View>
                                    <Image source={IMAGES.starDecoration} style={styles.starDecoration}/>
                                    <Image source={ICONS.logo} style={styles.logo}/>
                                </View>
                            </View>


                            {/* welcome text */}
                            <Text style={styles.welcomeText}>Üdvözlünk,</Text>

                            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>

                            {/* welcome sub text */}
                            <Text style={styles.welcomeSubText}>Jó, hogy újra itt vagy!</Text>
                            <EmptyView style={{marginTop: dimensions.heightLevel1 * 0.5}}/>

                            <Text style={styles.welcomeSubText}>A folytatáshoz jelentkezz be!</Text>

                            <EmptyView style={{marginTop: dimensions.heightLevel2}}/>

                            {/* push up image */}
                            <Image source={IMAGES.pushup} style={styles.pushupImage}/>


                            <EmptyView style={{marginTop: dimensions.heightLevel2}}/>

                            {/* email or username */}
                            <TextField
                                placeholder='Email vagy Felhasználónév'
                            />
                            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>

                            {/* password */}
                            <TextField
                                placeholder='Jelszó'
                                isPassword
                                showEye
                            />

                            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>


                            {/* forgot password text */}
                            <TouchableOpacity onPress={forgotPasswordHandler}>
                                <Text style={styles.forgotPasswordText}>Elfelejtetted a jelszavad?</Text>
                            </TouchableOpacity>


                            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>

                            {/* sign in button */}
                            <ListButton
                                name="    Bejelentkezés    "
                                onPress={() => signInHandler()}
                            />

                            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>

                            {/* go to register page */}
                            <View style={styles.footerContainer}>
                                <Text style={styles.forgotPasswordText}>Még nincs felhasználód?</Text>
                                <TouchableOpacity onPress={goToRegisterHandler}>
                                    <Text
                                        style={[styles.forgotPasswordText, {color: 'rgba(0,0,0,0.8)'}]}> Regisztrálj</Text>
                                </TouchableOpacity>
                            </View>


                        </View>


                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </View>


    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    inner: {
        // padding: 24,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'green',
    },


    upperDecoration: {
        position: 'absolute',
        top: dimensions.heightLevel1 * 0.4,
        left: dimensions.widthLevel11 * 0.05,
        transform: [{scale: 1.4}],
        zIndex: 1,
    },

    bottomDecoration: {
        position: 'absolute',
        right: dimensions.widthLevel11 * 0.05,
        bottom: dimensions.heightLevel1 * 0.5,
        transform: [{scale: 1.4}],
        zIndex: 1,
    },


    logo: {
        width: dimensions.widthLevel11,
        height: dimensions.heightLevel3 * 1.5,
        transform: [{scale: 1}],
        // marginTop: dimensions.paddingLevel3,
        alignSelf: 'center',
    },

    starDecoration: {
        position: 'absolute',
        // right: dimensions.paddingLevel7,
        right: -dimensions.paddingLevel6,
        top: -dimensions.paddingLevel4,
    },

    welcomeText: {
        color: colors.black,
        fontSize: fontSizes.fontXXXXLarge * 1.3,
        fontFamily: fontFamilies.OpenSansExtraBold,
    },

    welcomeSubText: {
        color: colors.black,
        fontSize: fontSizes.fontMediumPlus,
        fontFamily: fontFamilies.OpenSansRegular,
    },

    pushupImage: {
        //TODO: nothing
    },

    forgotPasswordText: {
        fontFamily: fontFamilies.MontRegular,
        fontSize: fontSizes.fontMedium,
        color: colors.black,
    },

    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },


});

export default SignInScreen;
