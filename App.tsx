import React from "react";
import { Pressable, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
    NavigationContainer,
    getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserTabs from "./Screens/User/UserTabs/UserTabs";
import UserProfile from "./Screens/User/UserProfile/UserProfile";
import UserSettings from "./Screens/User/UserSettings/UserSettings";
import SignInScreen from "./Screens/SignInScreen/SignInScreen";
import UserView from "./Screens/User/UserView/UserView";
import { useLoggedInState, useUserDataState } from "./store";

const Stack = createStackNavigator();

export default function App() {
    const state = useLoggedInState();
    const userState = useUserDataState();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!state.getLoggedInState() ? (
                    <>
                        <Stack.Screen
                            name="Sign In"
                            component={SignInScreen}
                            options={{ headerShown: false }}
                        />
                    </>
                ) : userState.getAdminData() ? (
                    <>
                        <Text> Admin view </Text>
                    </>
                ) : (
                    <Stack.Screen
                        name="UserView"
                        component={UserView}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
