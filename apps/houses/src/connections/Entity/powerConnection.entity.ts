import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PowerConnection {
  @Field()
  emeter: number;
}
