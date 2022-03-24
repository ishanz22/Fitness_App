// ** Import Core
import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// ** Import Images
import {ICONS, IMAGES} from '../../assets/images';
// ** Import constant
import {colors, dimensions, fontFamilies, fontSizes, getShadowsV1} from '../../configurations/constants';
// ** Import components
import EmptyView from '../../components/EmptyView';
import AchivedList from '../../components/Live/AchivedList';


const LiveScreen = ({navigation}) => {

    // ** @fakeData
    const [fakeData, setFakeData] = useState([
        {id: 1, title: '1 Claudia Alves - Jóga', date: '2022.02.16 17:00', duration: '45'},
        {id: 2, title: 'Dani Martinez - Edzés', date: '2022.02.17 17:00', duration: '60'},
        {id: 3, title: 'Mariana Napolitani', date: '2022.02.18 17:00', duration: '129'},
        {id: 4, title: 'Rachelle Beaudry', date: '2022.02.19 17:00', duration: '45'},
        {id: 5, title: 'Dani Martinez - Edzés', date: '2022.02.20 17:00', duration: '60'},
        {id: 6, title: 'Claudia Alves - Jóga', date: '2022.02.16 17:00', duration: '45'},
        {id: 7, title: 'Dani Martinez - Edzés', date: '2022.02.17 17:00', duration: '60'},
        {id: 8, title: 'Mariana Napolitani', date: '2022.02.18 17:00', duration: '129'},
        {id: 9, title: 'Rachelle Beaudry', date: '2022.02.19 17:00', duration: '45'},
        {id: 10, title: '10 Dani Martinez - Edzés', date: '2022.02.20 17:00', duration: '60'},

    ]);

    // ** useState || useSelector || useEffect

    const SORT = {
        ASC: 'ASC',
        DESC: 'DESC',
    };

    const [isAchived, setIsAchived] = useState(false);
    const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);


    // ** function here
    const menuHandler = () => {
        navigation?.openDrawer();
    };

    const acivedLiveHandler = () => {
        setIsAchived(!isAchived);
    };

    const sortMenuHandler = () => {
        setIsSortMenuOpen(!isSortMenuOpen);
    };

    const dropDownItemHandler = (sort) => {
        setIsSortMenuOpen(false);

        if (sort === SORT.ASC) {
            let data = fakeData.sort(function (a, b) {
                return a.id - b.id;
            });

            setFakeData(data);
        } else {
            let data = fakeData.sort(function (a, b) {
                return b.id - a.id;
            });

            setFakeData(data);
        }
    };


    return (
        <View style={styles.container}>
            {/* header ++*/}

            {/* --conditonal rendering here-- */}
            {isSortMenuOpen && <TouchableOpacity
                style={styles.hideContainer}
                onPress={() => setIsSortMenuOpen(false)}
            ></TouchableOpacity>}

            <Image source={IMAGES.topBubbleDecoration} style={styles.topBubbleDecoration}/>
            <Image source={IMAGES.bottomBubbleDecoration} style={styles.bottomBubbleDecoration}/>

            {/* menu icon */}
            <TouchableOpacity onPress={menuHandler} style={styles.menuIconContainer}>
                <Image source={ICONS.menu} style={styles.menuIcon}/>
            </TouchableOpacity>

            <Text style={styles.headerText}>{isAchived ? 'Archivált Előadások' : 'ÉLŐ Előadások'}</Text>
            <View style={styles.headerLine}></View>

            {/* body ++ */}
            <View style={styles.bodyContainer}>
                {/* filter container + */}
                <View style={styles.filterContainer}>

                    {/* --conditonal rendering here-- */}
                    {!isSortMenuOpen ?
                        <TouchableOpacity
                            style={[styles.achiveTextContainer, {paddingHorizontal: !isAchived ? dimensions.paddingLevel2 : 1}]}
                            onPress={acivedLiveHandler}
                        >
                            <Text style={styles.achiveText}>{isAchived ? 'ÉLŐ' : 'ARCHÍVUM'}</Text>
                        </TouchableOpacity>
                        : <View/>
                    }

                    {/* custom Dropdown Menu */}
                    <>
                        <TouchableOpacity style={styles.dropdownContainer} onPress={sortMenuHandler}>
                            <Text style={styles.dropdownText}>Rendezés</Text>
                            <Image source={ICONS.greenArrowHead} style={styles.dropdownIcon}/>
                        </TouchableOpacity>
                        <View>
                            {/* drop down body */}
                            {isSortMenuOpen &&
                            <View style={styles.dropDownBodyContainer}>
                                {/* item 01 */}
                                <TouchableOpacity style={styles.dropdownItemContainer}
                                                  onPress={() => dropDownItemHandler(SORT.ASC)}>
                                    <Text style={styles.dropdownItem}>Date Á-Zs</Text>
                                </TouchableOpacity>

                                <EmptyView style={styles.dropdownSeparator}/>

                                {/* item 02 */}
                                <TouchableOpacity style={styles.dropdownItemContainer}
                                                  onPress={() => dropDownItemHandler(SORT.DESC)}>
                                    <Text style={styles.dropdownItem}>Dátum Zs-Á</Text>
                                </TouchableOpacity>
                            </View>}
                        </View>
                    </>
                </View>


                {/* --conditonal rendering here-- */}
                {/* flatlist: related video container +*/}
                {!isSortMenuOpen && <View style={styles.VerticalFlatListContainer}>

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
                            <AchivedList isAchive={isAchived} title={item.title} date={item.date}
                                         duration={item.duration}/>
                        )}
                    />

                </View>}


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
        width: '100%',
        paddingRight: dimensions.paddingLevel3,
        paddingLeft: dimensions.paddingLevel4,
        top: dimensions.paddingLevel10 * 1.3,

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

    headerText: {
        position: 'absolute',
        top: dimensions.paddingLevel5,
        right: dimensions.paddingLevel3,

        fontFamily: fontFamilies.OpenSansRegular,
        fontSize: fontSizes.fontLarge,
        color: colors.black,
        textAlign: 'center',
    },

    headerLine: {
        position: 'absolute',
        top: dimensions.paddingLevel10,
        right: dimensions.paddingLevel3,
        borderBottomColor: colors.primary,
        width: dimensions.widthLevel11 * 1.1,
        borderBottomWidth: 1,
    },

    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 100
    },

    achiveTextContainer: {
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.01)',
        zIndex: -1,
    },

    achiveText: {
        fontFamily: fontFamilies.OpenSansRegular,
        fontSize: fontSizes.fontSmall,
        color: 'rgba(0,0,0,0.7)',
        paddingHorizontal: dimensions.paddingLevel1,
        paddingVertical: dimensions.paddingLevel1 * 0.2,

    },

    // dropdown
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        // backgroundColor: 'rgba(0,0,0,0.01)',
        backgroundColor: colors.white,
        zIndex: 101,
        position: 'absolute',
        right: 0,
    },

    dropdownText: {
        fontFamily: fontFamilies.OpenSansRegular,
        fontSize: fontSizes.fontSmall,
        color: 'rgba(0,0,0,0.7)',
        paddingHorizontal: dimensions.paddingLevel1,
        paddingVertical: dimensions.paddingLevel1 * 0.2,
    },

    dropdownIcon: {
        marginLeft: dimensions.paddingLevel1,
        marginRight: dimensions.paddingLevel1,
    },

    dropDownBodyContainer: {
        ...getShadowsV1,
        position: 'absolute',
        top: dimensions.paddingLevel4,
        right: 0,
        backgroundColor: 'rgba(255,255,255,1)',
        width: dimensions.widthLevel12,
        borderRadius: 5,
    },

    dropdownItemContainer: {
        // nothing
    },

    dropdownItem: {
        marginVertical: dimensions.paddingLevel1 * 0.5,
        width: '100%',
        textAlign: 'center',
        paddingVertical: dimensions.paddingLevel1,
    },


    dropdownSeparator: {
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 0.5,
    },

    VerticalFlatListContainer: {
        height: dimensions.fullHeight * 0.8,
        zIndex: 1,
    },
});

export default LiveScreen;
