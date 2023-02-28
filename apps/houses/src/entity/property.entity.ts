import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Property {
  @Field()
  name: string;
  @Field()
  title: string;
}
