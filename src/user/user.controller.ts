import { UserService } from './user.service';
import {
    Controller,
    Get,
    HttpStatus,
    Param,
    Logger,
    Post,
    OnModuleInit,
    UseGuards,
    BadRequestException,
} from '@nestjs/common';
import {
    ApiUseTags,
    ApiUnauthorizedResponse,
    ApiResponse,
    ApiBadRequestResponse,
    ApiOkResponse,
    ApiBearerAuth,
} from '@nestjs/swagger';
import { UserResponseDto } from './dto/user-response.dto';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microServiceOptions } from '../grcp.options';
import { IGrcpUserInterface } from './grcp.user.interface';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('user')
@ApiUseTags('user')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
export class UserController implements OnModuleInit {
    @Client(microServiceOptions)
    private client: ClientGrpc;

    private grcpUserService: IGrcpUserInterface;

    constructor(private userService: UserService) {}

    onModuleInit() {
        this.grcpUserService = this.client.getService<IGrcpUserInterface>(
            'UserController',
        );
    }

    @Get()
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Users array',
        type: [UserResponseDto],
    })
    async findAll(): Promise<UserResponseDto[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    @ApiBadRequestResponse({ description: 'Bad Request' })
    @ApiOkResponse({
        description: 'Detailed User model',
        type: UserResponseDto,
    })
    async findById(@Param('id') userId: string) {
        return await this.userService.findById(userId);
    }

    @Post('grcp:id')
    async findByIdMicroService(@Param('id') userId: string) {
        Logger.debug(`req -> user microService: ${JSON.stringify(userId)}`);
        try {
            return this.grcpUserService.findById({ userId });
        } catch (error) {
            Logger.error(`user microService -> ${JSON.stringify(error)}`);
            throw new BadRequestException();
        }
    }
}
