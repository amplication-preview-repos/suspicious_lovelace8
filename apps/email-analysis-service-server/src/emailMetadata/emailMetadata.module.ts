import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmailMetadataModuleBase } from "./base/emailMetadata.module.base";
import { EmailMetadataService } from "./emailMetadata.service";
import { EmailMetadataController } from "./emailMetadata.controller";
import { EmailMetadataResolver } from "./emailMetadata.resolver";

@Module({
  imports: [EmailMetadataModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmailMetadataController],
  providers: [EmailMetadataService, EmailMetadataResolver],
  exports: [EmailMetadataService],
})
export class EmailMetadataModule {}
