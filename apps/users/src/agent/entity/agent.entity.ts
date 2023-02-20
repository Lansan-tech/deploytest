import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AgentUser {
  @Field()
  agent: number;
  @Field()
  name: string;
  @Field()
  title: string;
  @Field()
  username: string;
}
