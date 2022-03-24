// ** Import Core
import React, {useState} from 'react';
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
import { useNavigation } from '@react-navigation/native';
const SubscriberPackageCard = () => {
        const navigation = useNavigation();
  return (
          <TouchableOpacity >
    <View  style={styles.container}>
        {/* group 01 */}
        <View style={styles.group}>
        <Image source={IMAGES.woman1} style={styles.mainImage} />
        </View>


         {/* group 02 */}
         
        <View style={styles.group1}>

                <EmptyView style={{marginTop: dimensions.heightLevel1 * 0.3}}/>

                <Text numberOfLines={1} style={styles.cardHeaderText}>Boost Training BASIC</Text>

                <EmptyView style={{marginTop: dimensions.heightLevel1 * 0.8}}/>

                {/* video text group */}
                <View style={styles.middleTextContainer}>
                        <Image source={ICONS.movie} style={styles.icon}/>
                        <Text style={styles.pharagraphText}>17 videó</Text>
                </View>

                <EmptyView style={{marginTop: dimensions.heightLevel1 * 0.8}}/>

                {/* timer text group */}
                <View style={styles.middleTextContainer}>
                        <Image source={ICONS.timer} style={styles.icon}/>
                        <Text style={styles.pharagraphText}>139 perc</Text>
                </View>

                <EmptyView style={{marginTop: dimensions.heightLevel1 * 0.6}}/>

                <Text style={styles.ftHoText}>2990 Ft/hó</Text>

                {/* starts container */}
                <View style={styles.startContainer}>
                        <View style={styles.starImgContainer}>
                                <Image source={ICONS.starYellow} style={styles.starImage}  />
                                <Image source={ICONS.starYellow} style={styles.starImage}  />
                                <Image source={ICONS.starYellow} style={styles.starImage}  />
                                <Image source={ICONS.starYellow} style={styles.starImage}  />
                                <Image source={ICONS.starYellow} style={styles.starImage}  />
                        </View>

                        <Text style={styles.starText}>5.0</Text>

                </View>
        </View>
    </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
        container: {
                backgroundColor: '#F5F5F5',
                padding: dimensions.paddingLevel1,
                paddingVertical: dimensions.paddingLevel2,
                width: "100%",
                // height: dimensions.heightLevel10 * 0.95,
                borderRadius: 12,
                flexDirection: 'row',
                marginRight: dimensions.paddingLevel1,
                marginBottom: dimensions.paddingLevel1,
        },

        group: {
                width: "38%",
                justifyContent: 'center',
                alignItems: 'center',
        },

        group1: {
                width: "60%",
                paddingLeft: dimensions.paddingLevel1,
        },

        mainImage: {
                width: dimensions.widthLevel1 * 0.32,
                height: dimensions.widthLevel1 * 0.32,
                borderRadius: 12,
        },


        // group 01
        cardHeaderText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontMidMedium,
                color: colors.primary,
        },

        icon: {
                transform: [{scale: 1.5}],
                marginLeft: dimensions.paddingLevel1 * 0.4,
                marginRight: dimensions.paddingLevel1,
              width:15.5,
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

        ftHoText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontLarge,
                color: colors.primary,
                marginLeft: dimensions.paddingLevel1 * 0.4,
        },

        starImage: {
                marginRight: dimensions.paddingLevel1 * 0.3,
                transform: [{scale: 0.8}],
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

export default SubscriberPackageCard;
