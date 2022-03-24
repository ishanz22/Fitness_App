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

const RelatedVideoCard = () => {
        // ** function here
        const menuHandler = () => {
                // TODO: do something
        }

        return (
                <TouchableOpacity onPress={menuHandler} style={styles.container}>
                        {/* Image container */}
                        <View style={styles.imageContainer}>
                                <Image source={IMAGES.woman3} style={styles.image} />
                        </View>

                        {/* text container */}
                        <View style={styles.textContainer}>
                                <Text numberOfLines={2} style={styles.headText}>Kapcsolódó 1 </Text>
                                <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5 }} />
                                <Text numberOfLines={3} style={styles.subText}>Egy mondatos leírás a videóról.</Text>
                        </View>
                </TouchableOpacity>
        );
};

const styles = StyleSheet.create({
        container: {
                width: "100%",
                height: dimensions.heightLevel7 * 1.1,
                flexDirection: 'row',
                backgroundColor: 'rgba(0,0,0,0.01)',
                borderRadius: 12,
                // alignItems: 'center',
                paddingVertical: dimensions.paddingLevel1,
                marginVertical: dimensions.paddingLevel1 * 0.3,
        },

        imageContainer: {
                width: '40%',
                height: dimensions.heightLevel6 * 1.2,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
        },

        image: {
                width: '90%',
                height: '100%',
                borderRadius: 12,
        },

        textContainer: {
                width: '60%',
                paddingHorizontal: dimensions.paddingLevel1,
        },

        headText: {
                fontFamily: fontFamilies.MontRegular,
                fontSize: fontSizes.fontMedium,
                color: colors.black,
                textDecorationLine: 'underline',
        },

        subText: {
                fontFamily: fontFamilies.MontRegular,
                fontSize: fontSizes.fontSmall,
                color: 'rgba(0,0,0,0.7)',
        },
})

export default RelatedVideoCard;
