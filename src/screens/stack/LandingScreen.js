// ** Import Core
import React from 'react';
import {
        View,
        Text,
        StyleSheet,
        Image,
        TouchableOpacity
} from 'react-native';
// ** Import Images
import {IMAGES, ICONS} from '../../assets/images';
// ** Import constant
import {
        fontSizes,
        fontFamilies,
        colors,
        basicStyles,
        dimensions,
        imageSizes,
} from '../../configurations/constants';
// ** Import components
import EmptyView from '../../components/EmptyView';
import ListButton from '../../components/ListButton';
// ** Import external npm library
import LinearGradient from 'react-native-linear-gradient';


 const LandingScreen = ({navigation}) =>{


        // ** function here
        const signInHandler = () => {
                //TODO: do something
                navigation.navigate('SignInScreen');
        }

        const signUpHandler = () => {
                //TODO: do something
                navigation.navigate('RegisterScreen');
        }

        return (
                <View style={styles.container}>
                        {/* background image */}
                        <Image source={IMAGES.fitnessWomen} style={styles.backgroundImage}/>



                        {/* logo box */}
                        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)', '#000']} style={styles.middleContainer}>
                            {/* logo box */}
                            <View style={styles.logoBox}>
                                <Image source={ICONS.logo} style={styles.logo}/>
                            </View>

                            <EmptyView  style={{marginTop: dimensions.heightLevel1}}/>

                               {/* 7 dat trial text */}
                               <Text style={styles.trial7DayText}>INGYENES PRÓBA</Text>
                               <Text style={styles.trial7DayText}>7 teljes napig!</Text>

                                <EmptyView  style={{marginTop: dimensions.heightLevel1}}/>

                                {/* package select text */}
                                <Text style={styles.selectPackageText}>A próba időszak után kiválaszthatod a számodra</Text>
                                <Text style={styles.selectPackageText}>legmegfelelőbb csomagot!</Text>

                                <EmptyView style={{marginTop: dimensions.heightLevel2}}/>

                                {/* sign up button */}
                                <ListButton
                                        name="    Kipróbálom    "
                                        onPress={signUpHandler}
                                />


                                <EmptyView style={{marginTop: dimensions.heightLevel2}}/>


                                {/* sign up texts */}
                                <Text style={styles.alreadyUserText}>Már van felhasználód?</Text>
                                <TouchableOpacity onPress={signInHandler}>
                                         <Text style={styles.signInText}>Bejelentkezem</Text>
                                </TouchableOpacity>

                                <EmptyView style={{marginTop: dimensions.heightLevel3}}/>
                        </LinearGradient>
                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                justifyContent: 'center',
                alignItems: 'center',
                width: dimensions.fullWidth,
                height: dimensions.fullHeight,
                backgroundColor: colors.white,
        },

        backgroundImage : {
                resizeMode: 'stretch',
                width: "100%",
                height: "100%",
        },

        middleContainer: {
                position: "absolute",
                bottom: 0,
                width: "100%",
                justifyContent: 'center',
                alignItems: 'center',
        },

        logoBox: {
                // position: 'absolute',
                top: 0,
                paddingHorizontal: dimensions.paddingLevel2,
                paddingVertical: dimensions.paddingLevel2,
                backgroundColor: colors.primary,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
        },

        logo: {
                width: dimensions.widthLevel11,
                height: dimensions.heightLevel3 * 1.5,
                transform: [{scale: 1}]
        },

        trial7DayText: {
                color: colors.white,
                fontSize: fontSizes.fontXXXXLarge * 1.2,
                fontFamily: fontFamilies.OpenSansExtraBold
        },

        selectPackageText: {
                color: colors.white,
                fontSize: fontSizes.fontMidMedium ,
                fontFamily: fontFamilies.OpenSansRegular
        },

        alreadyUserText: {
                color: colors.white,
                fontSize: fontSizes.fontLarge ,
                fontFamily: fontFamilies.OpenSansLight
        },

        signInText: {
                color: colors.primary,
                fontSize: fontSizes.fontLarge ,
                fontFamily: fontFamilies.OpenSansLight
        },

})

export default LandingScreen;
