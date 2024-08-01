import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OAuthTokenService } from "./oAuthToken.service";
import { OAuthTokenControllerBase } from "./base/oAuthToken.controller.base";

@swagger.ApiTags("oAuthTokens")
@common.Controller("oAuthTokens")
export class OAuthTokenController extends OAuthTokenControllerBase {
  constructor(
    protected readonly service: OAuthTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
