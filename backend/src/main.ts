import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT ?? 3000);
  const swaggerPath = 'api/docs';

  const config = new DocumentBuilder()
    .setTitle('Kingspan Isoeste API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(port);

  const logger = new Logger('Bootstrap');
  logger.log(`App: http://localhost:${port}`);
  logger.log(`Swagger: http://localhost:${port}/${swaggerPath}`);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
}

await bootstrap();