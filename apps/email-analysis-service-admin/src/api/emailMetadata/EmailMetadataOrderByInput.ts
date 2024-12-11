import { SortOrder } from "../../util/SortOrder";

export type EmailMetadataOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  recipient?: SortOrder;
  sender?: SortOrder;
  subject?: SortOrder;
  threadId?: SortOrder;
  updatedAt?: SortOrder;
};
