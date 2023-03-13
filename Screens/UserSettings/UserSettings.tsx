import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { useUserSettingsState } from "../../store";
import { DataStore } from "aws-amplify";
import { UserSettingsModel } from "../../src/models";

export default function UserSetting() {
    const userSettingsState = useUserSettingsState();
    const userSettingsData = userSettingsState.getUserSettings()

    async function updateSettings(updatedSettings) {
        await DataStore.save(
            UserSettingsModel.copyOf(userSettingsData, updated => {
              updated.textNotification = updatedSettings.text;
              updated.emailNotification = updatedSettings.email;
            })
          );
    }

    return (
        <View>
            <View>
                <Text style={styles.header}> Notification Preferences</Text>

                <View style={styles.checkboxContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={userSettingsData.textNotification}
                        onValueChange={(value) => updateSettings({text: value, email: userSettingsData.emailNotification})}
                        color={"#4630EB"}
                    />
                    <Text>SMS Message</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={userSettingsData.emailNotification}
                        onValueChange={(value) => updateSettings({email: value, text: userSettingsData.textNotification})}
                        color={"#4630EB"}
                    />
                    <Text>Email</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        fontSize: 16,
        paddingTop: 20,
        paddingBottom: 10,
    },
    checkboxContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: "35%",
    },
    checkbox: {
        margin: 8,
    },
});
