import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthService } from 'apps/auth/src/auth.service';
import { AppModule } from 'apps/gateway/src/app.module';

export class IntergrationTestManager {
  private app: INestApplication;
  private accessToken: string;
  async beforeAll() {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    this.app = moduleRef.createNestApplication();
    await this.app.init();
    const authService = this.app.get<AuthService>(AuthService);
    const user = await authService.signUp({
      email: 'santamulantei8@gmail.com',
      imageUrl: 'http://localhost/image.png',
      name: 'Santamu Lantei',
    });
    this.accessToken = user.access_token;
  }

  async afterAll() {
    await this.app.close();
  }

  getAccessToken(): string {
    return this.accessToken;
  }
}
