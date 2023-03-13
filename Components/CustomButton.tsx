import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type ButtonProps = {
    title: string;
    buttonWidth: number;
    buttonOnPress?: () => void;
    isDisabled?: boolean;
    buttonType: buttonOptions;
};

export enum buttonOptions {
    STANDARD,
    REMOVE,
}

export default function CustomButton(props: ButtonProps) {
    const { title, buttonWidth, buttonOnPress, isDisabled, buttonType } = props;

    return (
        <TouchableOpacity
            disabled={isDisabled}
            onPress={() => buttonOnPress()}
            style={[
                buttonType === buttonOptions.STANDARD
                    ? { ...styles.button, width: buttonWidth }
                    : { ...styles.removeButton, width: buttonWidth },
            ]}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "deepskyblue",
        textAlign: "center",
        borderRadius: 7,
        padding: 10,
        margin: 5,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        textAlign: "center",
    },
    removeButton: {
        backgroundColor: "grey",
        textAlign: "center",
        borderRadius: 7,
        padding: 10,
        margin: 5,
        elevation: 2,
    },
});
