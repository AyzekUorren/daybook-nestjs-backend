import { User } from './model/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config/config.service';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
    imports: [
        ConfigModule,
        UserModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule, User],
            useFactory: (config: ConfigService) =>
                config.GetPostgresTypeOrmConfig(),
            inject: [ConfigService],
        }),
        GraphQLModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (config: ConfigService) => config.GetGraphqlOptions(),
            inject: [ConfigService],
        }),
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
