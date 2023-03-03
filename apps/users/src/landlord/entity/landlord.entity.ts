import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Landlord {
  @Field()
  landlord: number;
  @Field()
  name: string;
  @Field()
  paybill: number;
  @Field()
  username: string;
}
