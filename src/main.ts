import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { appConfig } from '@shared/configs';
import { ValidationPipe } from '@nestjs/common';

const port = appConfig.getPort();
const host = appConfig.getHost();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('BACKEND')
    .setDescription('REST API')
    .setVersion('1.0.0')
    .addTag('BLOG')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, host, () =>
    console.log(`Server started on port ${port}`),
  );
}
bootstrap();
