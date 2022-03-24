// ** Import Core
import React, { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
        BackHandler,
        FlatList, Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
// ** Import Images
import { ICONS, IMAGES } from '../../assets/images';
// ** Import components
import EmptyView from '../../components/EmptyView';
import WorkoutVideoCard from '../../components/Workout/WorkoutVideoCard';
// ** Import constant
import {
        colors, dimensions, fontFamilies, fontSizes
} from '../../configurations/constants';

const WorkoutPackageScreen = ({ navigation }) => {
        // ** @fakeData
        const fakeData = [
                { id: 1, name: "Video 01" },
                { id: 2, name: "Video 02" },
                { id: 3, name: "Video 03" },
                { id: 4, name: "Video 04" },
                { id: 5, name: "Video 05" },
        ];

        // ** useState & useEffect here
        useEffect(() => {
          // nothing
          return () => {
                // nothing
          }
        }, []);


        // ** function here
        const menuHandler = () => {
                navigation?.openDrawer();
        }
        const goSubWorkoutScreenHandler = (param) => {
                navigation.navigate('WorkoutSubScreen', param);
        }

        return (
                <View style={styles.container}>
                        {/* header ++*/}
                        <Image source={IMAGES.topBubbleDecoration} style={styles.topBubbleDecoration} />
                        <Image source={IMAGES.bottomBubbleDecoration} style={styles.bottomBubbleDecoration} />

                        {/* menu icon */}
                        <TouchableOpacity onPress={menuHandler} style={styles.menuIconContainer}>
                                <Image source={ICONS.menu} style={styles.menuIcon} />
                        </TouchableOpacity>

                        {/* body ++ */}
                        <View style={styles.bodyContainer}>

                                <EmptyView style={{ marginTop: dimensions.heightLevel7 }} />

                                {/* video packages text */}
                                <Text style={styles.headerText}>Egy Videó csomag</Text>

                                <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

                                <Text style={styles.subHeaderText}>Rövid leírás a feladatokról, a szükséges kellékekről, az edzés időtartamáról és hasonlók.</Text>

                                {/* flatlist: video container */}
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
                                                        <WorkoutVideoCard header={item.name} key={index} goNextScreen={goSubWorkoutScreenHandler}/>
                                                )}
                                        />

                                </View>

                        </View>
                </View>
        );
};


const styles = StyleSheet.create({
        container: {
                height: dimensions.fullHeight,
                width: dimensions.fullWidth,
                backgroundColor: colors.white,
        },

        bodyContainer: {
                width: dimensions.fullWidth,
                paddingHorizontal: dimensions.paddingLevel3,
        },

        topBubbleDecoration: {
                // nothing
                position: 'absolute',
                top: dimensions.paddingLevel2 * 0.6,
                left: dimensions.paddingLevel2 * 0.45,
                transform: [{ scale: 1.2 }],
                opacity: 0.95,
        },

        bottomBubbleDecoration: {
                // nothing
                position: 'absolute',
                bottom: dimensions.paddingLevel3,
                right: dimensions.paddingLevel2,
                transform: [{ scale: 1.5 }],
                opacity: 0.7
        },

        menuIconContainer: {
                position: 'absolute',
                top: dimensions.heightLevel1 * 0.5,
                left:  0,
                width: dimensions.widthLevel12 /2.5,
                transform: [{scale: 0.5}],
        },

        menuIcon: {
                // width: '100%',
        },

        headerText: {
                fontFamily: fontFamilies.OpenSansExtraBold,
                fontSize: fontSizes.fontXXXXLarge * 1.1,
                color: colors.black,
        },

        subHeaderText: {
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontMedium,
                color: 'rgba(0,0,0,0.8)',
        },

        VerticalFlatListContainer: {
                height: dimensions.fullHeight * 0.8,
        },
});


export default WorkoutPackageScreen;
