import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { Landlord } from './landlord.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  id: number;

  @Field(() => Landlord)
  landlord?: Landlord;
}
