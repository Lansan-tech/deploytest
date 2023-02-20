import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { AgentUser } from './agent.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  id: number;

  @Field(() => AgentUser)
  tenant?: AgentUser;
}
