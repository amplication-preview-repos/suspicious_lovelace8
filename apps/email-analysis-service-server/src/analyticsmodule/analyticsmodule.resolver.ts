import * as graphql from "@nestjs/graphql";
import { EmailFetchDto } from "../gmailModule/EmailFetchDto";
import { FrequencyDataDto } from "../analyticsModule/FrequencyDataDto";
import { AnalyticsModuleService } from "./analyticsmodule.service";

export class AnalyticsModuleResolver {
  constructor(protected readonly service: AnalyticsModuleService) {}

  @graphql.Mutation(() => [FrequencyDataDto])
  async GenerateEmailFrequency(
    @graphql.Args()
    args: EmailFetchDto
  ): Promise<FrequencyDataDto[]> {
    return this.service.GenerateEmailFrequency(args);
  }

  @graphql.Query(() => [FrequencyDataDto])
  async GetVisualizationData(
    @graphql.Args()
    args: EmailFetchDto
  ): Promise<FrequencyDataDto[]> {
    return this.service.GetVisualizationData(args);
  }
}
