export type EmailMetadata = {
  createdAt: Date;
  date: Date | null;
  id: string;
  recipient: string | null;
  sender: string | null;
  subject: string | null;
  threadId: string | null;
  updatedAt: Date;
};
