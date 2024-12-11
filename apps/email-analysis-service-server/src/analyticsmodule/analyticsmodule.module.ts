import { Module } from "@nestjs/common";
import { AnalyticsModuleService } from "./analyticsmodule.service";
import { AnalyticsModuleController } from "./analyticsmodule.controller";
import { AnalyticsModuleResolver } from "./analyticsmodule.resolver";

@Module({
  controllers: [AnalyticsModuleController],
  providers: [AnalyticsModuleService, AnalyticsModuleResolver],
  exports: [AnalyticsModuleService],
})
export class AnalyticsModuleModule {}
