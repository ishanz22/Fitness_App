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

const RecommendVideoCard = () => {
  return (
    <View style={styles.container}>
            {/* group 01 */}
                <View style={styles.group}>
                        {/* headerText: 30 */}
                        <Text numberOfLines={2} style={styles.headerText}>Egyes vidi</Text>

                        <EmptyView style={{marginTop: dimensions.heightLevel1 * 0.5}}/>

                         {/* ~/5 point text */}
                        <View style={styles.pointTextGroup}>
                                <Image source={ICONS.starYellow} style={styles.starImage}  />
                                <Text style={styles.pointText}>5.0 Értékelés</Text>
                        </View>

                        <EmptyView style={{marginTop: dimensions.heightLevel1 * 0.3}}/>

                        {/* headerText: max text length - 70 */}
                        <Text numberOfLines={3} style={styles.footerText}>Boost Training,Boost Training, Basic csomag része</Text>
                </View>


            {/* group 02 */}
                <View style={styles.group1}>
                       <Image source={ICONS.redHeart} style={styles.redHeart} />

                        {/* middle main Image */}
                        <View style={styles.middleImageContainer}>
                               { true ?
                                <Image source={IMAGES.woman1} style={styles.woman} />
                               :<Text style={styles.missingText}>No Image</Text>}
                        </View>

                        {/* I'll see text */}
                        <TouchableOpacity style={styles.seeContainer} onPress={()=> {}}>
                          <Text style={styles.seeText}>Megnézem</Text>
                          <Image source={ICONS.arrowWhite} style={styles.arrow} />
                        </TouchableOpacity>
                </View>
    </View>
  );
};

const styles = StyleSheet.create({
        container: {
                backgroundColor: colors.primary,
                padding: dimensions.paddingLevel1,
                width: dimensions.widthLevel6,
                // height: dimensions.heightLevel10 * 0.95,
                borderRadius: 12,
                flexDirection: 'row',
                marginRight: dimensions.paddingLevel1,
        },

        group: {
          width: "60%",
        },

        group1: {
          width: "40%",
        //   backgroundColor: "yellow"
        },

        headerText: {
                fontFamily: fontFamilies.OpenSansBold,
                fontSize: fontSizes.fontMidMedium,
                color: colors.white,
        },


        pointTextGroup: {
                flexDirection: 'row' ,
                width: "100%",
                alignItems: "center"
        },

        starImage: {
                marginRight: dimensions.paddingLevel1,
                width:19,
                height:19

        },

        pointText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontMedium,
                color: colors.white,
        },

        footerText: {
                fontFamily: fontFamilies.OpenSansBold,
                fontSize: fontSizes.fontSmallPlus,
                color: colors.white,
        },

        // group 02
        redHeart: {
                transform: [{scale: 1.4}],
                alignSelf: 'flex-end',
                position: "absolute",
                zIndex: 1,
                height:18,
                width:18
        },

        middleImageContainer: {
                width: dimensions.widthLevel1 * 0.25,
                height: dimensions.widthLevel1 * 0.25,
                borderWidth: 3,
                borderColor: colors.white,
                borderRadius: 8,
                alignSelf: 'center',
                marginTop: dimensions.paddingLevel1,
                backgroundColor: 'rgba(255,255,255,0.2)',
                justifyContent: "center",
                alignItems: "center",
        },

        seeContainer: {
                width: '100%',
                alignItems: 'flex-end',
        },

        seeText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontSmallPlus,
                color: colors.white,
                marginTop: dimensions.paddingLevel1 * 0.5,
        },

        arrow: {
                transform: [{scale: 1.5}],
                marginRight: dimensions.paddingLevel1,
        },

        missingText: {
        //      nothing
        },

        woman: {
                width: "100%",
                height: "100%",
        },
})

export default RecommendVideoCard;
