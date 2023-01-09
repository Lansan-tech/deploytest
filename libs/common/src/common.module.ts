import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { PosterModule } from './poster/poster.module';

@Module({
  providers: [CommonService],
  exports: [CommonService],
  imports: [PosterModule],
})
export class CommonModule {}
