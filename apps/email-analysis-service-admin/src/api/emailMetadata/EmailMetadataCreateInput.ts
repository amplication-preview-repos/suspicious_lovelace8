export type EmailMetadataCreateInput = {
  date?: Date | null;
  recipient?: string | null;
  sender?: string | null;
  subject?: string | null;
  threadId?: string | null;
};
