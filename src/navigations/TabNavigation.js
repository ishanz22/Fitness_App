import * as React from 'react';
import {Image} from 'react-native';
import {colors, dimensions, fontFamilies, fontSizes} from '../configurations/constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';




import HomeScreen from '../screens/tab/HomeScreen';
import LiveScreen from '../screens/tab/LiveScreen';
import ProfileScreen from '../screens/tab/ProfileScreen';
import WorkoutScreen from '../screens/tab/WorkoutScreen';
import RecipeScreen from '../screens/tab/RecipeScreen';
import { ProfileNavigation, RecipeNavigation, WorkoutNavigation } from './StackNavigation';

// import WorkoutPackageScreen from '../screens/tab/WorkoutPackageScreen';
// import WorkoutSubScreen from '../screens/tab/WorkoutSubScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
        return (
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconSource;

                        if (route.name === 'Kezdőlap') {
                            iconSource = focused
                                ? require('../assets/images/home_active.webp')
                                : require('../assets/images/home_inactive.webp');
                        } else if (route.name === 'Edzések') {
                            iconSource = focused
                                ? require('../assets/images/workout_active.webp')
                                : require('../assets/images/workout_inactive.webp')
                        } else if (route.name === 'Receptek') {
                            iconSource = focused
                                ? require('../assets/images/recipe_active.webp')
                                : require('../assets/images/recipe_inactive.webp');
                        } else if (route.name === 'ÉLŐ') {
                            iconSource = focused
                                ? require('../assets/images/zoom_active.webp')
                                : require('../assets/images/zoom_inactive.webp');
                        } else if (route.name === 'Profil') {
                            iconSource = focused
                                ? require('../assets/images/profile_active.webp')
                                : require('../assets/images/profile_inactive.webp');
                        }

                        // You can return any component that you like here!
                        return <Image source={iconSource} style={{width: size, height: size}}/>
                    },
                    tabBarActiveTintColor: colors.white,
                    tabBarInactiveTintColor: colors.white,
                    tabBarShowLabel: true,
                    tabBarStyle: {
                      paddingVertical: Platform.OS === 'ios' ? 20  : 0 ,
                      paddingBottom: dimensions.paddingLevel1 * 1.5,
                      height: dimensions.heightLevel6,
                      backgroundColor: colors.primary,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      borderTopColor: colors.white,
                    },
                    headerShown: false
                })}

                >


                <Tab.Screen name="Kezdőlap" component={HomeScreen}/>
                <Tab.Screen name="Edzések" component={WorkoutNavigation}/>
                <Tab.Screen name="Receptek" component={RecipeNavigation}/>
                <Tab.Screen name="ÉLŐ" component={LiveScreen}/>
                <Tab.Screen name="Profil" component={ProfileNavigation}/>
            </Tab.Navigator>
        );
    }

    export default TabNavigation;
