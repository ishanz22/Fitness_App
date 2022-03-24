// ** Import Core
import React, {useEffect, useState} from 'react';
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
import ListButton from '../../components/ListButton';
import MenuWithSearchComponent from '../../components/MenuWithSearchComponent';
import WorkoutCard from '../../components/Workout/WorkoutCard';


const WorkoutScreen = ({navigation}) => {

  // ** @fakeData
  const fakeData = [
    {id: 1, name: "A"},
    {id: 2, name: "B"},
    {id: 3, name: "C"},
    {id: 4, name: "D"},
    {id: 5, name: "E"},
  ]

  // ** function here
  const goPackageScreenHandler = () => {
    navigation.navigate('WorkoutPackageScreen');
};



  return (
    <View style={{backgroundColor: colors.white}}>
      {/* Header */}
      <MenuWithSearchComponent navigation={navigation}  />

    {/* body */}
      <View style={styles.bodyContainer}>

        <EmptyView style={{marginTop: dimensions.heightLevel1 * 1.3}}/>

        {/* workout text */}
        <Text style={styles.workoutText}>edzések</Text> 

        <EmptyView style={{marginTop: dimensions.heightLevel1 * 1.3}}/>

              {/* card scroll area: workouts*/}
              <View style={styles.VerticalFlatListContainer}>
                  <FlatList
                      refreshing={true}
                      maxToRenderPerBatch={2}
                      showsVerticalScrollIndicator={false}
                      // horizontal
                      data={fakeData}
                      keyExtractor={(item, index) => index}
                      onEndReached={() => console.log("FlatList End.")}
                      ListFooterComponent={ <EmptyView style={{marginTop: dimensions.heightLevel10}}/>}
                      renderItem={({ item }, index) => (
                        <WorkoutCard goNextScreen={goPackageScreenHandler} />
                      )}
                  />
               </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   bodyContainer: {
    width:dimensions.fullWidth,
    paddingHorizontal: dimensions.paddingLevel3,
  },

  workoutText: {
    fontFamily: fontFamilies.OpenSansExtraBold,
    fontSize: fontSizes.fontLarge,
    color: colors.black,
    textTransform: 'uppercase'
  },

  VerticalFlatListContainer: {
    height: dimensions.fullHeight * 0.8,
    
  }

})

export default WorkoutScreen;
