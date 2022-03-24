// ** Import Core
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
// ** Import Images
import { IMAGES, ICONS } from '../assets/images';
// ** Import constant
import {
        fontSizes,
        fontFamilies,
        colors,
        basicStyles,
        dimensions,
        imageSizes,
} from '../configurations/constants';
import { storeTokenAuthAction } from '../redux/actions/authAction';
import EmptyView from './EmptyView';

const DrawerComponent = ({ navigation }) => {

        const dispatch = useDispatch();

        // ** function here
        const logOutHandler = () => {
                navigation.closeDrawer();
                dispatch(storeTokenAuthAction(null));
        }
        return (
                <View style={styles.container}>

                        <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

                        <View style={styles.imageContainer}>
                                <Image source={ICONS.logo} style={styles.image} />

                                <TouchableOpacity 
                                onPress={logOutHandler}
                                style={styles.logoutContainer}>
                                        <Image source={ICONS.logout} style={styles.logout} />
                                </TouchableOpacity>

                        </View>

                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                width: '100%',
                height: '100%',
                backgroundColor: colors.white,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                paddingHorizontal: dimensions.paddingLevel1,
                alignItems: 'center',
        },

        imageContainer: {
                width: '100%',
                alignItems: 'center',
        },

        image: {
                transform: [{ scale: 0.5 }],
        },

        logoutContainer: {
                backgroundColor: 'rgba(0,0,0,0.05)',
                borderRadius: 100,
        },

        logout: {
                transform: [{ scale: 0.5 }],
        },
});

export default DrawerComponent;
