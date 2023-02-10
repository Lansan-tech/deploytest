import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { Tenant } from './tenant.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  id: number;

  @Field(() => Tenant)
  tenant?: Tenant;
}
