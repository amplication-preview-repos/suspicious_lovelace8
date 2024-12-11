import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EmailMetadataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Recipient" source="recipient" type="email" />
        <TextInput label="Sender" source="sender" type="email" />
        <TextInput label="Subject" source="subject" />
        <TextInput label="ThreadId" source="threadId" />
      </SimpleForm>
    </Edit>
  );
};
