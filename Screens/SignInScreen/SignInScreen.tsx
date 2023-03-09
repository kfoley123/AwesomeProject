import React, { useState } from "react";
import {
    Image,
    TouchableOpacity,
    SafeAreaView,
    Text,
    StyleSheet,
    StatusBar,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import { useLoggedInState, useUserDataState } from "../../store";

export default function SignInScreen() {
    const userState = useUserDataState();
    const loggedInState = useLoggedInState();

    const [failedLogin, setFailedLogin] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    const onSubmit = (data) => {
        const userData = userState.getUserData();
        if (
            userData.email === data.email.toLowerCase() &&
            userData.password === data.password
        ) {
            loggedInState.toggleLoggedInState();
        }
        setFailedLogin(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Image source={require("./logo.png")} style={styles.logo} />

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        autoCapitalize={"none"}
                        onBlur={onBlur}
                        placeholder={"Email"}
                        onChangeText={onChange}
                        keyboardType={"email-address"}
                        textContentType={"emailAddress"}
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
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={() => handleSubmit(onSubmit)()}
                        placeholder={"Password"}
                        onChangeText={onChange}
                        secureTextEntry={true}
                        textContentType={"password"}
                        value={value}
                    />
                )}
                name="password"
            />
            {errors.password && <Text>Password is required.</Text>}
            {failedLogin && (
                <Text>Please check your credentials and try again.</Text>
            )}
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
    logo: { width: 225, height: 225, marginTop: 40 },
    input: {
        backgroundColor: "white",
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
