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
import { IMAGES, ICONS } from '../../assets/images';
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
import TextField from '../../components/TextField';

const ForgetPasswordScreen = () => {
        return (
                <View style={styles.container}>
                        {/* upper body container */}
                        <View style={styles.upperBodyContainer}>
                                <Text style={styles.headerText}>Elfelejtetted a </Text>
                                <Text style={styles.headerText}>jelszavad? </Text>

                                <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

                                <Text style={styles.headerSubText}>Kérj emlékeztetőt!</Text>
                        </View>

                        <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />

                        {/*  body container */}
                        <View style={styles.bodyContainer}>
                                <Text style={styles.passwordText}>Add meg az email címed:</Text>

                                <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5 }} />

                                <TextField
                                        textFieldStyles={styles.textField}
                                        inputStyles={styles.input}
                                        placeholder="hello@reallygreatsite.com"
                                />

                                <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />

                                <ListButton
                                        name="  Kérem az emlékeztetőt  "
                                        customButtonText={styles.buttonText}
                                />

                                <EmptyView style={{ marginTop: dimensions.heightLevel7 }} />

                                {/* logo box */}
                                <View style={styles.logoBox}>
                                        <Image source={ICONS.logo} style={styles.logo} />
                                </View>

                                <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />

                                <Text style={styles.footerText}>www.simonszimonetta.hu</Text>

                        </View>


                </View>
        );
};

const styles = StyleSheet.create({
        container: {
                width: dimensions.fullWidth,
                height: dimensions.fullHeight,
                backgroundColor: colors.white,
        },

        upperBodyContainer: {
                width: "100%",
                height: dimensions.heightLevel10 * 1.4,
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
        },

        headerText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontXXXXLarge,
                color: colors.white,
        },

        headerSubText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontXXXXLarge * 0.5,
                color: colors.white,
        },

        bodyContainer: {
                width: "100%",
                paddingHorizontal: dimensions.paddingLevel3,
                alignItems: 'center',

        },

        passwordText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontSmall,
                color: 'rgba(0,0,0,0.6)',
                textTransform: 'uppercase',
                alignSelf: 'flex-start',
                marginLeft: dimensions.paddingLevel5,
        },

        textField: {
                height: dimensions.heightLevel3,
                borderRadius: 50
        },

        input: {
                fontSize: fontSizes.fontSmall,
                paddingLeft: dimensions.paddingLevel2,
                fontFamily: fontFamilies.MontRegular,
                color: colors.black,
                fontWeight: "600"
        },

        buttonText: {
                fontFamily: fontFamilies.OpenSansRegular,
                color: colors.white,
                fontSize: fontSizes.fontMedium,
                paddingLeft: dimensions.paddingLevel3,
                paddingRight: dimensions.paddingLevel3
        },


        logoBox: {
                paddingHorizontal: dimensions.paddingLevel2,
                paddingVertical: dimensions.paddingLevel2,
                backgroundColor: colors.primary,
                borderRadius: 5,
        },

        logo: {
                width: dimensions.widthLevel11,
                height: dimensions.heightLevel3 * 1.5,
                transform: [{scale: 1}]
        },

        footerText: {
                fontFamily: fontFamilies.OpenSansRegular,
                color: colors.black,
                fontSize: fontSizes.fontMedium,
        },
})

export default ForgetPasswordScreen;
