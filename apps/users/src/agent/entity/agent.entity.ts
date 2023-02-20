import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AgentUser {
  @Field()
  name: string;
  @Field()
  title: string;
  @Field()
  username: string;
}
