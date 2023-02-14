import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Agent {
  @Field()
  name: string;
  @Field()
  title: string;
  @Field()
  username: string;
}
