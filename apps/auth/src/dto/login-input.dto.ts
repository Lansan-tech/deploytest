import { Directive, Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class LoginInput {
  @Field(() => String, { description: 'The Users email address' })
  email: string;
  @Field(() => String, { description: 'The Name of the user' })
  name: string;
  @Field(() => String, {
    description: 'The image for the user, google provideds',
  })
  imageUrl: string;
}
