import { Logger, NestApplicationOptions, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const logMessage = message => {
    if (process.env.NODE_ENV !== 'production') {
        Logger.log(
            `\x1b[0;33m[NestApplication]\x1b[0m \x1b[0;32m-> ${message}`,
        );
    }
};

const setupSwaggerDocs = app => {
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
};

const getAppOptions = () => {
    const nestApplicationOptions: NestApplicationOptions = { bodyParser: true };

    if (process.env.NODE_ENV === 'production') {
        nestApplicationOptions.logger = console;
    }

    return nestApplicationOptions;
};

async function bootstrap() {
    const port = +process.env.PORT || 3000;

    const app = await NestFactory.create(AppModule, getAppOptions());

    setupSwaggerDocs(app);

    app.setGlobalPrefix(process.env.API_PREFIX || 'dev');
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();

    await app.listen(port, () => {
        logMessage(
            `Listening on \x1b[34m http://localhost:${port}/docs\x1b[0m`,
        );
        logMessage(
            `GraphQL playground on \x1b[34m http://localhost:${port}/graphql\x1b[0m`,
        );
    });
}
bootstrap();
