import { Module } from '@nestjs/common';
import { CaretakerService } from './caretaker.service';
import { CaretakerResolver } from './caretaker.resolver';

@Module({
  providers: [CaretakerService, CaretakerResolver]
})
export class CaretakerModule {}
