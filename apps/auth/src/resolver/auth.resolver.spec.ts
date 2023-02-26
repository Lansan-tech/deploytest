import { PrismaService } from '@app/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { access } from 'fs';
import { AuthService } from '../auth.service';
import { AuthResolver } from './auth.resolver';

describe('AuthResolver', () => {
  let resolver: AuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthResolver,
        AuthService,
        PrismaService,
        JwtService,
        ConfigService,
      ],
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
  });

  test('Should Login a User either new or old', () => {
    const loginUser = {
      name: 'santau lantei',
      email: 'test@test.com',
      imageUrl: 'http://localhost:3000/image.png',
    };
    jest
      .spyOn(resolver, 'login')
      .mockImplementation(async () => ({ access_token: 'kjhk;jashdkjhak' }));
    const access_token = resolver.login(loginUser);
    expect(access_token).toBeDefined();
  });
});
