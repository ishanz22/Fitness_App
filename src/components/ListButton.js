import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {colors, dimensions, fontFamilies, fontSizes} from '../configurations/constants';

const ListButton = ({
                        name = null,
                        onPress = () => {},
                        disabled = false,
                        customButton = {},
                        customButtonText = {}
                    }) => {
    return (
        disabled ?
            <TouchableWithoutFeedback>
                <View style={Object.keys(customButton).length === 0 || disabled ? styles.button2 : customButton}>
                    <Text
                        style={Object.keys(customButtonText).length === 0 || disabled ? styles.buttonText2 : customButtonText}>{name}</Text>
                </View>
            </TouchableWithoutFeedback>
            :
            <TouchableOpacity onPress={onPress}>
                <View style={Object.keys(customButton).length === 0 ? styles.button : customButton}>
                    <Text
                        style={Object.keys(customButtonText).length === 0 ? styles.buttonText : customButtonText}>{name}</Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingVertical: dimensions.paddingLevel3 / 2,
        paddingHorizontal: dimensions.paddingLevel4 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
    },
    button2: {
        borderRadius: 10,
        paddingVertical: dimensions.paddingLevel3 / 2,
        paddingHorizontal: dimensions.paddingLevel4 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',

    },
    buttonText: {
        fontFamily: fontFamilies.OpenSansRegular,
        color: colors.white,
        fontSize: fontSizes.fontLarge,
        paddingLeft: dimensions.paddingLevel3,
        paddingRight: dimensions.paddingLevel3
    },

    buttonText2: {
        fontFamily: fontFamilies.OpenSansRegular,
        color: 'rgba(0,0,0,0.3)',
        fontSize: fontSizes.fontLarge,
        paddingLeft: dimensions.paddingLevel3,
        paddingRight: dimensions.paddingLevel3
    }
})

export default ListButton;
