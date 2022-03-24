// ** Import Core
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
// ** Import Images
import {IMAGES, ICONS} from '../assets/images';
// ** Import constant
import {
        fontSizes,
        fontFamilies,
        colors,
        basicStyles,
        dimensions,
        imageSizes,
} from '../configurations/constants';


const MenuWithSearchComponent = ({searchHandler=()=>{}, navigation }) => {

const [text, setText] = useState('');

        // ** function here
        const menuHandler = () => {
                navigation?.openDrawer();
        }

  return (
    <View style={styles.container}>

            {/* menu icon */}
            <TouchableOpacity onPress={menuHandler} style={styles.menuIconContainer}>
                <Image source={ICONS.menu} style={styles.menuIcon}/>
            </TouchableOpacity>

            {/* search bar */}
            <View style={styles.inputContainer}>
                <Image source={ICONS.search} style={styles.icon}/>
                <TextInput
                   style={styles.input}
                   onChangeText={(text) => {
                        setText(text);
                    }}
                   selectionColor={colors.primary}
                   placeholderTextColor={colors.black}
                   placeholder='keresés'
                />
            </View>

    </View>
  );
};

const styles = StyleSheet.create({
        container: {
                flexDirection: 'row',
                width: dimensions.fullWidth,
                // height: dimensions.heightLevel6,
                paddingVertical: dimensions.paddingLevel1,
                backgroundColor: colors.primary,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                zIndex: 101,
                alignItems: 'center',
        },

        menuIconContainer: {
                width: dimensions.widthLevel12 /2.3,
                transform: [{scale: 0.5}],

        },

        menuIcon: {
                // nothing
        },

        inputContainer: {
                flexDirection: 'row',
                backgroundColor: colors.white,
                borderRadius: 20,
                // height: dimensions.heightLevel3,
                width: dimensions.widthLevel5,
                borderWidth: 1.5,
                borderColor: colors.white,
                alignItems: 'center',
                marginLeft: dimensions.paddingLevel2,
        },

        input: {
                fontSize: fontSizes.fontMidMedium,
                paddingLeft: dimensions.paddingLevel2,
                fontFamily: fontFamilies.MontThin,
                color: colors.black,
                backgroundColor: colors.white,
                width: "78%",
                height: dimensions.heightLevel3,
        },

        icon: {
               transform: [{scale: 1}],
               marginHorizontal: dimensions.paddingLevel2,
               width:20,
               height:20
        },
})

export default MenuWithSearchComponent;
