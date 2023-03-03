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
