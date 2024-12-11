import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OAuthTokenResolverBase } from "./base/oAuthToken.resolver.base";
import { OAuthToken } from "./base/OAuthToken";
import { OAuthTokenService } from "./oAuthToken.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OAuthToken)
export class OAuthTokenResolver extends OAuthTokenResolverBase {
  constructor(
    protected readonly service: OAuthTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
