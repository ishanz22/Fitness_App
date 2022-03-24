// ** Import Core
import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// ** Import Images
import {ICONS, IMAGES} from '../../assets/images';
// ** Import components
import EmptyView from '../../components/EmptyView';
import RelatedVideoCard from '../../components/Workout/RelatedVideoCard';
import VideoCard from '../../components/Workout/VideoCard';
// ** Import constant
import {colors, dimensions, fontFamilies, fontSizes} from '../../configurations/constants';
// ** Import external components


const WorkoutSubScreen = ({navigation}) => {

    // ** @fakeData
    const fakeData = [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'},
        {id: 3, name: 'C'},
        {id: 4, name: 'D'},
        {id: 5, name: 'E'},
    ];


    // ** function here
    const menuHandler = () => {
        navigation?.openDrawer();
    };

    const greenHeartHandler = () => {
        // TODO: do something
    };


    return (
        <View style={styles.container}>
            {/* header ++*/}
            <Image source={IMAGES.topBubbleDecoration} style={styles.topBubbleDecoration}/>
            <Image source={IMAGES.bottomBubbleDecoration} style={styles.bottomBubbleDecoration}/>

            <TouchableOpacity onPress={greenHeartHandler} style={styles.greenHeartContainer}>
                <Image source={ICONS.greenHeart} style={styles.greenHeart}/>
            </TouchableOpacity>

            {/* menu icon */}
            <TouchableOpacity onPress={menuHandler} style={styles.menuIconContainer}>
                <Image source={ICONS.menu} style={styles.menuIcon}/>
            </TouchableOpacity>

            {/* body ++ */}
            <View style={styles.bodyContainer}>

                <EmptyView style={{marginTop: dimensions.heightLevel6}}/>

                {/* video packages text */}
                <Text style={styles.headerText}>Egy videó</Text>

                <EmptyView style={{marginTop: dimensions.heightLevel1}}/>

                {/* Video informations */}
                <View style={styles.infoContainer}>
                    {/* views and likes counts */}
                    <View style={styles.viewLikeContainer}>
                        {/* views */}
                        <View style={styles.viewContainer}>
                            <Image source={ICONS.openEye}/>
                            <Text style={styles.infoText}>{' '}12k</Text>
                        </View>

                        {/* favourite/likes  */}
                        <View style={styles.viewContainer}>
                            <Image source={ICONS.pureRedHeart}/>
                            <Text style={styles.infoText}>{' '}1k</Text>
                        </View>
                    </View>

                    {/* video duration */}
                    <View>
                        <View style={[styles.viewContainer, {width: dimensions.widthLevel12 * 0.85}]}>
                            <Image source={ICONS.blackTimer} style={{transform: [{scale: 0.65}]}}/>
                            <Text style={styles.infoText}>{' '}12:00:00</Text>
                            <Text style={styles.infoText}>{' '}perc</Text>
                        </View>
                    </View>
                </View>

                {/* <EmptyView style={{ marginTop: dimensions.heightLevel1 }} /> */}

                {/* main video */}
                <VideoCard header={null}/>


                <EmptyView style={{marginTop: dimensions.heightLevel2}}/>

                {/* related video / Kapcsolódó videók*/}
                <Text style={styles.relatedText}>Kapcsolódó videók</Text>


                {/* flatlist: related video container */}
                <View style={styles.VerticalFlatListContainer}>

                    <EmptyView style={{marginTop: dimensions.heightLevel1}}/>
                    <FlatList
                        refreshing={true}
                        maxToRenderPerBatch={2}
                        showsVerticalScrollIndicator={false}
                        // horizontal
                        data={fakeData}
                        keyExtractor={(item, index) => index}
                        onEndReached={() => console.log('FlatList End.')}
                        ListFooterComponent={<EmptyView style={{marginTop: dimensions.heightLevel10}}/>}
                        renderItem={({item}, index) => (
                            <RelatedVideoCard/>
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
        transform: [{scale: 1.2}],
        opacity: 0.95,
    },

    bottomBubbleDecoration: {
        // nothing
        position: 'absolute',
        bottom: dimensions.paddingLevel3,
        right: dimensions.paddingLevel2,
        transform: [{scale: 1.5}],
        opacity: 0.7,
    },

    greenHeartContainer: {
        position: 'absolute',
        top: dimensions.paddingLevel3,
        right: dimensions.paddingLevel3 * 1.4,
    },

    greenHeart: {
        transform: [{scale: 1.3}],
        width:25,
        height:25
        
    },

    menuIconContainer: {
        position: 'absolute',
        top: dimensions.heightLevel1 * 0.5,
        left: 0,
        width: dimensions.widthLevel12 / 2.3,
        transform: [{scale: 0.5}],
    },

    menuIcon: {
        // nothing
    },


    headerText: {
        fontFamily: fontFamilies.OpenSansRegular,
        fontSize: fontSizes.fontXXXXLarge,
        color: colors.black,
        textAlign: 'center',
    },


    infoContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    viewLikeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    viewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: dimensions.widthLevel12 * 0.40,
    },

    infoText: {
        fontSize: fontSizes.fontSmallPlus,
        fontFamily: fontFamilies.OpenSansRegular,
    },

    relatedText: {
        fontFamily: fontFamilies.OpenSansRegular,
        fontSize: fontSizes.fontXLarge,
        color: colors.black,
    },

    VerticalFlatListContainer: {
        height: dimensions.fullHeight * 0.5,
    },

});


export default WorkoutSubScreen;
