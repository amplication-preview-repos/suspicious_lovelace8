import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmailMetadataService } from "./emailMetadata.service";
import { EmailMetadataControllerBase } from "./base/emailMetadata.controller.base";

@swagger.ApiTags("emailMetadata")
@common.Controller("emailMetadata")
export class EmailMetadataController extends EmailMetadataControllerBase {
  constructor(
    protected readonly service: EmailMetadataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
