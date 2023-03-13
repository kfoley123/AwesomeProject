// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AccountTypes = {
  "ADMIN": "ADMIN",
  "USER": "USER"
};

const { UserModel, UserSettingsModel } = initSchema(schema);

export {
  UserModel,
  UserSettingsModel,
  AccountTypes
};