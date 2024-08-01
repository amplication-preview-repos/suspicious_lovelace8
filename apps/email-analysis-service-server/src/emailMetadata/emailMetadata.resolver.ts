import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmailMetadataResolverBase } from "./base/emailMetadata.resolver.base";
import { EmailMetadata } from "./base/EmailMetadata";
import { EmailMetadataService } from "./emailMetadata.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmailMetadata)
export class EmailMetadataResolver extends EmailMetadataResolverBase {
  constructor(
    protected readonly service: EmailMetadataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
