import {
  Access_token,
  JwtStrategy,
  PrismaService,
  UserStub,
} from '@app/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('Given that a User Has not Logged In', () => {
  describe('When the Login Mutation is called', () => {
    let service: AuthService;
    beforeAll(async () => {
      //Create the login module
      const moduleRef = await Test.createTestingModule({
        providers: [
          ConfigService,
          AuthService,
          PrismaService,
          JwtStrategy,
          JwtService,
        ],
      }).compile();

      service = moduleRef.get<AuthService>(AuthService);
    });
    test('User session should be availabe', async () => {
      jest
        .spyOn(service, 'signUp')
        .mockImplementation(async () => Access_token);
      const loggedInuser = await service.signUp(UserStub);
      expect(loggedInuser).toMatchObject({
        access_token: Access_token.access_token,
      });
    });
  });
});
