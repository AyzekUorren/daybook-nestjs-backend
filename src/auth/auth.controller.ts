import { UserDto } from '../user/dto/user.dto';
import { Controller, Post, Body, Req, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
    ApiUseTags,
    ApiBearerAuth,
    ApiUnauthorizedResponse,
    ApiOkResponse,
    ApiCreatedResponse,
    ApiBadRequestResponse,
} from '@nestjs/swagger';
import { UserAuthDto } from '../user/dto/user-auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthResponseDto } from './dto/auth-response.dto';

@Controller('auth')
@ApiUseTags('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signIn')
    @ApiCreatedResponse({ type: AuthResponseDto })
    async createToken(@Body() userAuthDto: UserAuthDto) {
        return await this.authService.createToken(userAuthDto);
    }

    @Post('signUp')
    @ApiCreatedResponse({ type: AuthResponseDto })
    @ApiBadRequestResponse({ description: 'Bad request' })
    async signUp(@Body() userDto: UserDto) {
        return await this.authService.signUp(userDto);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiUnauthorizedResponse({ description: 'Error: Unauthorized' })
    @ApiOkResponse({ type: {} })
    async getUser(@Req() request) {
        return {};
    }
}
