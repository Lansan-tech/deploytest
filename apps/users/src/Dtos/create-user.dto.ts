import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInputDto {
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  imageUrl: string;
  @Field()
  user_type: string;
}
