import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EmailMetadataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Recipient" source="recipient" type="email" />
        <TextInput label="Sender" source="sender" type="email" />
        <TextInput label="Subject" source="subject" />
        <TextInput label="ThreadId" source="threadId" />
      </SimpleForm>
    </Create>
  );
};
