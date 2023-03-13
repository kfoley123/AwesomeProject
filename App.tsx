import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./Screens/SignInScreen/SignInScreen";
import UserView from "./Screens/User/UserView/UserView";
import AdminView from "./Screens/Admin/AdminView/AdminView";
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
                ) : userState.checkAdminData() ? (
                    <>
                        <Stack.Screen
                            name="AdminView"
                            component={AdminView}
                            options={{ headerShown: false }}
                        />
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
