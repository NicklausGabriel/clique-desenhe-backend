import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import dotenv from "dotenv";
import { AppModule } from './app.module';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
