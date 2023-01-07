import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Invoice } from './invoice.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  id: number;

  @Field(() => [Invoice])
  posts?: Invoice[];
}
