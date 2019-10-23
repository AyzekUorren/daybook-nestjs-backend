import { UserAuthDto } from '../user/dto/user-auth.dto';
import {
    Injectable,
    Logger,
    UnauthorizedException,
    BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserService } from '../user/user.service';
import { AuthResponseDto } from './dto/auth-response.dto';
import { UserCreateDto } from '../user/dto/user-create.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ) {}

    async createToken(authUser: UserAuthDto) {
        const userResponseDto = await this.userService.findByEmail(
            authUser.email,
        );
        if (!userResponseDto) {
            Logger.error('auth->createToken: User not found');
            throw new UnauthorizedException('User not found');
        }
        const user: JwtPayload = { email: userResponseDto.email };
        const accessToken = this.jwtService.sign(user);
        return new AuthResponseDto({
            expiresIn: 3600,
            access_token: accessToken,
        });
    }

    async signUp(userModel: UserCreateDto) {
        const userResponseDto = await this.userService.create(userModel);

        if (!userResponseDto) {
            Logger.error('auth->signUp: Cannot create user');
            throw new BadRequestException('Cannot create user');
        }
        const user: JwtPayload = { email: userResponseDto.email };
        const accessToken = this.jwtService.sign(user);
        return new AuthResponseDto({
            expiresIn: 3600,
            access_token: accessToken,
        });
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        Logger.debug(payload);
        if (!payload.email) {
            Logger.error('auth-> validateUser: Token not valid');
            throw new UnauthorizedException('Token not valid');
        }
        const user = await this.userService.findByEmail(
            payload.email.toLowerCase(),
        );
        if (!user) {
            Logger.error('auth-> validateUser: User not found');
            throw new UnauthorizedException('User not found');
        }

        return user;
    }
}
