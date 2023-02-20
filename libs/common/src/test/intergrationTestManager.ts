import { DynamicModule, INestApplication, NestModule } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthService } from '../../../../apps/auth/src/auth.service';
import { AuthModule } from '../../../../apps/auth/src/auth.module';

export class IntergrationTestManager {
  private app: INestApplication;
  private accessToken: string;
  private appModule: any;
  public httpServer: any;
  private authModule: INestApplication;

  constructor(appModule: any) {
    this.appModule = appModule;
  }
  async beforeAll() {
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

    //Login a user.
    const authService = this.authModule.get<AuthService>(AuthService);
    const user = await authService.signUp({
      email: 'santamulantei8@gmail.com',
      imageUrl: 'http://localhost/image.png',
      name: 'Santamu Lantei',
    });
    this.accessToken = user.access_token;
  }

  async afterAll() {
    await this.authModule.close();
    await this.app.close();
  }

  getAccessToken(): string {
    return this.accessToken;
  }
}
