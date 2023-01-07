import { NestFactory } from '@nestjs/core';
import { InvoicesModule } from './invoices.module';

async function bootstrap() {
  const app = await NestFactory.create(InvoicesModule);
  await app.listen(8080);
}
bootstrap();
