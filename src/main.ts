import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { UnauthorizedErrorInterceptor } from './common/errors/interceptors/unauthorized.interceptor';
import { NotFoundErrorInterceptor } from './common/errors/interceptors/notfound.interceptor';
import { ConflictErrorInterceptor } from './common/errors/interceptors/conflict.interceptor';
import { DatabaseErrorInterceptor } from './common/errors/interceptors/database.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Perfex API')
    .setDescription('The Perfex API description')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(new ConflictErrorInterceptor());
  app.useGlobalInterceptors(new DatabaseErrorInterceptor());
  app.useGlobalInterceptors(new UnauthorizedErrorInterceptor());
  app.useGlobalInterceptors(new NotFoundErrorInterceptor());

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
