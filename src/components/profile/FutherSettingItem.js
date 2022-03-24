// ** Import Core
import React, { useState } from 'react';
import {
        View,
        Text,
        StyleSheet,
        Image,
        ImageBackground,
        TouchableOpacity,
        FlatList
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
import EmptyView from '../EmptyView';
// ** external components
import ToggleSwitch from 'toggle-switch-react-native';


const FutherSettingItem = ({ name = "", isEnabled = false, setIsEnabled = () => { } , isSeperator=true}) => {
        return (
                <View style={[styles.container, {
                        borderBottomColor: colors.primary,
                        borderBottomWidth: isSeperator ? 1 : 0,
                }]}>
                        <Text style={styles.text}>{name}</Text>

                        <ToggleSwitch
                                isOn={isEnabled}
                                onColor={colors.primary}
                                offColor={colors.primary}
                                // label="Example label"
                                labelStyle={{ color: "black", fontWeight: "900" }}
                                size="medium"
                                onToggle={isOn => {
                                        setIsEnabled(isOn)
                                }}
                        />
                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                width: "100%",
                paddingVertical: dimensions.paddingLevel1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: dimensions.paddingLevel1,
                borderBottomColor: colors.primary,
                borderBottomWidth: 1,
                marginTop: dimensions.paddingLevel1,
        },

        text: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontMedium,
                color: colors.black,
                textAlign: 'right',
        },
});

export default FutherSettingItem;
