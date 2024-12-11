import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const OAuthTokenCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AccessToken" source="accessToken" />
        <NumberInput step={1} label="ExpiresIn" source="expiresIn" />
        <TextInput label="RefreshToken" source="refreshToken" />
      </SimpleForm>
    </Create>
  );
};
