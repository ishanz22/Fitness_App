// ** Import Core
import React from 'react';
import {
        View,
        Text,
        StyleSheet,
        Image,
        TouchableOpacity,
        ScrollView,
        BackHandler
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
import EmptyView from '../../components/EmptyView';
import ListButton from '../../components/ListButton';
// ** Import external npm library
import LinearGradient from 'react-native-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';

const RecipeSubScreen = ({ navigation }) => {

        // ** @fakeData
        const fakeData = [
                { id: 1, name: "A" },
                { id: 2, name: "B" },
                { id: 3, name: "C" },
                { id: 4, name: "D" },
           
        ];

        // ** back button handler here
        useFocusEffect(
                React.useCallback(() => {
                  const onBackPress = () => {
                        navigation.navigate('Receptek');
                      return true;

                  };

                  BackHandler.addEventListener('hardwareBackPress', onBackPress);

                  return () =>
                  BackHandler.removeEventListener('hardwareBackPress', onBackPress);
                }, [])
              );


        // ** function here
        const menuHandler = () => {
                navigation?.openDrawer();
        };

        const backHandler = () => {
                // navigation.navigate('stackNavigation',{screen: 'RecipeSubScreen'});
                navigation.navigate('Receptek',{screen: 'RecipeScreen'});
        };

        const favouriteHandler = () => {

        };

        return (
                <View style={styles.container}>
                        {/* menu container ++ */}
                        <View style={styles.menuContainer}>
                                {/* menu icon */}
                                <TouchableOpacity onPress={menuHandler} style={styles.menuIconContainer}>
                                        <Image source={ICONS.menu} style={styles.menuIcon2} />
                                </TouchableOpacity>


                                <View style={styles.menuAndBackContainer}>
                                        {/* menu icon */}
                                        <TouchableOpacity onPress={backHandler} style={styles.menuIconContainer}>
                                                <Image source={ICONS.whiteArrow} style={[styles.menuIcon, { transform: [{ scale: 0.9 }, { rotate: '180deg' }] }]} />
                                        </TouchableOpacity>

                                        {/* menu icon */}
                                        
                                </View>
                        </View>

                        {/* main image section */}
                        <Image source={IMAGES. woman1} style={styles.mainImage} />

                        {/* main Body container: text container */}
                        <View style={styles.mainTextContainer}>

                                <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />


                                <View style={styles.headerTextContainer}>
                                        <Text numberOfLines={1} style={styles.headerTitle}>Boost training Recept</Text>
                                </View>

                                <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5 }} />

                                <View style={styles.headerTextContainer}>
                

                                        <Text style={styles.headerSubText}>Lorem Name</Text>
                                </View>


                                <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

                                <ScrollView style={styles.scrollView}>
                                        {/* brief description about food */}
                                        <Text style={styles.briefDescription}>
                                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry's standard Ipsum, when an unknown printer 
                                        </Text>

                                        <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

                                        {/* ingrident */}

                                        <View>
                                                {
                                                        fakeData && fakeData.map((item, index) => (
                                                                <View key={index}>
                                                                        <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.3 }} />

                                                                        <View style={styles.ingridentListContainer}>
                                                                                <Text numberOfLines={1} style={styles.ingridentSubText}>Zoom shedule</Text>
                                                                                <Text numberOfLines={1}  style={[styles.ingridentSubText, { width: "40%" }]}>  mennyiség: 2 kg</Text>
                                                                        </View>
                                                                </View>
                                                        ))
                                                }
                                        </View>

                                        <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

                                        {/* preperation */}
                                        {/* <Text style={styles.ingridentText}>Elkészítése:</Text> */}

                                        <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5 }} />

                                        {/* preperation description*/}
                                        {/* <Text style={styles.briefDescription}>
                                                Az elkészítés menete és rövid leírása.
                                        </Text> */}
                                        <View style={styles.footerContainer}>
                                <ListButton
                                        // onPress={updateHandler}
                                        name="  Subscribe"
                                        customButtonText={styles.buttonText}
                                />
                        </View>

                                </ScrollView>

                                <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />

                        </View>


                        {/* <EmptyView style={{marginTop: dimensions.heightLevel1}}/> */}




                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                width: dimensions.fullWidth,
                height: dimensions.fullHeight,
                backgroundColor: colors.white,
        },

        menuContainer: {
                width: '100%',
                height: dimensions.heightLevel5,
                backgroundColor: colors.primary,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                justifyContent: 'space-between',
                zIndex: 100,
        },


            menuIcon2: {
                // width: '100%',
                transform: [{ scale: 0.5 }],
            },



        menuIconContainer: {
                width: dimensions.widthLevel12 / 2.3,
                alignItems: 'center',
                justifyContent: 'center',
        },

        menuIcon: {
                transform: [{ scale: 1.2 }],
                width:30,
                height:30
        },

        menuAndBackContainer: {
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: dimensions.paddingLevel1,
        },

        mainImage: {
                top: (- dimensions.paddingLevel1 * 0.6),
                width: "100%",
                height: dimensions.fullWidth,
                resizeMode: "stretch",
        },

        mainTextContainer: {
                width: "100%",
                height: dimensions.heightLevel10 * 2.5,
                backgroundColor: colors.white,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                position: 'absolute',
                bottom: 0,
                zIndex: 100,
                paddingHorizontal: dimensions.paddingLevel3,
        },

        headerTextContainer: {
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
        },

        headerTitle: {
                width: '80%',
                fontSize: fontSizes.fontXLarge,
                fontFamily: fontFamilies.OpenSansExtraBold,
                color: colors.black,
        },

        headerTimingText: {
                width: '20%',
                fontSize: fontSizes.fontMediumPlus,
                fontFamily: fontFamilies.OpenSansRegular,
                color: colors.black,
                textAlign: 'right',
        },
        headerSubText: {
                fontSize: fontSizes.fontLarge,
                fontFamily: fontFamilies.OpenSansRegular,
                color: colors.black,

        },

        starIconContainer: {
                flexDirection: 'row',
        },

        starIcon: {
                marginRight: dimensions.paddingLevel1 * 0.5,
                height:18,
                width:18
        },

        scrollView: {
                width: '100%',
        },

        briefDescription: {
                fontSize: fontSizes.fontMedium,
                fontFamily: fontFamilies.OpenSansRegular,
                color: colors.black,
        },

        ingridentText: {
                fontSize: fontSizes.fontMediumPlus,
                fontFamily: fontFamilies.OpenSansBold,
                color: colors.black,
        },


        ingridentListContainer: {
                width: "100%",
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
        },

        ingridentSubText: {
                fontSize: fontSizes.fontMedium,
                fontFamily: fontFamilies.OpenSansRegular,
                color: colors.black,
                width: "60%",
        },
   
});

export default RecipeSubScreen;
