import { useState } from "react";
import {
    StyleSheet,
    Modal,
    Alert,
    Text,
    Pressable,
    Button,
    View,
    Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function UserProfile() {
    const [username, setUsername] = useState("set username");
    const [phoneNumber, setPhoneNumber] = useState("set phone number");
    const [email, setEmail] = useState("set email");
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ alignItems: "center", paddingTop: "10%" }}>
            <Image
                source={{
                    uri: "https://i.pinimg.com/originals/cc/2e/01/cc2e011cc5236801ee8fd6d2fc5dc2c5.jpg",
                }}
                style={{
                    alignSelf: "center",
                    width: 100,
                    height: 100,
                    borderRadius: 100,
                }}
            />

            <Button
                style={[styles.button]}
                title="edit profile"
                onPress={() => setModalVisible(!modalVisible)}
            />
            <View style={styles.fields}>
                <Text>{username} </Text>
            </View>
            <View style={styles.fields}>
                <Text>{email}</Text>
            </View>
            <View style={styles.fields}>
                <Text>{phoneNumber}</Text>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}> Edit Profile</Text>
                        <Image
                            source={{
                                uri: "https://i.pinimg.com/originals/cc/2e/01/cc2e011cc5236801ee8fd6d2fc5dc2c5.jpg",
                            }}
                            style={{
                                alignSelf: "center",
                                width: 100,
                                height: 100,
                                borderWidth: 1,
                                borderColor: "black",
                                borderRadius: 100,
                            }}
                        />

                        <View style={styles.fields}>
                            <TextInput
                                onChangeText={setUsername}
                                value={username}
                            ></TextInput>
                        </View>
                        <View style={styles.fields}>
                            <TextInput
                                onChangeText={setEmail}
                                value={email}
                                inputMode={email}
                            ></TextInput>
                        </View>
                        <View style={styles.fields}>
                            <Text>{phoneNumber}</Text>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Done</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
    button: {
        backgroundColor: "pink",
        borderRadius: 20,
        padding: 10,
        margin: 5,
        elevation: 2,
    },
    title: { fontSize: "20%", fontWeight: "bold", padding: "2%" },
    fields: { alignItems: "center", flexDirection: "row", padding: "1%" },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 50,
        alignItems: "center",
        shadowColor: "#000",
        height: "100%",
        width: "100%",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
