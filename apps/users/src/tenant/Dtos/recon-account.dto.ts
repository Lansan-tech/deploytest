import { Field, InputType } from '@nestjs/graphql';

type recontType = 'credit' | 'debit';

@InputType()
export class ReconcileDto {
  @Field()
  type: recontType;
  @Field()
  amount: number;
  @Field()
  clientName: string;
  @Field()
  reason: string;
}
