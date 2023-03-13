import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum AccountTypes {
  ADMIN = "ADMIN",
  USER = "USER"
}



type EagerUserModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly type?: AccountTypes | keyof typeof AccountTypes | null;
  readonly UserSettingsModel?: UserSettingsModel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userModelUserSettingsModelId?: string | null;
}

type LazyUserModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly type?: AccountTypes | keyof typeof AccountTypes | null;
  readonly UserSettingsModel: AsyncItem<UserSettingsModel | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userModelUserSettingsModelId?: string | null;
}

export declare type UserModel = LazyLoading extends LazyLoadingDisabled ? EagerUserModel : LazyUserModel

export declare const UserModel: (new (init: ModelInit<UserModel>) => UserModel) & {
  copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel>) => MutableModel<UserModel> | void): UserModel;
}

type EagerUserSettingsModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSettingsModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly emailNotification?: boolean | null;
  readonly textNotification?: boolean | null;
  readonly accountType?: AccountTypes | keyof typeof AccountTypes | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserSettingsModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSettingsModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly emailNotification?: boolean | null;
  readonly textNotification?: boolean | null;
  readonly accountType?: AccountTypes | keyof typeof AccountTypes | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserSettingsModel = LazyLoading extends LazyLoadingDisabled ? EagerUserSettingsModel : LazyUserSettingsModel

export declare const UserSettingsModel: (new (init: ModelInit<UserSettingsModel>) => UserSettingsModel) & {
  copyOf(source: UserSettingsModel, mutator: (draft: MutableModel<UserSettingsModel>) => MutableModel<UserSettingsModel> | void): UserSettingsModel;
}