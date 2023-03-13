import React, { useEffect } from "react";
import { Pressable, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
    NavigationContainer,
    getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserTabs from "./Screens/UserTabs/UserTabs";
import UserProfile from "./Screens/UserProfile/UserProfile";
import UserSettings from "./Screens/UserSettings/UserSettings";

//Amplify
import { Amplify, DataStore} from 'aws-amplify'
import awsconfig from './src/aws-exports'
import {  UserModel, UserSettingsModel } from "./src/models";
import {  useUserSettingsState, useUserState } from "./store";

Amplify.configure(awsconfig)

const Stack = createStackNavigator();

function getHeaderTitle(route) {
    return getFocusedRouteNameFromRoute(route);
}

export default function App() {
  
    const userDBState = useUserState()
    const userSettingsState = useUserSettingsState()

    useEffect(() => {
        const userSubscription = DataStore.observeQuery(UserModel).subscribe((snapshot) => {
            const {items} = snapshot;
           
            userDBState.setUserStateData(items[0])
        });

        const id = userDBState.getUserStateData().userModelUserSettingsModelId;
        const settingsSubscription = DataStore.observeQuery(UserSettingsModel, p => p.id.eq(id)).subscribe(snapshot => {
            const {items} = snapshot;
            
            userSettingsState.setUserSettings(items[0])
          });

        return function cleanup() {
            userSubscription.unsubscribe();
            settingsSubscription.unsubscribe()
          }

    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Tabs"
                    component={UserTabs}
                    options={({ navigation, route }) => ({
                        headerTitle: getHeaderTitle(route),
                        headerRight: () => (
                            <Pressable
                                onPress={() => navigation.navigate("Profile")}
                            >
                                <Image
                                    source={{
                                        uri: "https://i.pinimg.com/originals/cc/2e/01/cc2e011cc5236801ee8fd6d2fc5dc2c5.jpg",
                                    }}
                                    style={styles.profileimg}
                                />
                            </Pressable>
                            
                        ),
                        headerLeft: () => (
                            <Pressable
                                onPress={() => navigation.navigate("Settings")}
                            >
                                <Ionicons
                                    name={"md-settings-outline"}
                                    style={styles.settingsIcon}
                                />
                            </Pressable>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Profile"
                    options={() => ({ headerBackTitle: "Back" })}
                    component={UserProfile}
                />
                <Stack.Screen
                    name="Settings"
                    options={() => ({ headerBackTitle: "Back" })}
                    component={UserSettings}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    profileimg: {
        width: 40,
        height: 40,
        borderColor: "black",
        borderWidth: 0.5,
        borderRadius: 100,
        marginRight: 21,
        marginBottom: 15,
    },
    settingsIcon: {
        color: "dimgray",
        fontSize: 25,
        height: 38,
        marginLeft: 20,
    },
});

