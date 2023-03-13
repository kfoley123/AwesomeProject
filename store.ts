import { hookstate, useHookstate } from "@hookstate/core";
import { UserModel, UserSettingsModel } from "./src/models";

// AMPLIFY DATA

const userState = hookstate<UserModel>({} as UserModel);

export const useUserState = () => {
    const state = useHookstate(userState);
    return {
        getUserStateData: () => state.value,
        setUserStateData: (data) => state.set(data)
    };
};


const userSettingsState = hookstate<UserSettingsModel>({} as UserSettingsModel);

export const useUserSettingsState = () => {
    const state = useHookstate(userSettingsState);
    return {
        getUserSettings: () => state.value,
        setUserSettings: (data) => state.set(data),
    };
};