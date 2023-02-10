import { Field, ObjectType } from '@nestjs/graphql';

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
}

@ObjectType()
export class ReconResponse {
  @Field()
  success: boolean;
  @Field()
  msg: string;
}
