import React from "react";
import {
    Image,
    TouchableOpacity,
    SafeAreaView,
    Text,
    StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import { useLoggedInState, useUserDataState } from "../../store";

export default function SignInScreen() {
    const userState = useUserDataState();
    const loggedInState = useLoggedInState();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    const onSubmit = (data) => {
        //store values user puts in as data
        // get data from state
        const userData = userState.getUserData();
        // check if values from form matches values from state
        if (
            userData.email === data.email &&
            userData.password === data.password
        ) {
            loggedInState.toggleLoggedInState();
        }
        //if they match change loggedin state to true
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("./logo.png")} style={styles.logo} />

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        placeholder={"Email"}
                        onChangeText={onChange}
                        keyboardType={"email-address"}
                        value={value}
                    />
                )}
                name="email"
            />
            {errors.email && <Text>Email is required.</Text>}
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        placeholder={"Password"}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
            />
            {errors.email && <Text>Password is required.</Text>}
            <TouchableOpacity
                style={styles.button}
                disabled={Object.keys(errors).length > 0}
                onPress={() => {
                    handleSubmit(onSubmit)();
                }}
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    logo: { width: 300, height: 300, marginVertical: 35 },
    input: {
        backgroundColor: "white",
        borderColor: "black",
        height: 40,
        padding: 10,
        borderRadius: 4,
        margin: 10,
        width: "90%",
    },
    button: {
        backgroundColor: "deepskyblue",
        height: 45,
        justifyContent: "center",
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        elevation: 2,
        width: "90%",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "800",
        textAlign: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 25,
        textAlign: "center",
    },
    fields: { alignItems: "center", flexDirection: "row", padding: "1%" },
});
