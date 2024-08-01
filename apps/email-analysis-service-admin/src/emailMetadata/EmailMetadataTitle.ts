import { EmailMetadata as TEmailMetadata } from "../api/emailMetadata/EmailMetadata";

export const EMAILMETADATA_TITLE_FIELD = "subject";

export const EmailMetadataTitle = (record: TEmailMetadata): string => {
  return record.subject?.toString() || String(record.id);
};
