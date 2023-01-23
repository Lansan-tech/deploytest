import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Landlord {
  @Field()
  name: string;
  @Field()
  paybill: number;
  @Field()
  username: string;
}
