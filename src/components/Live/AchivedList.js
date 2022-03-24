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
import ListButton from '../ListButton';

const AchivedList = ({ isAchive = false, title, date, duration }) => {
        return (
                <View style={styles.container}>
                        {/* image container ++ */}
                        <View style={styles.group}>
                                <Image source={IMAGES.woman3} style={styles.mainImage} />
                        </View>

                        {/* text container ++ */}
                        <View style={styles.group1}>
                                <Text numberOfLines={1} style={styles.mainText}>{title}</Text>

                                <View style={styles.subTextContainer}>
                                        {/* 2022.02.18. 17:00 */}
                                        <Text style={styles.subText}>{date}</Text>
                                        <Text style={[styles.subText, { fontWeight: 'bold' }]}>{duration} perc</Text>
                                </View>
                        </View>

                        {/* button container ++ */}
                        <View style={styles.group2}>
                                <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>{isAchive ? "Megnézem" : "Csatlakozom"}</Text>
                                </TouchableOpacity>
                        </View>
                </View>
        );
};

const styles = StyleSheet.create({
        container: {
                width: "100%",
                padding: dimensions.paddingLevel1,
                backgroundColor: '#F5F5F5',
                flexDirection: 'row',
                borderRadius: 8,
                marginBottom: dimensions.paddingLevel1,
        },

        group: {
                width: '20%',
                justifyContent: 'center',
                alignItems: 'center',
        },

        group1: {
                width: '58%',
        },

        group2: {
                width: '23%',
                justifyContent: 'center',
                alignItems: 'center',

        },

        mainImage: {
                borderRadius: 100,
                width: dimensions.paddingLevel7,
                height: dimensions.paddingLevel7,
        },

        mainText: {
                fontSize: fontSizes.fontMedium,
                fontFamily: fontFamilies.OpenSansRegular,
        },

        subTextContainer: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: dimensions.paddingLevel1 * 0.8,
        },

        subText: {
                fontSize: fontSizes.fontSmallPlus,
                fontFamily: fontFamilies.OpenSansRegular,
        },

        button: {
                paddingVertical: dimensions.paddingLevel2,
                paddingHorizontal: dimensions.paddingLevel1 ,
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
        },

        buttonText: {
                fontSize: fontSizes.fontSmall * 0.8,
                fontFamily: fontFamilies.MontRegular,
                color: colors.white,
        },


})

export default AchivedList;
