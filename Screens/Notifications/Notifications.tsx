import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Alert,
    Text,
    Button,
    TouchableOpacity,
    View,
    Image,
} from "react-native";

export default function Notifications() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log("image tapped")}>
                <Image
                    source={{
                        width: 400,
                        height: 400,
                        uri: "https://i.pinimg.com/originals/cc/2e/01/cc2e011cc5236801ee8fd6d2fc5dc2c5.jpg",
                    }}
                />
            </TouchableOpacity>
            <Button
                title="Click Me"
                onPress={() =>
                    Alert.alert("Title", "My Message", [
                        { text: "Yes" },
                        { text: "No" },
                    ])
                }
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
