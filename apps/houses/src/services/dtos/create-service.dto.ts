import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateServiceInput {
  @Field()
  name: string;
  @Field()
  auto: number;
  @Field()
  description: string;
  @Field()
  price: number;
  @Field()
  propertyUid: string;
}
