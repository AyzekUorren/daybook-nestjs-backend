import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.providers';

@Module({
    imports: [
        DatabaseModule,
        forwardRef(() => TwetModule),
        forwardRef(() => TagModule),
        forwardRef(() => UtilsModule),
    ],
    controllers: [UserController],
    providers: [UserService, ...userProviders],
    exports: [UserService],
})
export class UserModule {}
