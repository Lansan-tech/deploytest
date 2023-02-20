import { PrismaModule } from '@app/common';
import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsResolver } from './resolver/payments.resolver';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [PaymentsService, PaymentsResolver],
})
export class PaymentsModule {}
