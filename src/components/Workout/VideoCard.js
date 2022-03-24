// ** Import Core
import React, {useState, useEffect} from 'react';
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
import EmptyView from '../EmptyView';
// ** external components
import VideoPlayer from 'react-native-video-player';



const VideoCard = ({header=null, }) => {

  return (
    <View style={[styles.container, {marginTop: header ? dimensions.heightLevel1: 0}]}>
            {header && <Text style={styles.headerText}>{header}</Text>}

            <EmptyView style={{marginTop: dimensions.heightLevel1}}/>

            {/* Video player */}
            <VideoPlayer
                // video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                video={require('../../assets/videos/gym_sample.mp4')}
                videoWidth={1600}
                videoHeight={900}
                autoplay={false}
                defaultMuted
                endWithThumbnail
                // thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                thumbnail={require('../../assets/images/video_frame_back.webp')}
                style={styles.videoPlayer}
              />

              
    </View>
  );
};

const styles = StyleSheet.create({
        container: {
                backgroundColor:colors.transfarent,
                width: "100%",
        },

        headerText: {
                color: colors.black,
                fontFamily: fontFamilies.OpenSansRegular,
                fontSize: fontSizes.fontXLarge,
        },

        videoPlayer: {
                borderRadius: 12,
        },
        
})

export default VideoCard;
