import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, forbidUnknownValues: false }),
  );
  await app.listen(4005);
}
bootstrap();
