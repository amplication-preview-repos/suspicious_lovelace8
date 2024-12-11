import * as graphql from "@nestjs/graphql";
import { GmailAuthDto } from "../gmailModule/GmailAuthDto";
import { EmailFetchDto } from "../gmailModule/EmailFetchDto";
import { GmailModuleService } from "./gmailmodule.service";

export class GmailModuleResolver {
  constructor(protected readonly service: GmailModuleService) {}

  @graphql.Mutation(() => String)
  async AuthenticateGmail(
    @graphql.Args()
    args: GmailAuthDto
  ): Promise<string> {
    return this.service.AuthenticateGmail(args);
  }

  @graphql.Query(() => [EmailFetchDto])
  async FetchEmails(
    @graphql.Args()
    args: EmailFetchDto
  ): Promise<EmailFetchDto[]> {
    return this.service.FetchEmails(args);
  }
}
