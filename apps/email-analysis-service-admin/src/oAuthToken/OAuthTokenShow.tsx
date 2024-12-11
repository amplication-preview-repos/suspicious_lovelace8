import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const OAuthTokenShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AccessToken" source="accessToken" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ExpiresIn" source="expiresIn" />
        <TextField label="ID" source="id" />
        <TextField label="RefreshToken" source="refreshToken" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
