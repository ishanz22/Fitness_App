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


const RecipeCard = ({goRecipeSubScreen}) => {

        // ** state here
        const [favourite, setFavourite] = useState(favourite);

        // ** function here
        const favouriteHandler = () => {
                setFavourite(fav => !fav);
        };

        

        return (
                <View style={styles.container}>
                        {/* favourite */}
                        <TouchableOpacity
                                style={styles.heartContainer}
                                onPress={favouriteHandler}
                        >
                                <Image source={favourite ? ICONS.redHeart : ICONS.greenHeart} style={styles.heart} />
                        </TouchableOpacity>

                        <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.1 }} />

                        <Image source={IMAGES.food} style={styles.mainImage} />

                        <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />




                        <View style={styles.row}>
                                {/* Recipe title */}
                                <Text numberOfLines={1} style={[styles.rowText, { fontSize: fontSizes.fontSmallPlus * 0.97, width: '70%' }]}>Recept 1</Text>
                                <Text style={styles.rowText}>35 perc</Text>
                        </View>

                        <View style={styles.row}>
                                {/* Recipe title */}
                                <Text style={styles.rowText}>200 kalóra</Text>

                                <TouchableOpacity style={styles.arrowButton} onPress={goRecipeSubScreen}>
                                        <Image source={ICONS.whiteArrow} style={styles.greenArrow} />
                                </TouchableOpacity>
                        </View>
                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                width: dimensions.widthLevel1 * 0.44,
                backgroundColor: 'rgba(0,0,0,0.05)',
                paddingVertical: dimensions.paddingLevel2,
                paddingHorizontal: dimensions.paddingLevel2,
                borderRadius: 12,
                alignItems: 'center',
                margin: dimensions.paddingLevel1,
        },

        mainImage: {
                width: dimensions.widthLevel1 * 0.40,
                height: dimensions.widthLevel1 * 0.40,
                borderRadius: 12,
        },

        heartContainer: {
                position: 'absolute',
                zIndex: 100,
                top: dimensions.paddingLevel1,
                right: dimensions.paddingLevel1,
        },

        heart: {
                transform: [{ scale: 1.3 }],
                width:22,
                height:22
        },

        row: {
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
        },

        rowText: {
                fontFamily: fontFamilies.MontRegular,
                fontSize: fontSizes.fontSmall * 0.97,
                // color: colors.black,
        },

        greenArrow: {
                transform: [{ scaleX: 0.3 }, { scaleY: 0.5 }],
        },

        arrowButton: {
                backgroundColor: colors.primary,
                transform: [{ scaleY: 0.5 }],
                borderRadius: 5,
        },
});

export default RecipeCard;
