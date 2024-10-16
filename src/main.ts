import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UnauthorizedErrorInterceptor } from './common/errors/interceptors/unauthorized.interceptor';
import { NotFoundErrorInterceptor } from './common/errors/interceptors/notfound.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(new UnauthorizedErrorInterceptor());
  app.useGlobalInterceptors(new NotFoundErrorInterceptor());

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
