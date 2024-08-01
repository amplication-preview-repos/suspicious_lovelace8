import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OAuthTokenModuleBase } from "./base/oAuthToken.module.base";
import { OAuthTokenService } from "./oAuthToken.service";
import { OAuthTokenController } from "./oAuthToken.controller";
import { OAuthTokenResolver } from "./oAuthToken.resolver";

@Module({
  imports: [OAuthTokenModuleBase, forwardRef(() => AuthModule)],
  controllers: [OAuthTokenController],
  providers: [OAuthTokenService, OAuthTokenResolver],
  exports: [OAuthTokenService],
})
export class OAuthTokenModule {}
