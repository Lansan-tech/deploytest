import { Field, InputType } from '@nestjs/graphql';
import { room } from '@prisma/client';

@InputType()
export class BalanceInitial {
  @Field()
  amount: number;
}

@InputType()
export class Room {
  @Field()
  uid: string;
  @Field()
  room: number;
}

@InputType()
export class Subscriptions {
  @Field()
  amount: number;
  @Field()
  service: number;
}

@InputType()
export class Agreement {
  @Field()
  startDate: string;
  @Field()
  amount: number;
  @Field()
  comment: string;
  @Field()
  terminated: string;
  @Field()
  room: Room;
}

@InputType()
export class TenantDto {
  @Field()
  name: string;
  @Field()
  title: string;
  @Field()
  contact: string;
  @Field()
  phoneNo: string;
  @Field()
  email: string;
  @Field()
  quarterly: number;
  @Field(() => BalanceInitial)
  balance_initial: BalanceInitial;
  @Field()
  subscription: Subscriptions;
  @Field(() => Agreement)
  agreement: Agreement;
}
