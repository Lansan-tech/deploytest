import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaymentDto } from '../Dtos/create-payment.dto';
import { Payment } from '../Entity/Payment.entity';
import { PaymentsService } from '../payments.service';

@Resolver(() => Payment)
export class PaymentsResolver {
  constructor(private paymentsService: PaymentsService) {}

  @Mutation(() => Payment)
  create(@Args('payment') payment: PaymentDto) {
    return this.paymentsService.create(payment);
  }

  @Query(() => [Payment])
  retrivaAll() {
    return this.paymentsService.retriveAll();
  }

  @Query(() => Payment)
  retriveOne(@Args('paymentId') paymentId: number) {
    return this.paymentsService.retriveOne(paymentId);
  }
}
