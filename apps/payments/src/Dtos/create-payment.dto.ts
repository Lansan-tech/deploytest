import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PaymentDto {
  @Field()
  ref: string;
  @Field()
  description: string;
  @Field()
  amount: number;
  @Field()
  type: string;
  @Field()
  clientName: string;
}
