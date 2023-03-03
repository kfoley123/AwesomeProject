import React, { useState } from "react";
import {
    StyleSheet,
    Modal,
    Alert,
    Text,
    TextInput,
    Pressable,
    Button,
    View,
    Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useUserDataState } from "../../store";

export default function UserProfile() {
    const state = useUserDataState();
    const user = state.getUserData();

    const [modalVisible, setModalVisible] = useState(false);

    function updateUserData(formData) {
        state.setUserData(formData);
    }

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
        },
    });

    const onSubmit = (data) => updateUserData(data);

    return (
        <View style={{ alignItems: "center", paddingTop: "10%" }}>
            <Image
                source={{
                    uri: "https://i.pinimg.com/originals/cc/2e/01/cc2e011cc5236801ee8fd6d2fc5dc2c5.jpg",
                }}
                style={styles.profileImg}
            />

            <Button
                title="edit profile"
                onPress={() => setModalVisible(!modalVisible)}
            />
            <View style={styles.fields}>
                <Text>{user.username} </Text>
            </View>
            <View style={styles.fields}>
                <Text>{user.email}</Text>
            </View>
            <View style={styles.fields}>
                <Text>{user.phoneNumber}</Text>
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
                            style={styles.profileImgModal}
                        />
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    style={styles.input}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    autoCapitalize={"words"}
                                    value={value}
                                />
                            )}
                            name="username"
                        />
                        {errors.username && <Text>Name is required.</Text>}

                        <Controller
                            control={control}
                            rules={{
                                maxLength: 100,
                                required: true,
                                // eslint-disable-next-line no-useless-escape
                                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    style={styles.input}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    keyboardType={"email-address"}
                                    value={value}
                                />
                            )}
                            name="email"
                        />
                        {errors.email && (
                            <Text>A valid email is required.</Text>
                        )}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                minLength: 9,
                                maxLength: 10,
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    style={styles.input}
                                    onBlur={onBlur}
                                    keyboardType={"numeric"}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="phoneNumber"
                        />
                        {errors.phoneNumber && (
                            <Text>Valid phone number is required.</Text>
                        )}

                        <View style={styles.buttons}>
                            <Pressable
                                style={styles.button}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    reset(user);
                                }}
                            >
                                <Text>Cancel</Text>
                            </Pressable>

                            <Pressable
                                style={styles.button}
                                disabled={Object.keys(errors).length > 0}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    handleSubmit(onSubmit)();
                                }}
                            >
                                <Text>Done</Text>
                            </Pressable>
                        </View>
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
    input: {
        backgroundColor: "white",
        borderColor: "black",
        height: 40,
        padding: 10,
        borderRadius: 4,
        margin: 10,
    },
    button: {
        backgroundColor: "pink",
        justifyContent: "center",
        borderRadius: 100,
        padding: 10,
        margin: 5,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 25,
        textAlign: "center",
    },
    profileImg: {
        alignSelf: "center",
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    profileImgModal: {
        alignSelf: "center",
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 100,
    },
    fields: { alignItems: "center", flexDirection: "row", padding: "1%" },
    buttons: { flexDirection: "row", justifyContent: "center" },
    modalView: {
        margin: 20,
        backgroundColor: "lightgrey",
        paddingHorizontal: 50,
        paddingTop: 60,
        height: "100%",
        width: "100%",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
