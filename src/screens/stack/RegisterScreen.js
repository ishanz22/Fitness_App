// ** Import Core
import React, {useState} from 'react';
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
import {ICONS, IMAGES} from '../../assets/images';
// ** Import constant
import {colors, dimensions, fontFamilies, fontSizes} from '../../configurations/constants';
// ** Import components
import EmptyView from '../../components/EmptyView';
import TextField from '../../components/TextField';
import ListButton from '../../components/ListButton';
// ** Import external npm library
import CheckBox from '@react-native-community/checkbox';


const RegisterScreen = ({navigation}) => {

    // ** state and selector
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    // ** function here
    const signUpHandler = () => {
        //TODO: do something
    };

    const goToSignInHandler = () => {
        navigation.navigate('SignInScreen');
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
                            <Text style={styles.welcomeText}>Regisztráció</Text>

                            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>

                            {/* welcome sub text */}
                            <Text style={styles.welcomeSubText}>A regisztrációval elindítod a 7 napos</Text>
                            <Text style={styles.welcomeSubText}>próbaidőszakod! Utána az applikáció</Text>
                            <Text style={styles.welcomeSubText}>használata előfizetéssel jár! </Text>

                            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>


                            {/* name */}
                            <TextField
                                placeholder='Neved'
                            />
                            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>

                            {/* email */}
                            <TextField
                                placeholder='E-mail címed'
                            />
                            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>

                            {/* password */}
                            <TextField
                                placeholder='Jelszó'
                                isPassword
                                showEye
                            />

                            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>


                            {/* password again*/}
                            <TextField
                                placeholder='Jelszó mégegyszer'
                                isPassword
                                showEye
                            />


                            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>


                            {/* terms accept text */}
                            <View style={styles.footerContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />
                                <Text style={styles.forgotPasswordText}>Elfogadom a felhasználási feltételeket.</Text>
                            </View>


                            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>

                            {/* sign up button */}
                            <ListButton
                                name="   Létrehozom a profilom   "
                                onPress={signUpHandler}
                            />

                            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>


                            {/* go to sign in page */}
                            <View style={styles.footerContainer}>
                                <Text style={styles.forgotPasswordText}>Már van felhasználód?</Text>
                                <TouchableOpacity onPress={goToSignInHandler}>
                                    <Text style={[styles.forgotPasswordText, {color: 'rgba(0,0,0,0.8)'}]}> Jelentkezz
                                        be</Text>
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

export default RegisterScreen;
