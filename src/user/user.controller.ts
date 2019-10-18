import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { UserService } from './user.service';
import { Controller, UseGuards, Get, HttpStatus } from '@nestjs/common';
import {
    ApiUseTags,
    ApiBearerAuth,
    ApiUnauthorizedResponse,
    ApiResponse,
} from '@nestjs/swagger';
import { UserResponseDto } from './dto/user-response.dto';

@Controller('user')
@ApiUseTags('user')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
export class UserController {
    constructor(private userSerivce: UserService) {}

    @Get()
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Users array',
        type: [UserResponseDto],
    })
    async findAll(): Promise<UserResponseDto[]> {
        return await this.userSerivce.findAll();
    }
}
