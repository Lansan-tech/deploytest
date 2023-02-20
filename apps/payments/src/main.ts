import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { PaymentsModule } from './payments.module';

async function bootstrap() {
  const app = await NestFactory.create(PaymentsModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(5001);
}
bootstrap();
