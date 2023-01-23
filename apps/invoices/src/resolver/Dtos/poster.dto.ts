import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class PosterOptions {
  @IsNotEmpty()
  @IsNumber()
  @Field()
  month: number;
  @IsNotEmpty()
  @IsNumber()
  @Field()
  year: number;
}
