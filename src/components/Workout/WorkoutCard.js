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

const WorkoutCard = ({goNextScreen}) => {
        // ** state here
        const [favourite, setFavourite] = useState(false);

        // ** function here
        const favouriteHandler = () => {
                setFavourite(fav => !fav);
        };



        return (
                <TouchableOpacity style={styles.container} onPress={goNextScreen}>
                        {/* group 01 */}
                        <View style={styles.group}>
                                <Image source={IMAGES.woman2} style={styles.mainImage} />
                        </View>

                        {/* group 02 */}
                        <View style={styles.group1}>
                                <TouchableOpacity onPress={favouriteHandler}>
                                        <Image source={favourite ? ICONS.redHeart: ICONS.greenHeart} style={styles.redHeart}  />
                                </TouchableOpacity>

                                <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.3 }} />

                                <Text numberOfLines={2} style={styles.cardHeaderText}>Könnyű edzésKönnyű edzésedzésKönnyű edzés</Text>

                                <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5 }} />

                                {/* video text group */}
                                <View style={styles.middleTextContainer}>
                                        <Image source={ICONS.dumble} style={styles.icon} />
                                        <Text style={styles.pharagraphText}>18 videó</Text>
                                </View>

                                <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.4 }} />

                                {/* timer text group */}
                                <View style={styles.middleTextContainer}>
                                        <Image source={ICONS.timer} style={styles.icon} />
                                        <Text style={styles.pharagraphText}>139 perc</Text>
                                </View>

                                <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.6 }} />

                                {/* starts container */}
                                <View style={styles.startContainer}>
                                        <View style={styles.starImgContainer}>
                                                <Image source={ICONS.starYellow} style={styles.starImage} />
                                                <Image source={ICONS.starYellow} style={styles.starImage} />
                                                <Image source={ICONS.starYellow} style={styles.starImage} />
                                                <Image source={ICONS.starYellow} style={styles.starImage} />
                                                <Image source={ICONS.starYellow} style={styles.starImage} />
                                        </View>

                                        <Text style={styles.starText}>5.0</Text>

                                </View>
                        </View>

                </TouchableOpacity>
        );
};

const styles = StyleSheet.create({
        container: {
                backgroundColor: '#F5F5F5',
                padding: dimensions.paddingLevel1,
                width: "100%",
                // height: dimensions.heightLevel10 * 0.95,
                borderRadius: 12,
                flexDirection: 'row',
                marginRight: dimensions.paddingLevel1,
                marginBottom: dimensions.paddingLevel1,
        },

        group: {
                width: "40%",
                justifyContent: 'center',
                alignItems: 'center',
        },

        group1: {
                width: "60%",
                paddingLeft: dimensions.paddingLevel1,
        },

        mainImage: {
                width: dimensions.widthLevel1 * 0.33,
                height: dimensions.widthLevel1 * 0.33,
                borderRadius: 12,
        },

        // group 01
        redHeart: {
                transform: [{ scale: 1.3 }],
                alignSelf: 'flex-end',
                position: "absolute",
                right: dimensions.paddingLevel1 * 0.2,
                top: dimensions.paddingLevel1 * 0.2,
                zIndex: 1,
                width:18,
                height:18
        },

        cardHeaderText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontMedium,
                color: colors.primary,
                width: "90%",
                fontWeight: '600'
        },

        icon: {
                transform: [{ scale: 1 }],
                marginLeft: dimensions.paddingLevel1 * 0.4,
                marginRight: dimensions.paddingLevel1,
                width:16,
                height:16
        },

        middleTextContainer: {
                flexDirection: 'row',
                alignItems: 'center',
        },

        pharagraphText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontSmallPlus,
                color: colors.black,
        },

        starImage: {
                marginRight: dimensions.paddingLevel1 * 0.3,
                transform: [{ scale: 0.8 }],
                width:17,
                height:17
        },

        startContainer: {
                marginLeft: dimensions.paddingLevel1 * 0.4,
                flexDirection: 'row',
                alignItems: 'flex-end'
        },

        starImgContainer: {
                flexDirection: 'row',
                width: "60%",
        },

        starText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontSmallPlus,
                color: colors.black,
        },


})

export default WorkoutCard;
