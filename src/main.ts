import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from './config';
import { DocumentationRoles } from './transactions/shared/services/jwt/infrastructure/JwtAuthGuard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder()
  .setTitle('Students MicroServices')
  .setDescription('This project is a extensions of Students-Teachers that implements event driven architecture and microservices with the same software architecture ')
  .setVersion('1.0')
  .addBearerAuth(
    { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', description: 'Student JWT' },
    DocumentationRoles.STUDENT_JWT
  )
  .addBearerAuth(
    { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', description: 'Manager JWT' },
    DocumentationRoles.MANAGER_JWT
  )
  .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api', app, document);

  await app.listen(config.port);
}
bootstrap();
