import { DynamicModule, INestApplication, NestModule } from '@nestjs/common';
import request from 'supertest-graphql';
import { Test } from '@nestjs/testing';
import { AuthService } from '../../../../apps/auth/src/auth.service';
import { AuthModule } from '../../../../apps/auth/src/auth.module';
import { PrismaService } from '../prisma/prisma.service';
import { UsersModule } from '../../../../apps/users/src/users.module';
import { gql } from 'graphql-tag';
import { DefaultAgent } from './stubs';

type User = { name: string; email: string; imageUrl: string };

export class IntergrationTestManager {
  private app: INestApplication;
  private accessToken: string;
  private appModule: any;
  private usersApp: INestApplication;
  public httpServer: any;
  private authModule: INestApplication;
  public dbConnection: PrismaService;

  constructor(appModule: any) {
    this.appModule = appModule;
  }
  async beforeAll(user: User) {
    const moduleRef = await Test.createTestingModule({
      imports: [this.appModule],
    }).compile();

    const authModuleRef = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    this.app = moduleRef.createNestApplication();
    this.authModule = authModuleRef.createNestApplication();
    //Initialize the auth module and given app module
    await this.authModule.init();
    await this.app.init();
    //Get the server to make request to
    this.httpServer = this.app.getHttpServer();

    //Extract databse layer
    this.dbConnection = this.app.get<PrismaService>(PrismaService);

    //Login a user.
    const authService = this.authModule.get<AuthService>(AuthService);
    const userLogin = await authService.signUp(user);
    this.accessToken = userLogin.access_token;

    //await this.createDefaultAgentUser();
  }

  async createDefaultAgentUser() {
    const server = await this.intergrateToUserModule();
    const response = await request(server)
      .mutate(
        gql`
          mutation createAgent($createAgentData: CreateAgentDto!) {
            createAgent(agentDto: $createAgentData) {
              agent
              username
            }
          }
        `,
      )
      .variables({
        createAgentData: {
          ...DefaultAgent,
        },
      })
      .set('authorization', `Bearer ${this.getAccessToken()}`)
      .expectNoErrors();
  }
  async afterAll() {
    await this.authModule.close();
    await this.app.close();
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  //Return the server that correnspons to the Users module to allow intergration of data.
  async intergrateToUserModule() {
    const userModule = await Test.createTestingModule({
      imports: [UsersModule],
    }).compile();

    this.usersApp = userModule.createNestApplication();
    this.usersApp.init();

    return this.usersApp.getHttpServer();
  }
}
