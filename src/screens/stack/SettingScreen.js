// ** Import Core
import React, { useEffect, useState } from 'react';
import {
        Image, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
// ** Import Images
import { ICONS, IMAGES } from '../../assets/images';
// ** Import components
import EmptyView from '../../components/EmptyView';
import ListButton from '../../components/ListButton';
import TextField from '../../components/TextField';
// ** Import constant
import {
        colors, dimensions, fontFamilies, fontSizes, getShadowsV1
} from '../../configurations/constants';
// ** Import external componenets
import ToggleSwitch from 'toggle-switch-react-native';

const SettingScreen = ({navigation}) => {
        // ** @fakeData
        const fakeData = [
                { id: 1, name: "A" },
                { id: 2, name: "B" },
                { id: 3, name: "C" },
                { id: 4, name: "D" },
                { id: 5, name: "E" },
        ];

        // ** useState and useEffect
        const [isGenderOpen, setIsGenderOpen] = useState(false);
        const [isWeightOpen, setIsWeightOpen] = useState(false);
        const [isHeightOpen, setIsHeightOpen] = useState(false);
        const [isBirthOpen, setIsBirthOpen] = useState(false);
        const isDropdownOpen = isGenderOpen || isBirthOpen || isHeightOpen || isWeightOpen;
        const DROPDOWNENUMVALUE = {
                GENDER: 'GENDER',
                BIRTH: 'BIRTH',
                HEIGHT: 'HEIGHT',
                WEIGHT: 'WEIGHT',
        };
        const [isEnabled, setIsEnabled] = useState(true);


        useEffect(() => {


                // clean up
                return () => {
                        navigation.navigate('Profil');
          }
        }, [])



        // ** function here
        const allDropDownCloseHandler = (value) => {
                if (value == DROPDOWNENUMVALUE.GENDER) {
                        setIsBirthOpen(false);
                        setIsHeightOpen(false);
                        setIsWeightOpen(false);
                } else if (value == DROPDOWNENUMVALUE.BIRTH) {
                        setIsGenderOpen(false);
                        setIsHeightOpen(false);
                        setIsWeightOpen(false);
                } else if (value == DROPDOWNENUMVALUE.HEIGHT) {
                        setIsGenderOpen(false);
                        setIsBirthOpen(false);
                        setIsWeightOpen(false);
                } else if (value == DROPDOWNENUMVALUE.WEIGHT) {
                        setIsGenderOpen(false);
                        setIsBirthOpen(false);
                        setIsHeightOpen(false);
                } else {
                        setIsGenderOpen(false);
                        setIsBirthOpen(false);
                        setIsHeightOpen(false);
                        setIsWeightOpen(false);
                }
        };

        const menuHandler = () => {
                navigation?.openDrawer();
                allDropDownCloseHandler();
        };

        const backButtonHandler = () => {
                allDropDownCloseHandler();
                navigation.goBack();
        };

        const selectPhotoHandler = () => {
                // TODO: do something
                allDropDownCloseHandler();
        };

        const updateHandler = () => {
                // TODO: do something
                allDropDownCloseHandler();
        };

        const furtherSettingHandler = () => {
                allDropDownCloseHandler();
                navigation.navigate('FutherSettingScreen');
        };

        const DropdownItem = () => {
                return (
                        <TouchableOpacity onPress={allDropDownCloseHandler}
                                style={styles.dropDownItem}>
                                <Text style={styles.dropDownItemText}>Item ... </Text>
                        </TouchableOpacity>
                )
        };


        return (
                <View style={styles.container}>
                        {/*  ** hide container**   */}
                        {isDropdownOpen && <TouchableOpacity
                                onPress={allDropDownCloseHandler}
                                style={styles.hideContainer} />}


                        {/* header ++*/}
                        <Image source={IMAGES.topBubbleDecoration} style={styles.topBubbleDecoration} />
                        {/* menu icon */}
                        <TouchableOpacity onPress={menuHandler} style={styles.menuIconContainer}>
                                <Image source={ICONS.menu} style={styles.menuIcon} />
                        </TouchableOpacity>

                        <View style={{alignItems: 'center',}}>
                                <View style={styles.headerTextContainer}>
                                        <Text style={styles.headerText}>Beállítások</Text>
                                        <Text></Text>
                                </View>
                                <TouchableOpacity style={styles.backButton} onPress={backButtonHandler} >
                                        <Image source={ICONS.greenArrow} style={styles.backButtonIcon} />
                                </TouchableOpacity>
                        </View>

                        <View style={styles.headerLine}></View>

                        {/* body ++ */}
                        <View style={styles.bodyContainer}>

                                {/* header container */}
                                <View style={styles.bodyHeaderContainer}>
                                        <View style={styles.textFieldContainer}>
                                                <TextField
                                                        textFieldStyles={styles.inputContainer}
                                                        inputStyles={styles.input}
                                                        width={dimensions.widthLevel11}
                                                        value='Cahaya Dewi'
                                                        maxLength={50}
                                                />

                                                <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

                                                <TextField
                                                        textFieldStyles={styles.inputContainer}
                                                        inputStyles={styles.input2}
                                                        width={dimensions.widthLevel11}
                                                        value='@reallygreatsite'
                                                        maxLength={50}
                                                />
                                        </View>

                                        {/* image container */}
                                        <View style={styles.imageContainer}>
                                                <Image source={IMAGES.woman2} style={styles.image} />

                                                {/* select photo picker */}
                                                <TouchableOpacity style={styles.cameraContainer} onPress={selectPhotoHandler}>
                                                        <Image source={ICONS.camera} style={styles.cameraIcon} />
                                                </TouchableOpacity>
                                        </View>
                                </View>


                                <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />


                                {/* ROW 01 */}
                                <View style={styles.middleContainer}>
                                        {/* dropdown 01 */}
                                        <View>
                                                <TouchableOpacity
                                                        style={styles.dropdownContainer}
                                                        onPress={() => {
                                                                setIsGenderOpen(!isGenderOpen);
                                                                allDropDownCloseHandler(DROPDOWNENUMVALUE.GENDER);
                                                        }}
                                                >
                                                        <Text>15 mp</Text>
                                                        <Image source={ICONS.blackArrowHead} style={styles.blackArrowHeadIcon} />
                                                </TouchableOpacity>

                                                <View>
                                                        {isGenderOpen &&
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

                                        {/* dropdown 02 */}
                                        <View>
                                                <TouchableOpacity
                                                        style={styles.dropdownContainer}
                                                        onPress={() => {
                                                                setIsBirthOpen(!isBirthOpen);
                                                                allDropDownCloseHandler(DROPDOWNENUMVALUE.BIRTH)
                                                        }}
                                                >
                                                        <Text>15 mp</Text>
                                                        <Image source={ICONS.blackArrowHead} style={styles.blackArrowHeadIcon} />
                                                </TouchableOpacity>

                                                <View>
                                                        {isBirthOpen &&
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


                                {/* ROW 01 */}
                                <View style={styles.middleContainer}>
                                        {/* dropdown 01 */}
                                        <View>
                                                <TouchableOpacity
                                                        style={styles.dropdownContainer}
                                                        onPress={() => {
                                                                setIsHeightOpen(!isHeightOpen);
                                                                allDropDownCloseHandler(DROPDOWNENUMVALUE.HEIGHT)
                                                        }}
                                                >
                                                        <Text>15 mp</Text>
                                                        <Image source={ICONS.blackArrowHead} style={styles.blackArrowHeadIcon} />
                                                </TouchableOpacity>

                                                <View>
                                                        {isHeightOpen &&
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

                                        {/* dropdown 02 */}
                                        <View>
                                                <TouchableOpacity
                                                        style={styles.dropdownContainer}
                                                        onPress={() => {
                                                                setIsWeightOpen(!isWeightOpen);
                                                                allDropDownCloseHandler(DROPDOWNENUMVALUE.WEIGHT)
                                                        }}
                                                >
                                                        <Text>15 mp</Text>
                                                        <Image source={ICONS.blackArrowHead} style={styles.blackArrowHeadIcon} />
                                                </TouchableOpacity>

                                                <View>
                                                        {isWeightOpen &&
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

                                <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />

                                {/* Future setting section */}
                                <TouchableOpacity style={styles.furtherSettingContainer} onPress={furtherSettingHandler}>
                                        <View style={styles.furtherSettingTextContainer}>
                                                <Text style={styles.furtherSettingText}>További beállítások</Text>
                                        </View>

                                        <View style={styles.blackArrowHeadContainer}>
                                                <Image source={ICONS.blackArrowHead} style={styles.blackArrowHead} />
                                        </View>
                                </TouchableOpacity>

                                <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />

                                {/* payment section ++ */}
                                {/* row 01 */}
                                <View style={styles.paymentRowContainer}>
                                        <View style={styles.paymentRowTextContainer}>
                                                <Text style={styles.furtherSettingText}>Beállított fizetési mód:</Text>
                                        </View>

                                        <View style={styles.iconContainer}>
                                                <TouchableOpacity>
                                                        <Image source={ICONS.paypal} style={styles.icon} />
                                                </TouchableOpacity>

                                                <TouchableOpacity>
                                                        <Image source={ICONS.setting} style={styles.iconi} />
                                                </TouchableOpacity>
                                        </View>
                                </View>

                                <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5 }} />

                                {/* row 02 */}
                                <View style={styles.paymentRowContainer}>
                                        <View style={styles.paymentRowTextContainer}>
                                                <Text style={styles.furtherSettingText}>Folyamatos fizetés
                                                        engedélyezése:</Text>
                                        </View>

                                        <View style={styles.iconContainer}>
                                                <TouchableOpacity>
                                                        <ToggleSwitch
                                                                isOn={isEnabled}
                                                                onColor={colors.primary}
                                                                offColor={colors.primary}
                                                                // label="Example label"
                                                                labelStyle={{ color: "black", fontWeight: "900" }}
                                                                size="medium"
                                                                onToggle={isOn => {
                                                                        setIsEnabled(isOn)
                                                                }}
                                                        />
                                                </TouchableOpacity>

                                                <TouchableOpacity>
                                                        <Image source={ICONS.blackInfo} style={styles.icon} />
                                                </TouchableOpacity>
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
                top: dimensions.paddingLevel4,
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
                top: dimensions.heightLevel10 * 0.80,
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
                width: dimensions.widthLevel1 * 0.45,
                borderRadius: 8,
                alignSelf: 'flex-end',
        },

        blackArrowHeadIcon: {
                width: dimensions.paddingLevel1,
        },

        dropdownBodyContainer: {
                width: dimensions.widthLevel1 * 0.45,
                backgroundColor: colors.white,
                padding: 1,
                marginTop: dimensions.paddingLevel1,
                maxHeight: dimensions.heightLevel10,
                borderRadius: 8,
                ...getShadowsV1,
                position: 'absolute'
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

        bodyHeaderContainer: {
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
        },

        imageContainer: {
                width: '40%',
                alignItems: 'center',
        },

        image: {
                borderRadius: 100,
                borderWidth: 3,
                borderColor: colors.primary,
                width: dimensions.paddingLevel10 * 1.5,
                height: dimensions.paddingLevel10 * 1.5,
        },

        cameraContainer: {
                position: 'absolute',
                bottom: dimensions.paddingLevel1 /2,
                right: dimensions.paddingLevel3/2,
        },

        cameraIcon: {
                transform: [{ scale: 1}],
                width:45,
                height:45
        },

        // textfield

        textFieldContainer: {
                width: '60%',
                alignItems: 'flex-start',
        },


        inputContainer: {
                flexDirection: 'row',
                // backgroundColor: "transparent",
                backgroundColor: colors.transfarent,
                borderRadius: 10,
                height: dimensions.heightLevel6 / 2,
                borderBottomWidth: 1.5,
                borderBottomColor: colors.black,

        },

        input: {
                fontSize: fontSizes.fontMedium,
                paddingLeft: dimensions.paddingLevel2,
                fontFamily: fontFamilies.OpenSansRegular,
                color: colors.black,
                fontWeight: "600"
        },

        input2: {
                fontSize: fontSizes.fontSmallPlus,
                paddingLeft: dimensions.paddingLevel2,
                fontFamily: fontFamilies.MontRegular,
                color: colors.black,
                fontWeight: "600"
        },

        furtherSettingContainer: {
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                borderTopColor: colors.primary,
                borderBottomColor: colors.primary,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                paddingVertical: dimensions.paddingLevel1,
        },

        furtherSettingTextContainer: {
                // nothing
        },

        furtherSettingText: {
                fontSize: fontSizes.fontSmallPlus,
                paddingLeft: dimensions.paddingLevel2,
                fontFamily: fontFamilies.OpenSansRegular,
                color: colors.black,
        },

        blackArrowHeadContainer: {
                padding: dimensions.paddingLevel1,
                width: dimensions.widthLevel10 * 0.25,
                alignItems: 'center',
        },

        blackArrowHead: {
                width: dimensions.paddingLevel1,
                transform: [{ rotate: '-90deg' }],
        },

        paymentRowContainer: {
                flexDirection: 'row',
                width: '100%',

        },

        paymentRowTextContainer: {
                width: '60%',
        },

        iconContainer: {
                width: '40%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
        },

        icon: {
                height:30,
                width:30
        },
        iconi:{
                height:20,
                width:20  
        }

});

export default SettingScreen;

