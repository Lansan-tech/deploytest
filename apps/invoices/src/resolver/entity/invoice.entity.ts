import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Invoices {
  @Field(() => [Invoice])
  invoice: [Invoice];
  @Field(() => [OpeningBalance])
  opening_balance: [OpeningBalance];
  @Field(() => [Rent])
  rent: [Rent];
  @Field(() => [Payment])
  payment: [Payment];
  @Field(() => [ClosingBalance])
  closing_balance: [ClosingBalance];
}

@ObjectType()
export class Invoice {
  @Field()
  client: number;
  @Field()
  id: string;
  @Field()
  full_name: string;
  @Field()
  month: string;
  @Field()
  year: string;
}

@ObjectType()
export class OpeningBalance {
  @Field()
  date: string;
  @Field()
  client: number;
  @Field()
  amount: number;
}

@ObjectType()
export class Rent {
  @Field()
  client: number;
  @Field()
  agreement: number;
  @Field()
  room_no: string;
  @Field()
  price: number;
  @Field({ nullable: true })
  factor: string;
  @Field()
  rental_period: string;
  @Field({ nullable: true })
  amount: number;
  @Field()
  agreement_start_date: string;
}

@ObjectType()
export class Payment {
  @Field()
  amount: number;
  @Field()
  date: string;
  @Field()
  client: number;
  @Field()
  payment: number;
  @Field()
  ref: string;
}

@ObjectType()
export class ClosingBalance {
  @Field()
  amount: number;
  @Field()
  client: number;
}
