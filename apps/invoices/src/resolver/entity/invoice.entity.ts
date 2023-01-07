import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
export class Invoice {
  @Field(() => ID)
  uuid: string;
  @Field()
  title: string;

  @Field()
  authorId: number;

  @Field(() => User)
  user?: User;
}
