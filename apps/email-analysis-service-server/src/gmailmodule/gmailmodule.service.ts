import { Injectable } from "@nestjs/common";
import { GmailAuthDto } from "../gmailModule/GmailAuthDto";
import { EmailFetchDto } from "../gmailModule/EmailFetchDto";

@Injectable()
export class GmailModuleService {
  constructor() {}
  async AuthenticateGmail(args: GmailAuthDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async FetchEmails(args: EmailFetchDto): Promise<EmailFetchDto[]> {
    throw new Error("Not implemented");
  }
}
