import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsResolver } from './resolver/payments.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [PaymentsService, PaymentsResolver],
})
export class PaymentsModule {}
