// ** Import Core
import React, { useState, useEffect } from 'react';
import {
        View,
        Text,
        StyleSheet,
        Image,
        TouchableOpacity,
        ScrollView
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
        getShadowsV2,
        getShadowsV1,
} from '../../configurations/constants';
// ** Import components
import EmptyView from '../../components/EmptyView';
import ListButton from '../../components/ListButton';
import TextField from '../../components/TextField';
import FutherSettingItem from '../../components/profile/FutherSettingItem';

const FutherSettingScreen = ({navigation}) => {
        // ** @fakeData
        const fakeData = [
                { id: 1, name: "A" },
                { id: 2, name: "B" },
                { id: 3, name: "C" },
                { id: 4, name: "D" },
                { id: 5, name: "E" },
        ];

        // ** useState and useEffect
        const [isOpen, setIsOpen] = useState(false);

        // ** function here
        const menuHandler = () => {
                navigation?.openDrawer();
                setIsOpen(false);
        }

        const updateHandler = () => {
                // TODO: do something
                setIsOpen(false);
        }

        const backButtonHandler = () => {
                setIsOpen(false);
                navigation.goBack();
        }

        const DropdownItem = () => {
                return (
                        <TouchableOpacity onPress={() => {
                                setIsOpen(false)
                        }}
                                style={styles.dropDownItem}>
                                <Text style={styles.dropDownItemText}>Item ... </Text>
                        </TouchableOpacity>
                )
        }

        return (
                <View style={styles.container}>
                        {/*  ** hide container**   */}
                        {isOpen && <TouchableOpacity
                                onPress={() => {
                                        setIsOpen(false)
                                }}
                                style={styles.hideContainer} />}


                        {/* header ++*/}
                        <Image source={IMAGES.topBubbleDecoration} style={styles.topBubbleDecoration} />
                        {/* menu icon */}
                        <TouchableOpacity onPress={menuHandler} style={styles.menuIconContainer}>
                                <Image source={ICONS.menu} style={styles.menuIcon} />
                        </TouchableOpacity>

                        <View style={styles.headerTextContainer}>
                                <Text style={styles.headerText}>További</Text>
                                <Text style={styles.headerText}>Beállítások</Text>
                        </View>
                        <TouchableOpacity style={styles.backButton} onPress={backButtonHandler} >
                                <Image source={ICONS.greenArrow} style={styles.backButtonIcon} />
                        </TouchableOpacity>
                        <View style={styles.headerLine}></View>

                        {/* body ++ */}
                        <View style={styles.bodyContainer}>
                                <FutherSettingItem name="PUSH Értesítések" />
                                <FutherSettingItem name="Kedvezmények/Akciók" />
                                <FutherSettingItem name="Előfizetéssel kapcsolatos" />
                                <FutherSettingItem name="Napi emlékeztetők" />



                                <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />

                                <View style={styles.middleContainer}>
                                        {/* Pause between exercises text */}
                                        <View>
                                                <Text style={styles.pauseText}>Szünet a gyakorlatok között:</Text>
                                        </View>

                                        <View>
                                                <TouchableOpacity
                                                        style={styles.dropdownContainer}
                                                        onPress={() => setIsOpen(!isOpen)}
                                                >
                                                        <Text>15 mp</Text>
                                                        <Image source={ICONS.blackArrowHead} style={styles.blackArrowHeadIcon} />
                                                </TouchableOpacity>

                                                <View>
                                                        {isOpen &&
                                                                <ScrollView style={styles.dropdownBodyContainer}>
                                                                        <DropdownItem />
                                                                        <DropdownItem />
                                                                        <DropdownItem />
                                                                        <DropdownItem />
                                                                        <DropdownItem />
                                                                        <DropdownItem />
                                                                </ScrollView>
                                                        }
                                                </View>
                                        </View>
                                </View>
                        </View>

                        {/* footer */}
                        <View style={styles.footerContainer}>
                                <ListButton
                                        onPress={updateHandler}
                                        name="  FRISSÍTÉS  "
                                        customButtonText={styles.buttonText}
                                />
                        </View>

                </View>
        );
};

const styles = StyleSheet.create({
        hideContainer: {
                height: dimensions.fullHeight,
                width: dimensions.fullWidth,
                backgroundColor: colors.transfarent,
        },

        container: {
                height: dimensions.fullHeight,
                width: dimensions.fullWidth,
                backgroundColor: colors.white,
        },

        topBubbleDecoration: {
                position: 'absolute',
                top: dimensions.paddingLevel2 * 0.6,
                left: dimensions.paddingLevel2 * 0.45,
                transform: [{ scale: 1.2 }],
                opacity: 0.95,
        },

        menuIconContainer: {
                position: 'absolute',
                top: dimensions.heightLevel1 * 0.5,
                left:  0,
                width: dimensions.widthLevel12 /2.3,
                transform: [{scale: 0.5}],
        },

        menuIcon: {
                // nothing
        },

        headerTextContainer: {
                position: 'absolute',
                top: dimensions.paddingLevel3,
                right: dimensions.paddingLevel3,
        },

        headerText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontLarge,
                color: colors.black,
                textAlign: 'right',
        },

        headerLine: {
                position: 'absolute',
                top: dimensions.paddingLevel10,
                right: dimensions.paddingLevel3,
                borderBottomColor: colors.primary,
                width: dimensions.widthLevel11 * 1.1,
                borderBottomWidth: 1,
        },

        backButton: {
                position: 'absolute',
                top: dimensions.paddingLevel3 * 1,
                right: dimensions.widthLevel12 * 1.1,
                padding: dimensions.paddingLevel1,
                // backgroundColor: 'red'
        },

        backButtonIcon: {
                width: dimensions.widthLevel12 * 0.14,
                height: dimensions.widthLevel12 * 0.14,
        },

        bodyContainer: {
                width: "100%",
                position: 'absolute',
                top: dimensions.heightLevel10 * 0.95,
                paddingHorizontal: dimensions.paddingLevel3,
        },

        middleContainer: {
                width: "100%",
                paddingVertical: dimensions.paddingLevel1,
                // backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
        },

        pauseText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontSmallPlus,
                color: colors.black,
                width: dimensions.widthLevel1 * 0.5,
        },

        dropdownContainer: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.1)',
                padding: dimensions.paddingLevel1,
                paddingHorizontal: dimensions.paddingLevel3,
                width: dimensions.widthLevel1 * 0.3,
                borderRadius: 8,
                alignSelf: 'flex-end',
        },

        blackArrowHeadIcon: {
                width: dimensions.paddingLevel1,
        },

        dropdownBodyContainer: {
                width: dimensions.widthLevel1 * 0.4,
                backgroundColor: colors.white,
                padding: 1,
                marginTop: dimensions.paddingLevel1,
                maxHeight: dimensions.heightLevel10,
                borderRadius: 8,
                ...getShadowsV1
        },

        dropDownItem: {
                // backgroundColor: "red",
                padding: dimensions.paddingLevel1,
                marginBottom: 5,
                borderBottomColor: 'rgba(0,0,0,0.1)',
                borderBottomWidth: 1,
        },

        dropDownItemText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontSmallPlus,
                color: colors.black,
                textAlign: 'center',

        },

        buttonText: {
                fontFamily: fontFamilies.OpenSansBold,
                color: colors.white,
                fontSize: fontSizes.fontMedium,
                paddingLeft: dimensions.paddingLevel3,
                paddingRight: dimensions.paddingLevel3
        },

        footerContainer: {
                position: 'absolute',
                width: '100%',
                alignSelf: 'center',
                bottom: dimensions.heightLevel8,
                paddingHorizontal: dimensions.paddingLevel3,
        },

});

export default FutherSettingScreen;

