import { Directive, ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id: number;
  @Field()
  @IsString()
  name: string;
  @Field({ nullable: true })
  @IsString()
  imageUrl: string;
}
