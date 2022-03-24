// ** Import Core
// ** React Navigation v6
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ForgetPasswordScreen from '../screens/stack/ForgetPasswordScreen';
import FutherSettingScreen from '../screens/stack/FutherSettingScreen';
// ** Import stack screen
import LandingScreen from '../screens/stack/LandingScreen';
import RecipeSubScreen from '../screens/stack/RecipeSubScreen';
import RegisterScreen from '../screens/stack/RegisterScreen';
import SettingScreen from '../screens/stack/SettingScreen';
import SignInScreen from '../screens/stack/SignInScreen';
import WorkoutPackageScreen from '../screens/stack/WorkoutPackageScreen';
import WorkoutSubScreen from '../screens/stack/WorkoutSubScreen';
import ProfileScreen from '../screens/tab/ProfileScreen';
import RecipeScreen from '../screens/tab/RecipeScreen';
import WorkoutScreen from '../screens/tab/WorkoutScreen';








const Stack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const WorkoutStack = createNativeStackNavigator();
const RecipeStack = createNativeStackNavigator();

const StackNavigation = () => {

  return (
    <Stack.Navigator
      initialRouteName="LandingScreen"
      screenOptions={{ headerShown: false }}
    >

      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
      {/* <Stack.Screen name="RecipeSubScreen" component={RecipeSubScreen} /> */}
    </Stack.Navigator>
  )
}

const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="SettingScreen" component={SettingScreen} />
      <ProfileStack.Screen name="FutherSettingScreen" component={FutherSettingScreen} />
    </ProfileStack.Navigator>
  )
};

const WorkoutNavigation = () => {
  return (
    <WorkoutStack.Navigator
      initialRouteName="WorkoutScreen"
      screenOptions={{ headerShown: false }}
    >
      <WorkoutStack.Screen name="WorkoutScreen" component={WorkoutScreen} />
      <WorkoutStack.Screen name="WorkoutPackageScreen" component={WorkoutPackageScreen} />
      <WorkoutStack.Screen name="WorkoutSubScreen" component={WorkoutSubScreen} />
    </WorkoutStack.Navigator>
  )
};

const RecipeNavigation = () => {
  return (
    <RecipeStack.Navigator
      initialRouteName="RecipeScreen"
      screenOptions={{ headerShown: false }}
    >
      <RecipeStack.Screen name="RecipeScreen" component={RecipeScreen} />
      <RecipeStack.Screen name="RecipeSub" component={RecipeSubScreen} />
    </RecipeStack.Navigator>
  )
};

export {
  StackNavigation,
  ProfileNavigation,
  WorkoutNavigation,
  RecipeNavigation,
};
