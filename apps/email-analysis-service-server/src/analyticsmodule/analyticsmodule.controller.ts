import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AnalyticsModuleService } from "./analyticsmodule.service";
import { EmailFetchDto } from "../gmailModule/EmailFetchDto";
import { FrequencyDataDto } from "../analyticsModule/FrequencyDataDto";

@swagger.ApiTags("analyticsModules")
@common.Controller("analyticsModules")
export class AnalyticsModuleController {
  constructor(protected readonly service: AnalyticsModuleService) {}

  @common.Post("/generate-email-frequency")
  @swagger.ApiOkResponse({
    type: FrequencyDataDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateEmailFrequency(
    @common.Body()
    body: EmailFetchDto
  ): Promise<FrequencyDataDto[]> {
        return this.service.GenerateEmailFrequency(body);
      }

  @common.Get("/visualization-data")
  @swagger.ApiOkResponse({
    type: FrequencyDataDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetVisualizationData(
    @common.Body()
    body: EmailFetchDto
  ): Promise<FrequencyDataDto[]> {
        return this.service.GetVisualizationData(body);
      }
}
