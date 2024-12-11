import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const OAuthTokenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AccessToken" source="accessToken" />
        <NumberInput step={1} label="ExpiresIn" source="expiresIn" />
        <TextInput label="RefreshToken" source="refreshToken" />
      </SimpleForm>
    </Edit>
  );
};
