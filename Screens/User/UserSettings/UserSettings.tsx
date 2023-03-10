import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { useSettingsState } from "../../../store";

export default function UserSetting() {
    const state = useSettingsState();

    function setSMS() {
        if (state.getEmailBoxValue() === false) {
            return null;
        } else state.setSMSBoxValue();
    }

    function setEmail() {
        if (state.getSMSBoxValue() === false) {
            return null;
        } else state.setEmailBoxValue();
    }

    return (
        <View>
            <View>
                <Text style={styles.header}> Notification Preferences</Text>

                <View style={styles.checkboxContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={state.getSMSBoxValue()}
                        onValueChange={setSMS}
                        color={state.getSMSBoxValue() ? "#4630EB" : undefined}
                    />
                    <Text>SMS Message</Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={state.getEmailBoxValue()}
                        onValueChange={setEmail}
                        color={state.getEmailBoxValue() ? "#4630EB" : undefined}
                    />
                    <Text>Email</Text>
                </View>

                <Text style={styles.textCenter}>
                    Please select at least one.
                </Text>
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
    textCenter: { textAlign: "center", paddingVertical: 5 },
});
