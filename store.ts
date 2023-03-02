import { hookstate, useHookstate } from "@hookstate/core";

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

export interface UserDataModel {
    username: string;
    email: string;
    phoneNumber: string;
    admin: false;
    password: string;
}

const userDataState = hookstate<UserDataModel>({
    username: "User1",
    email: "fuck@example.com",
    phoneNumber: "5555555555",
    admin: false,
    password: "1234",
});

export const useUserDataState = () => {
    const state = useHookstate(userDataState);
    return {
        getUserData: () => state.value,
        setUsername: (input) => state.username.set(input),
    };
};
