
// ** react navigation
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from 'react';
import { LogBox, SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
// ** redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// ** Import constant
import { basicStyles, colors } from './configurations/constants';
import DrawerNavigation from './navigations/DrawerNavigation';
import { persistor, store } from './redux/store/index';
import SplashScreen from 'react-native-splash-screen';



// ** The new version, of react-native-gesture-handler send warning if you use an old API version, but also if one of your package/library use it.
LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const App = () => {
    // ** [Warning]: useDispatch() can't be use in this component/ Wrapper("Provider") issue

    const isDarkMode = useColorScheme() === 'dark';

useEffect(() => {
  // ** SplashScreen
  SplashScreen.hide();
}, []);


    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaView style={[basicStyles.miniFlexWrapper, { backgroundColor: colors.white }]}>
                    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

                    {/*=================================================*/}
                    {/* Root Navigation */}
                    {/*=================================================*/}
                    <NavigationContainer>

                        <DrawerNavigation />


                    </NavigationContainer>

                    {/*=================================================*/}

                </SafeAreaView>
            </PersistGate>
        </Provider>
    );
};

const styles = StyleSheet.create({});

export default App;
