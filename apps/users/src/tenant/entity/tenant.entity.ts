import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../entity/user.entity';

@ObjectType()
export class Tenant {
  @Field()
  name: string;
  @Field()
  title: string;
  @Field()
  contact: string;
  @Field()
  phone: string;
  @Field()
  email: string;
  @Field()
  quarterly: number;
  @Field()
  userId: number;
  @Field()
  user: User;
}

@ObjectType()
export class ReconResponse {
  @Field()
  success: boolean;
  @Field()
  msg: string;
}
