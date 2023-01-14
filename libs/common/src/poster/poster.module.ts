import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PosterService } from './poster.service';

@Module({
  imports: [PrismaModule],
  providers: [PosterService],
  exports: [PosterService],
})
export class PosterModule {}
