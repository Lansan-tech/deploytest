import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { PaymentsResolver } from './resolver/payments.resolver';
import { PaymentsResolver } from './payments/payments.resolver';

@Module({
  imports: [],
  controllers: [PaymentsController],
  providers: [PaymentsService, PaymentsResolver],
})
export class PaymentsModule {}
