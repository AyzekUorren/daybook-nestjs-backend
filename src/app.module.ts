import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config/config.service';
@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forRootAsync({
            useFactory: (config: ConfigService) =>
                TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: config.get('DATABASE_HOST_NAME'),
                    port: Number(config.get('DATABASE_PORT')),
                    username: config.get('DATABASE_USER_NAME'),
                    password: config.get('DATABASE_USER_PASSWORD'),
                    database: config.get('DATABASE_NAME'),
                    entities: [],
                    synchronize: Boolean(config.get('DATABASE_SYNCHHRONIZE')),
                }),
            inject: [ConfigModule],
        }),
        AuthModule,
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
