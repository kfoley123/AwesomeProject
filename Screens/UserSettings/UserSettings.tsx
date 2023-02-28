import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

export default function UserSetting() {
    const [SMSChecked, setSMSChecked] = useState(false);
    const [isChecked, setChecked] = useState(true);
    return (
        <View>
            <Text style={styles.header}> Notification Preferences</Text>
            <View style={styles.checkboxContainer}>
                <Checkbox
                    style={styles.checkbox}
                    value={SMSChecked}
                    onValueChange={setSMSChecked}
                    color={SMSChecked ? "#4630EB" : undefined}
                />
                <Text>SMS Message</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? "#4630EB" : undefined}
                />
                <Text>Email</Text>
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
