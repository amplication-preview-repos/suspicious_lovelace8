import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailMetadataServiceBase } from "./base/emailMetadata.service.base";

@Injectable()
export class EmailMetadataService extends EmailMetadataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
