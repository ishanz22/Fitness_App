// ** Import Core
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// ** Import Images
import { ICONS, IMAGES } from '../../assets/images';
// ** Import components
import EmptyView from '../../components/EmptyView';
import FavouriteItem from '../../components/profile/FavouriteItem';
// ** Import constant
import {
  colors, dimensions, fontFamilies, fontSizes
} from '../../configurations/constants';

const ProfileScreen = ({ navigation }) => {
  // ** @fakeData
  const fakeData = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
  ];

  // ** useState and useEffect
  const BTNGROUPENUMVALUE = {
    ALL: 'ALL',
    WORKOUT: 'WORKOUT',
    LIVE: 'LIVE',
    RECIPE: 'RECIPE',
  };
  const [enabledButton, setEnabledButton] = useState(BTNGROUPENUMVALUE.ALL);


  // ** function here
  const selectButtonHandler = (value) => {
    switch (value) {
      case BTNGROUPENUMVALUE.WORKOUT:
        setEnabledButton(BTNGROUPENUMVALUE.WORKOUT);
        break;
      case BTNGROUPENUMVALUE.LIVE:
        setEnabledButton(BTNGROUPENUMVALUE.LIVE);
        break;
      case BTNGROUPENUMVALUE.RECIPE:
        setEnabledButton(BTNGROUPENUMVALUE.RECIPE);
        break;

      default:
        setEnabledButton(BTNGROUPENUMVALUE.ALL);
        break;
    }
  }

  const menuHandler = () => {
    navigation?.openDrawer();
  };

  const settingButtonHandler = () => {
    navigation.navigate('SettingScreen');
  };

  const selectPhotoHandler = () => {
    // TODO: do something
  };

  const updateHandler = () => {
    // TODO: do something
  };

  const furtherSettingHandler = () => {
    // TODO: do something
  };




  return (
    <View style={styles.container}>

      {/* header ++*/}
      <Image source={IMAGES.topBubbleDecoration} style={styles.topBubbleDecoration} />
      {/* menu icon */}
      <TouchableOpacity onPress={menuHandler} style={styles.menuIconContainer}>
        <Image source={ICONS.menu} style={styles.menuIcon} />
      </TouchableOpacity>

      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Profilom</Text>
        <Text></Text>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={settingButtonHandler} >
        <Image source={ICONS.setting} style={styles.backButtonIcon} />
      </TouchableOpacity>
      <View style={styles.headerLine}></View>

      {/* body ++ */}
      <View style={styles.bodyContainer}>

        {/* header container */}
        <View style={styles.bodyHeaderContainer}>
          <View style={styles.textFieldContainer}>

            <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

            <Text numberOfLines={2} style={styles.input}>Cahaya Dewi</Text>

            <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5 }} />

            <Text numberOfLines={1} style={styles.input2}>@reallygreatsite</Text>

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

        {/* <EmptyView style={{ marginTop: dimensions.heightLevel1 }} /> */}


        {/* weight, height, gender, Dob section */}
        <View style={styles.wHGBSection}>
          {/* row 1 */}
          <View style={styles.whgbRow}>
            {/* gender */}
            <View style={styles.whgbRowItem}>
              <Image source={ICONS.gender} style={styles.whgbIcon} />
              <Text numberOfLines={1} style={styles.whgbText}>Nő</Text>
            </View>

            {/* weight */}
            <View style={styles.whgbRowItem}>
              <Image source={ICONS.weight} style={styles.whgbIcon} />
              <Text numberOfLines={1} style={styles.whgbText}>56 kg</Text>
            </View>
          </View>


          {/* row 2 */}
          <View style={styles.whgbRow}>
            {/* gender */}
            <View style={styles.whgbRowItem}>
              <Image source={ICONS.height} style={styles.whgbIcon} />
              <Text numberOfLines={1} style={styles.whgbText}>176 cm</Text>
            </View>

            {/* weight */}
            <View style={styles.whgbRowItem}>
              <Image source={ICONS.calender} style={styles.whgbIcon} />
              <Text numberOfLines={1} style={styles.whgbText}>
                24 éves
              </Text>
            </View>
          </View>
        </View>

        <EmptyView style={{ marginTop: dimensions.heightLevel5 }} />

        {/* watched movies and Validity of your package */}
        <View style={styles.watchedMovieConainer}>
          {/* watched movies */}
          <View style={{ textAlign: 'left' }}>
            <Text numberOfLines={1} style={styles.watchedMovieMainText}>5.397</Text>
            <Text numberOfLines={1} style={styles.watchedMovieSubText}>Megnézett videó</Text>
          </View>

          {/* Validity of your package */}
          <View style={{ alignItems: 'flex-end' }}>
            <Text numberOfLines={1} style={styles.watchedMovieMainText}>2022.06.29</Text>
            <Text numberOfLines={1} style={styles.watchedMovieSubText}>Csomagod érvényessége</Text>
          </View>
        </View>

        <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />

        {/* my favourite: Kedvenceim */}
        <Text numberOfLines={1} style={styles.myFavouriteText}>Kedvenceim</Text>

        <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

        {/* select buttons */}
        <View style={styles.buttonListContainer}>
          {/* button 1 */}
          <TouchableOpacity
            onPress={() => selectButtonHandler(BTNGROUPENUMVALUE.ALL)}
            style={[styles.btn, { backgroundColor: (enabledButton == BTNGROUPENUMVALUE.ALL) ? colors.primary : 'rgba(0,0,0,0.05)' }]}>
            <Text numberOfLines={1} style={[styles.btnText, { color: (enabledButton == BTNGROUPENUMVALUE.ALL) ? colors.white : colors.black }]}>Összes</Text>
          </TouchableOpacity>

          {/* button 2 */}
          <TouchableOpacity
            onPress={() => selectButtonHandler(BTNGROUPENUMVALUE.WORKOUT)}
            style={[styles.btn, { backgroundColor: (enabledButton == BTNGROUPENUMVALUE.WORKOUT) ? colors.primary : 'rgba(0,0,0,0.05)' }]}>
            <Text numberOfLines={1} style={[styles.btnText, { color: (enabledButton == BTNGROUPENUMVALUE.WORKOUT) ? colors.white : colors.black }]}>Edzések</Text>
          </TouchableOpacity>

          {/* button 3 */}
          <TouchableOpacity
            onPress={() => selectButtonHandler(BTNGROUPENUMVALUE.LIVE)}
            style={[styles.btn, { backgroundColor: (enabledButton == BTNGROUPENUMVALUE.LIVE) ? colors.primary : 'rgba(0,0,0,0.05)' }]}>
            <Text numberOfLines={1} style={[styles.btnText, { color: (enabledButton == BTNGROUPENUMVALUE.LIVE) ? colors.white : colors.black }]}>ÉLŐK</Text>
          </TouchableOpacity>

          {/* button 4 */}
          <TouchableOpacity
            onPress={() => selectButtonHandler(BTNGROUPENUMVALUE.RECIPE)}
            style={[styles.btn, { backgroundColor: (enabledButton == BTNGROUPENUMVALUE.RECIPE) ? colors.primary : 'rgba(0,0,0,0.05)' }]}>
            <Text numberOfLines={1} style={[styles.btnText, { color: (enabledButton == BTNGROUPENUMVALUE.RECIPE) ? colors.white : colors.black }]}>Receptek</Text>
          </TouchableOpacity>
        </View>

        {/* <EmptyView style={{ marginTop: dimensions.heightLevel1 }} /> */}

        <View style={styles.VerticalFlatListContainer}>

          <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

          <FlatList
            refreshing={true}
            maxToRenderPerBatch={2}
            showsVerticalScrollIndicator={false}
            // horizontal
            data={fakeData}
            keyExtractor={(item, index) => index}
            onEndReached={() => console.log("FlatList End.")}
            ListFooterComponent={<EmptyView style={{ marginTop: dimensions.heightLevel10 }} />}
            renderItem={({ item }, index) => (
              <FavouriteItem />
            )}
          />

        </View>



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
    top: dimensions.heightLevel10 * 0.70,
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


  buttonText: {
    fontFamily: fontFamilies.OpenSansBold,
    color: colors.white,
    fontSize: fontSizes.fontMedium,
    paddingLeft: dimensions.paddingLevel1,
    paddingRight: dimensions.paddingLevel1,
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
    bottom: dimensions.paddingLevel1,
    right: dimensions.paddingLevel3,
  },

  cameraIcon: {
    transform: [{ scale: 1.6 }],
    width:30,
    height:30
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
    fontSize: fontSizes.fontXXLarge,
    fontFamily: fontFamilies.OpenSansRegular,
    color: colors.black,
    fontWeight: "600"
  },

  input2: {
    fontSize: fontSizes.fontMedium,
    fontFamily: fontFamilies.MontRegular,
    color: colors.black,
  },

  // weight, height, gender, birth section
  wHGBSection: {
    width: '60%',
    position: 'absolute',
    top: dimensions.heightLevel7 * 1.05,
    paddingLeft: dimensions.paddingLevel2,
  },

  whgbRow: {
    flexDirection: 'row',
  },

  whgbRowItem: {
    flexDirection: 'row',
    width: "50%",
    alignItems: 'center',
    padding: dimensions.paddingLevel1,
  },

  whgbIcon: {
    marginRight: dimensions.paddingLevel1 * 0.5,
    width:20,
    height:20
  },

  whgbText: {
    fontSize: fontSizes.fontSmall,
    paddingLeft: dimensions.paddingLevel2,
    fontFamily: fontFamilies.OpenSansRegular,
  },

  watchedMovieConainer: {
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  watchedMovieMainText: {
    fontFamily: fontFamilies.MontRegular,
    fontSize: fontSizes.fontLarge,
    color: colors.black,
  },

  watchedMovieSubText: {
    fontFamily: fontFamilies.MontRegular,
    fontSize: fontSizes.fontSmall,
    color: colors.black,
  },

  myFavouriteText: {
    fontFamily: fontFamilies.OpenSansRegular,
    fontSize: fontSizes.fontLarge,
    color: colors.black,
  },

  buttonListContainer: {
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  btn: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingVertical: dimensions.paddingLevel1 * 0.6,
    width: dimensions.widthLevel10 * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  btnText: {
    fontFamily: fontFamilies.OpenSansRegular,
    fontSize: fontSizes.fontSmallPlus,
  },

  VerticalFlatListContainer: {
    height: dimensions.fullHeight * 0.4,
  },

});

export default ProfileScreen;

