import { UserAuthDto } from '../user/dto/user-auth.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { AuthService } from './auth.service';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver('auth')
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Query(() => AuthResponseDto)
    async login(@Args('user') user: UserAuthDto) {
        return await this.authService.createToken(user);
    }
}
