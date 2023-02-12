import { Directive, ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  imageUrl: string;
}

@ObjectType()
export class AccessToken {
  @Field()
  access_token: string;
  refresh: string;
}

@InputType()
export class loginInput {
  @Field(() => String, { description: 'Generated access_token of the user' })
  access_token: string;
}
