import { Injectable } from "@nestjs/common";
import { EmailFetchDto } from "../gmailModule/EmailFetchDto";
import { FrequencyDataDto } from "../analyticsModule/FrequencyDataDto";

@Injectable()
export class AnalyticsModuleService {
  constructor() {}
  async GenerateEmailFrequency(args: EmailFetchDto): Promise<FrequencyDataDto[]> {
    throw new Error("Not implemented");
  }
  async GetVisualizationData(args: EmailFetchDto): Promise<FrequencyDataDto[]> {
    throw new Error("Not implemented");
  }
}
