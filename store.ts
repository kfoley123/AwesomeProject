import { hookstate, useHookstate } from "@hookstate/core";

// User Settings

export interface SettingsModel {
    SMSBoxChecked: boolean;
    emailBoxChecked: boolean;
}

const settingsState = hookstate<SettingsModel>({
    SMSBoxChecked: true,
    emailBoxChecked: true,
});

export const useSettingsState = () => {
    const state = useHookstate(settingsState);
    return {
        getSMSBoxValue: () => state.SMSBoxChecked.value,
        getEmailBoxValue: () => state.emailBoxChecked.value,
        setSMSBoxValue: () => state.SMSBoxChecked.set((v) => !v),
        setEmailBoxValue: () => state.emailBoxChecked.set((v) => !v),
    };
};

// User Data

export interface UserDataModel {
    username: string;
    email: string;
    phoneNumber: string;
    admin: false;
    password: string;
}

const userDataState = hookstate<UserDataModel>({
    username: "User1",
    email: "me@me.com",
    phoneNumber: "5555555555",
    admin: false,
    password: "1234",
});

export const useUserDataState = () => {
    const state = useHookstate(userDataState);
    return {
        getUserData: () => state.value,
        setUserData: (formData) => state.set(formData),
    };
};

// Logged In State

export interface UserLoggedInModel {
    loggedin: boolean;
}

const loggedInState = hookstate<UserLoggedInModel>({
    loggedin: false,
});

export const useLoggedInState = () => {
    const state = useHookstate(loggedInState);
    return {
        getLoggedInState: () => state.loggedin.value,
        toggleLoggedInState: () => state.loggedin.set((v) => !v),
    };
};
