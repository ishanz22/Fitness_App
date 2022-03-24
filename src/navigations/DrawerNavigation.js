import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import DrawerComponent from "../components/DrawerComponent";
import { colors } from "../configurations/constants";
import RecipeSubScreen from "../screens/stack/RecipeSubScreen";
import { StackNavigation } from './StackNavigation';
import TabNavigation from "./TabNavigation";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

        const token = useSelector(state => state.authState.token);

        const [value, setValue] = useState("StackNavigation");

        useEffect(() => {
                if (token) {
                        setValue("tabNavigation");
                } else {
                        setValue("stackNavigation");
                }

        }, [token])

        return (
                <Drawer.Navigator
                        screenOptions={{
                                headerShown: false,
                                swipeEdgeWidth: 0,
                                drawerStyle: {
                                        backgroundColor: colors.transfarent,
                                },
                        }}
                        initialRouteName={value}
                        drawerContent={props => <DrawerComponent navigation={props.navigation} />}
                        edgeWidth={0} drawerStyle={{ backgroundColor: 'transparent' }}
                >

                        {
                                token ?
                                        <Drawer.Screen name="tabNavigation" component={TabNavigation} />
                                        :
                                        <Drawer.Screen name="stackNavigation" component={StackNavigation} />

                        }

                        <Drawer.Screen name="RecipeSubScreen" component={RecipeSubScreen} />

                </Drawer.Navigator>

        );
}

export default DrawerNavigator;