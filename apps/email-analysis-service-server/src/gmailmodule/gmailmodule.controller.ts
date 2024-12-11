import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GmailModuleService } from "./gmailmodule.service";
import { EmailFetchDto } from "../gmailModule/EmailFetchDto";

@swagger.ApiTags("gmailModules")
@common.Controller("gmailModules")
export class GmailModuleController {
  constructor(protected readonly service: GmailModuleService) {}

  @common.Post("/auth/gmail")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AuthenticateGmail(
    @common.Body()
    body: EmailFetchDto
  ): Promise<string> {
        return this.service.AuthenticateGmail(body);
      }

  @common.Get("/emails")
  @swagger.ApiOkResponse({
    type: EmailFetchDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchEmails(
    @common.Body()
    body: EmailFetchDto
  ): Promise<EmailFetchDto[]> {
        return this.service.FetchEmails(body);
      }
}
