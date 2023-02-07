import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Poster } from './lib/poster';

@Injectable()
export class PosterService extends Poster {
  constructor(prismaService: PrismaService) {
    super({
      dbase: prismaService,
    });
  }

  getInvoiceByClient(clientName: string) {
    this.where = clientName;
    return this.compileToArray();
  }
}
