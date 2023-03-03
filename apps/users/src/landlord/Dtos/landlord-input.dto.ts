import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';

@InputType()
export class CreateLandlordDto {
  @Field()
  @IsEmail()
  email: string;
  @Field()
  @IsString()
  name: string;
  @Field()
  @IsString()
  username: string;
  @Field()
  paybill: number;
  @Field()
  imageUrl: string;
}
