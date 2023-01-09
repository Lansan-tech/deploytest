import { Module } from '@nestjs/common';
import { Options } from '../policy/lib/classes';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { Poster } from './lib/poster';
import { PosterService } from './poster.service';

@Module({
  imports: [PrismaModule],
  providers: [PosterService],
  exports: [PosterService],
})
export class PosterModule extends Poster {
  constructor(prismaService: PrismaService) {
    super({ dbase: prismaService });
  }
  init(options: Options) {
    this.month = options.month;
    this.year = options.year;
    this.monitor = options.monitor;
    this.where = options.where;
    this.orderby = options.orderby;
  }
}
