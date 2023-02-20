import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UserInputDto {
  @Field()
  @IsString()
  name: string;
  @Field()
  @IsString()
  email: string;
  @Field()
  @IsString()
  imageUrl: string;
  @Field()
  @IsString()
  user_type: string;
}
