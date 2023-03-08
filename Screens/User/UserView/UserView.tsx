import React from "react";
import { Pressable, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserTabs from "../UserTabs/UserTabs";
import UserProfile from "../UserProfile/UserProfile";
import UserSettings from "../UserSettings/UserSettings";

const Stack = createStackNavigator();

function getHeaderTitle(route) {
    return getFocusedRouteNameFromRoute(route);
}

export default function UserView() {
    return (
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
                                style={styles.profileImg}
                            />
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <Pressable
                            onPress={() => navigation.navigate("Settings")}
                        >
                            <Ionicons
                                name={"md-settings-outline"}
                                style={styles.icon}
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
    );
}

const styles = StyleSheet.create({
    profileImg: {
        width: 40,
        height: 40,
        borderColor: "black",
        borderWidth: 0.5,
        borderRadius: 100,
        marginRight: 21,
        marginBottom: 15,
    },
    icon: {
        color: "dimgray",
        fontSize: 25,
        height: 38,
        marginLeft: 20,
    },
});
