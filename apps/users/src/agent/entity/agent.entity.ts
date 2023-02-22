import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';

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
  @Field()
  user: User;
  @Field()
  userId: number;
}
