import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmailMetadataWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  recipient?: StringNullableFilter;
  sender?: StringNullableFilter;
  subject?: StringNullableFilter;
  threadId?: StringNullableFilter;
};
