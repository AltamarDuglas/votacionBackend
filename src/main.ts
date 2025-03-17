// src/main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Agrega esta línea 👇 para activar validación globalmente:
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Solo permite propiedades definidas en los DTO
    forbidNonWhitelisted: true, // Genera un error al enviar propiedades adicionales
    transform: true, // Convierte automáticamente datos al tipo definido en DTO
  }));

  await app.listen(4000);
}
bootstrap();
