import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from './user.service';
import {
    Controller,
    UseGuards,
    Get,
    HttpStatus,
    Param,
    Query,
    Logger,
    Body,
    Post,
} from '@nestjs/common';
import {
    ApiUseTags,
    ApiBearerAuth,
    ApiUnauthorizedResponse,
    ApiResponse,
    ApiBadRequestResponse,
    ApiOkResponse,
} from '@nestjs/swagger';
import { UserResponseDto } from './dto/user-response.dto';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microServiceOptions } from '../grcp.options';
import { IGrcpUserInterface } from './grcp.user.interface';

@Controller('user')
@ApiUseTags('user')
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
export class UserController {
    @Client(microServiceOptions)
    private client: ClientGrpc;

    private grcpUserService: IGrcpUserInterface;

    constructor(private userService: UserService) {}

    onModuleInit() {
        Logger.log(`The module has been initialized.`);

        this.grcpUserService = this.client.getClientByServiceName(
            'UserController',
        );

        try {
            const options = {
                id: '8e33925a-38f7-4fe5-b35a-23027c8a215d',
            };

            this.grcpUserService
                .findById(options)
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

    @Post('grcp')
    async findByIdMicroService(@Body() userId: string) {
        Logger.debug(`req -> findById: ${JSON.stringify(userId)}`);
        return this.grcpUserService.findById({ id: userId });
    }
}
