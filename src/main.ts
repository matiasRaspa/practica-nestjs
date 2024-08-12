import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'; //import 'dotenv/config'
import { ValidationPipe } from '@nestjs/common';

dotenv.config();
const PORT = process.env.PORT || 3000;

console.log(PORT);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  await app.listen(PORT);
}
bootstrap();
