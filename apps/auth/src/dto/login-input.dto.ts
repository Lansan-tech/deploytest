import { Field, InputType, ObjectType } from '@nestjs/graphql';

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

@ObjectType()
export class AccessToken {
  @Field()
  access_token: string;
  refresh: string;
}

// @InputType()
// export class loginInput {
//   @Field(() => String, { description: 'Generated access_token of the user' })
//   access_token: string;
// }
