import { ObjectType } from '@nestjs/graphql';
import { Tenant } from 'apps/users/src/entity/tenant.entity';

@ObjectType()
export class Payment {
  amount: number;
  ref: string;
  date: string;
  client: Tenant;
}
