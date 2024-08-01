import { Module } from "@nestjs/common";
import { GmailModuleService } from "./gmailmodule.service";
import { GmailModuleController } from "./gmailmodule.controller";
import { GmailModuleResolver } from "./gmailmodule.resolver";

@Module({
  controllers: [GmailModuleController],
  providers: [GmailModuleService, GmailModuleResolver],
  exports: [GmailModuleService],
})
export class GmailModuleModule {}
