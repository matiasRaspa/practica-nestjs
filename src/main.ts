import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'; //import 'dotenv/config'

dotenv.config();
const PORT = process.env.PORT || 3000;

console.log(PORT);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
