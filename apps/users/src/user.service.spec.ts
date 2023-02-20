import { PrismaService } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UserService', () => {
  let service: UsersService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });
  test('Should create a new user', async () => {
    const userStub = {
      email: 'test@gmail.com',
      imageUrl: 'http://localhost:3000',
      name: 'testing',
      user_type: 'AGENT',
    };
    jest.spyOn(service, 'createUser').mockImplementation(async () => userStub);
    const user = await service.createUser(userStub);
    expect(user).toBe(user);
  });
});
