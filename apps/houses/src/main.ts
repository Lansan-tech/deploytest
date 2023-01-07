import { NestFactory } from '@nestjs/core';
import { HousesModule } from './houses.module';

async function bootstrap() {
  const app = await NestFactory.create(HousesModule);
  await app.listen(3000);
}
bootstrap();
