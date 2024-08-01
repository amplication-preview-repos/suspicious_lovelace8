import { EmailMetadataWhereInput } from "./EmailMetadataWhereInput";
import { EmailMetadataOrderByInput } from "./EmailMetadataOrderByInput";

export type EmailMetadataFindManyArgs = {
  where?: EmailMetadataWhereInput;
  orderBy?: Array<EmailMetadataOrderByInput>;
  skip?: number;
  take?: number;
};
