// ** Import Core
import React from 'react';
import {
        Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
// ** Import Images
import { ICONS, IMAGES } from '../../assets/images';
// ** Import constant
import {
        colors, dimensions, fontFamilies, fontSizes
} from '../../configurations/constants';
// ** Import components
import EmptyView from '../EmptyView';

const FavouriteItem = () => {
        return (
                <View style={styles.container}>
                        {/* image container */}
                        <View style={styles.imageContainer}>
                                <Image source={IMAGES.woman3} style={styles.image} />
                        </View>

                        <View style={styles.textContainer}>

                        <EmptyView style={{ marginTop: dimensions.heightLevel1}} />

                                <Text numberOfLines={1} style={styles.headerText}>Jóga videó</Text>

                                <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.4}} />

                                <View style={styles.reviewRow}>
                                       <View  style={styles.rateContainer}>
                                       <Image source={ICONS.starYellow} style={styles.iconStar} />
                                        <Text style={styles.reviewRowText}>4.8 (4.4k)</Text>
                                       </View>
                                        <Image source={ICONS.horizontalLine} style={styles.iconLine} />
                                        <Text style={styles.reviewRowText}>45 perc</Text>
                                </View>

                                <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.4}} />

                                <Text style={styles.subText}>Rövid jóga gyakorlatok kezdőknek!</Text>

                                <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.65}} />

                                <TouchableOpacity style={styles.footerContainer}>
                                        <Text style={styles.footerText}>Megnézem</Text>
                                        <Image source={ICONS.greenArrow} style={styles.iconGreenArrow} />
                                </TouchableOpacity>
                        </View>
                </View>
        );
}

const styles = StyleSheet.create({
        container: {
                width: '100%',
                flexDirection: 'row',
                padding: 1,
                backgroundColor: 'rgba(0,0,0,0.05)',
                borderRadius: 12,
                marginBottom: dimensions.paddingLevel1,

        },

        imageContainer: {
                width: dimensions.widthLevel1 * 0.35,
                height: dimensions.widthLevel1 * 0.35,
                justifyContent: 'center',
                alignItems: 'center',
                padding: dimensions.paddingLevel2,
                borderRadius: 12,


        },

        image: {
                width: "100%",
                height: "100%",
        },

        textContainer: {
                width: dimensions.widthLevel1 * 0.55,
        },

        headerText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontMedium,
                color: colors.black,
        },
        
        reviewRow: {
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
        },

        reviewRowText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontSmall,
                color: colors.black,
        },

        rateContainer: {
               flexDirection: 'row',
               alignItems: 'center',
        },

        iconStar: {
                transform: [{scale: 0.8}],
                marginRight: dimensions.paddingLevel1,
                height:20,
                width:20
        },

        iconLine: {
                transform: [{scaleX: 2}],
        },


        subText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontSmall,
                color: colors.black,
        },

        footerContainer: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
        },

        footerText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontSmallPlus,
                color: colors.primary,
        },

        iconGreenArrow: {
                transform: [{scale: 0.8}, {rotate: '180deg'}],
                width:18,
                height:18
        },


});

export default FavouriteItem;
