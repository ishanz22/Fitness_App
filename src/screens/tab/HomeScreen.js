// ** Import Core
import React from 'react';
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
import RecommendVideoCard from '../../components/Home/RecommendVideoCard';
import SubscriberPackageCard from '../../components/Home/SubscriberPackageCard';


const HomeScreen = ({navigation}) => {

  // ** @fakeData
  const fakeData = [
    {id: 1, name: "A"},
    {id: 2, name: "B"},
    {id: 3, name: "C"},
    {id: 4, name: "D"},
    {id: 5, name: "E"},
  ]




  return (
    <View style={{backgroundColor: colors.white}}>
      {/* Header */}
      <MenuWithSearchComponent navigation={navigation} />

    {/* body */}
     <View style={styles.bodyContainer}>

        <EmptyView style={{marginTop: dimensions.heightLevel1 * 1.3}}/>

        {/* Recommend workout text */}
         <Text style={styles.recommendWorkoutText}>ajánlott edzések</Text>

         <EmptyView style={{marginTop: dimensions.heightLevel1 * 0.5}}/>

         {/* Recommend video or package text */}
         <Text style={styles.recommendVideoText}>Ezeket a videókat és csomagokat neked ajánljuk!</Text>

         <EmptyView style={{marginTop: dimensions.heightLevel1}}/>

          {/* card scroll area: Recommend video or package*/}
          <FlatList
              refreshing={true}
              maxToRenderPerBatch={2}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={fakeData}
              keyExtractor={(item, index) => index}
              onEndReached={() => console.log("FlatList End.")}
              // ListFooterComponent={<View style={{height:dimensions?.heightLevel10 * 1.5, flex: 1, justifyContent: "center",}}></View>}
              renderItem={({ item }, index) => (
                  // <ClassCard key={index} id={index} item={item} navigation={navigation}/>
                  <RecommendVideoCard />
              )}
          />

        <EmptyView style={{marginTop: dimensions.heightLevel1 * 1.5}}/>

                {/* Subscriber packages text */}
                <Text style={styles.recommendWorkoutText}>Előfizetői csomagok</Text>

                <EmptyView style={{marginTop: dimensions.heightLevel1 * 0.5}}/>

                {/* choose the right one for you text */}
                <Text style={styles.recommendVideoText}>Válaszd ki a számodra megfelelőt!</Text>

                <EmptyView style={{marginTop: dimensions.heightLevel1}}/>

                {/* card scroll area: subscriber package*/}
               <View style={styles.subscriberFlatListContainer}>
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
                        <SubscriberPackageCard />
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

  recommendWorkoutText: {
    fontFamily: fontFamilies.OpenSansExtraBold,
    fontSize: fontSizes.fontLarge,
    color: colors.black,
    textTransform: 'uppercase'
  },

  recommendVideoText: {
    fontFamily: fontFamilies.OpenSansRegular,
    fontSize: fontSizes.fontMedium,
    color: colors.black,
  },

  subscriberFlatListContainer: {
    height: dimensions.fullHeight * 0.5,
  }


})

export default HomeScreen;
