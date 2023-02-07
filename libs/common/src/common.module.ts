import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { PosterModule } from './poster/poster.module';
import { RegistrationModule } from './registration/registration.module';

@Module({
  providers: [CommonService],
  exports: [CommonService],
  imports: [PosterModule, RegistrationModule],
})
export class CommonModule {}
