import {} from 'class-validator';

export class AuthDto {
  email: string;
  name: string;
  userType: string;
}
