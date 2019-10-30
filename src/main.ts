import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { microServiceOptions } from './grcp.options';

async function bootstrap() {
    let app;
    const port = +process.env.PORT || 3000;
    if (process.env.NODE_ENV === 'production') {
        app = await NestFactory.create(AppModule, {
            logger: console,
            bodyParser: true,
        });
    } else {
        app = await NestFactory.create(AppModule, {
            bodyParser: true,
        });
    }

    const options = new DocumentBuilder()
        .addBearerAuth()
        .setTitle('Daybook backend API')
        .setDescription('Daybook-app backend')
        .setVersion('1.0')
        .addTag('auth', 'Authorization endpoints')
        .addTag('user', 'User model endpoints')
        .setBasePath(process.env.API_PREFIX || 'dev')
        .setSchemes(process.env.HTTPS === 'true' ? 'https' : 'http')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);

    app.setGlobalPrefix(process.env.API_PREFIX || 'dev');
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();

    await app.listen(port, () => {
        if (process.env.NODE_ENV !== 'production') {
            Logger.log(
                `\x1b[0;33m[NestApplication]\x1b[0m \x1b[0;32m-> Listening on \x1b[34m http://localhost:${port}/docs\x1b[0m`,
            );
            Logger.log(
                `\x1b[0;33m[NestApplication]\x1b[0m \x1b[0;32m-> GraphQL playground on \x1b[34m http://localhost:${port}/graphql\x1b[0m`,
            );
        }
    });
}
bootstrap();
