import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
@Module({
    imports: [AuthModule, ConfigModule, UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
