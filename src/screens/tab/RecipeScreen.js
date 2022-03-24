// ** Import Core
import React, { useState, useEffect } from 'react';
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
import EmptyView from '../../components/EmptyView';
import ListButton from '../../components/ListButton';
import MenuWithSearchComponent from '../../components/MenuWithSearchComponent';
import RecommendVideoCard from '../../components/Home/RecommendVideoCard';
import SubscriberPackageCard from '../../components/Home/SubscriberPackageCard';
// ** Import external library
import CheckBox from '@react-native-community/checkbox';
import RecipeCard from '../../components/Recipe/RecipeCard';

const RecipeScreen = ({navigation}) => {

  // ** @fakeData
  const fakeData = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
  ];

  // ** state and useEffect
  const SELECTEENUMVALUE = {
    ALL: 'ALL',
    NORMAL: 'NORMAL',
    VEGAN: 'VEGAN',
  };
  const [selectButton, setSelectButton] = useState(SELECTEENUMVALUE.ALL);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState({
    breakFast: false, // Reggeli
    morningSnack: false, //Délelőtti snack
    lunch: false, //Ebéd
    afternoonSnack: false, //Délutáni snack
    dinner: false, //Vacsora
  });

  // ** function/ switch here
  const selectEnumValueHandler = (value) => {
    switch (value) {
      case SELECTEENUMVALUE.NORMAL:
        setSelectButton(SELECTEENUMVALUE.NORMAL);
        break;
      case SELECTEENUMVALUE.VEGAN:
        setSelectButton(SELECTEENUMVALUE.VEGAN);
        break;
      default:
        setSelectButton(SELECTEENUMVALUE.ALL);
        break;
    }
  };

  const sideMenuHandler = () => {
    setIsSideMenuOpen(open => !open);
  };

  const goRecipeSubScreenHandler = () => {
    navigation.navigate('RecipeSubScreen');
    // navigation.navigate('stackNavigation',{screen: 'RecipeSubScreen'});
};

  return (
    <View style={styles.container}>

       {/* --conditonal rendering here-- */}
       {isSideMenuOpen && <TouchableOpacity
                style={styles.hideContainer}
                onPress={sideMenuHandler}
            ></TouchableOpacity>}


      {/* Header */}
      <MenuWithSearchComponent navigation={navigation}  />

      <View style={styles.bodyContainer}>
        <EmptyView style={{ marginTop: dimensions.heightLevel1 * 1.3 }} />

        {/* workout text */}
        <Text style={styles.recipeText}>receptek</Text>

        <EmptyView style={{ marginTop: dimensions.heightLevel1  }} />

        {/* filter container */}
        <View style={styles.filterContainer}>
          {/* button container */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: (selectButton == SELECTEENUMVALUE.ALL) ? colors.primary : 'rgba(0,0,0,0.05)' }]}
              onPress={() => selectEnumValueHandler(SELECTEENUMVALUE.ALL)}
            >
              <Text
                style={[styles.buttonText, { color: (selectButton == SELECTEENUMVALUE.ALL) ? colors.white : colors.black }]}
              >Összes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: (selectButton == SELECTEENUMVALUE.NORMAL) ? colors.primary : 'rgba(0,0,0,0.05)' }]}
              onPress={() => selectEnumValueHandler(SELECTEENUMVALUE.NORMAL)}
            >
              <Text
                style={[styles.buttonText, { color: (selectButton == SELECTEENUMVALUE.NORMAL) ? colors.white : colors.black }]}
              >Normál</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: (selectButton == SELECTEENUMVALUE.VEGAN) ? colors.primary : 'rgba(0,0,0,0.05)' }]}
              onPress={() => selectEnumValueHandler(SELECTEENUMVALUE.VEGAN)}
            >
              <Text
                style={[styles.buttonText, { color: (selectButton == SELECTEENUMVALUE.VEGAN) ? colors.white : colors.black }]}
              >Vegán</Text>
            </TouchableOpacity>
          </View>



          {/* filter button container ++ */}
          <View style={styles.filterButtonContainer}>
            <TouchableOpacity onPress={sideMenuHandler}>
              <Image source={ICONS.filterSetting} style={styles.filterIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* side fiter menu */}
        <View style={[styles.sideMenuDrawer,
           { right: isSideMenuOpen ? 0 : (- dimensions.widthLevel1) }]}>
          <Text style={styles.sideMenuHeader}>étkezések</Text>

          <View style={styles.sideMenuMiddleContainer}>
            {/* drawer menu list item: 01*/}
            <View style={styles.sideDrawerList}>
              {/* checkbox */}
              <CheckBox
                disabled={false}
                tintColors={{ true: colors.white, false: '#01A79D' }}
                onCheckColor={colors.white}
                onTintColor={colors.white}
                tintColor={'#01A79D'}
                value={toggleCheckBox?.breakFast}
                onValueChange={() => setToggleCheckBox({
                  ...toggleCheckBox,
                  breakFast: !toggleCheckBox.breakFast,
                })}
              />

              <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />

              {/* meal text */}
              <Text style={styles.mealListText}>Reggeli</Text>
            </View>

            {/* drawer menu list item: 02*/}
            <View style={styles.sideDrawerList}>
              {/* checkbox */}
              <CheckBox
                disabled={false}
                tintColors={{ true: colors.white, false: '#01A79D' }}
                onCheckColor={colors.white}
                onTintColor={colors.white}
                tintColor={'#01A79D'}
                value={toggleCheckBox?.morningSnack}
                onValueChange={() => setToggleCheckBox({
                  ...toggleCheckBox,
                  morningSnack: !toggleCheckBox.morningSnack,
                })}
              />

              <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />

              {/* meal text */}
              <Text style={styles.mealListText}>Délelőtti snack</Text>
            </View>


            {/* drawer menu list item: 03*/}
            <View style={styles.sideDrawerList}>
              {/* checkbox */}
              <CheckBox
                disabled={false}
                tintColors={{ true: colors.white, false: '#01A79D' }}
                onCheckColor={colors.white}
                onTintColor={colors.white}
                tintColor={'#01A79D'}
                value={toggleCheckBox?.lunch}
                onValueChange={() => setToggleCheckBox({
                  ...toggleCheckBox,
                  lunch: !toggleCheckBox.lunch,
                })}
              />

              <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />

              {/* meal text */}
              <Text style={styles.mealListText}>Ebéd</Text>
            </View>


            {/* drawer menu list item: 04*/}
            <View style={styles.sideDrawerList}>
              {/* checkbox */}
              <CheckBox
                disabled={false}
                tintColors={{ true: colors.white, false: '#01A79D' }}
                onCheckColor={colors.white}
                onTintColor={colors.white}
                tintColor={'#01A79D'}
                value={toggleCheckBox?.afternoonSnack}
                onValueChange={() => setToggleCheckBox({
                  ...toggleCheckBox,
                  afternoonSnack: !toggleCheckBox.afternoonSnack,
                })}
              />

              <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />

              {/* meal text */}
              <Text style={styles.mealListText}>Délutáni snack</Text>
            </View>


            {/* drawer menu list item: 05*/}
            <View style={styles.sideDrawerList}>
              {/* checkbox */}
              <CheckBox
                disabled={false}
                tintColors={{ true: colors.white, false: '#01A79D' }}
                onCheckColor={colors.white}
                onTintColor={colors.white}
                tintColor={'#01A79D'}
                value={toggleCheckBox?.dinner}
                onValueChange={() => setToggleCheckBox({
                  ...toggleCheckBox,
                  dinner: !toggleCheckBox.dinner,
                })}
              />

              <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />

              {/* meal text */}
              <Text style={styles.mealListText}>Vacsora</Text>
            </View>
          </View>

          <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />

          {/* filter button */}
          <TouchableOpacity style={styles.filterButton} onPress={sideMenuHandler}>
            <Text style={styles.filterButtonText}>SZŰRÉS</Text>
          </TouchableOpacity>
        </View>



        {/* flatList container +++ */}
        <View style={styles.flatListContainer}>
          <FlatList
            refreshing={true}
            maxToRenderPerBatch={2}
            showsVerticalScrollIndicator={false}
            // horizontal
            numColumns={2}
            data={fakeData}
            keyExtractor={(item, index) => index}
            onEndReached={() => console.log("FlatList End.")}
            ListFooterComponent={<EmptyView style={{ marginTop: dimensions.heightLevel10 }} />}
            renderItem={({ item }, index) => (
              <RecipeCard goRecipeSubScreen={goRecipeSubScreenHandler} />
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
    position: 'absolute',
    zIndex: 99,
},

  container: {
    height: dimensions.fullHeight,
    width: dimensions.fullWidth,
    backgroundColor: colors.white,
  },

  bodyContainer: {
    width: dimensions.fullWidth,
    paddingHorizontal: dimensions.paddingLevel3,
  },

  recipeText: {
    fontFamily: fontFamilies.OpenSansExtraBold,
    fontSize: fontSizes.fontLarge,
    color: colors.black,
    textTransform: 'uppercase',
  },

  filterContainer: {
    width: "100%",
    paddingVertical: dimensions.paddingLevel1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },


  buttonContainer: {
    width: "80%",
    paddingVertical: dimensions.paddingLevel1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  filterButtonContainer: {
    width: "20%",
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: dimensions.paddingLevel1 * 0.3,
    zIndex: 100,
  },

  filterIcon: {
    transform: [{ scale: 1.2 }],
     width:24,
     height:24
  },

  button: {
    width: dimensions.widthLevel1 * 0.2,
    backgroundColor: 'rgba(0,0,0,0.05)',
    marginRight: dimensions.paddingLevel1,
    alignItems: 'center',
    paddingVertical: dimensions.paddingLevel1,
    borderRadius: 8,
    zIndex: 100,
  },

  buttonText: {
    fontFamily: fontFamilies.OpenSansRegular,
    fontSize: fontSizes.fontSmall,
    color: colors.black,
    zIndex: 100,
  },

  sideMenuDrawer: {
    width: dimensions.widthLevel1,
    backgroundColor: colors.primary,
    paddingVertical: dimensions.paddingLevel1,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    alignItems: 'center',
    position: 'absolute',
    top: dimensions.heightLevel8 * 1.06,
    zIndex: 100,
  },

  sideMenuHeader: {
    fontFamily: fontFamilies.OpenSansRegular,
    fontSize: fontSizes.fontLarge,
    color: colors.white,
    textTransform: 'uppercase',
  },

  sideMenuMiddleContainer: {
    width: '100%',
    paddingVertical: dimensions.paddingLevel1,
    paddingHorizontal: dimensions.paddingLevel4,
  },

  sideDrawerList: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  mealListText: {
    fontFamily: fontFamilies.OpenSansRegular,
    fontSize: fontSizes.fontLarge,
    color: colors.white,
    marginLeft: dimensions.paddingLevel2,
  },

  filterButton: {
    backgroundColor: colors.black,
    borderRadius: 8,
    paddingHorizontal: dimensions.paddingLevel4,
    paddingVertical: dimensions.paddingLevel1 * 0.5,
  },

  filterButtonText: {
    fontFamily: fontFamilies.MontBold,
    fontSize: fontSizes.fontSmallPlus,
    color: colors.white,
    textTransform: 'uppercase',
  },


  flatListContainer: {
    height: dimensions.fullHeight * 0.8,
    width: '100%',
    alignItems: 'center',
    zIndex: 98,
  }

});


export default RecipeScreen;
