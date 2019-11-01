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
        Logger.log(`The module has been initialized.`);

        this.grcpUserService = this.client.getService<IGrcpUserInterface>(
            'UserController',
        );

        try {
            this.grcpUserService
                .findById({ userId: '8e33925a-38f7-4fe5-b35a-23027c8a215d' })
                .subscribe(result => Logger.debug(JSON.stringify(result)));
        } catch (e) {
            Logger.error(e);
            throw e;
        }
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
        Logger.debug(`req -> findById: ${JSON.stringify(userId)}`);
        return this.grcpUserService.findById({ userId });
    }
}
