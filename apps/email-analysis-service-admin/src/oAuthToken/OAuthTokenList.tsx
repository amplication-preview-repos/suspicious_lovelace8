import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OAuthTokenList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OAuthTokens"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AccessToken" source="accessToken" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ExpiresIn" source="expiresIn" />
        <TextField label="ID" source="id" />
        <TextField label="RefreshToken" source="refreshToken" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
