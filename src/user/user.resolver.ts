import { UserService } from './user.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../model/user.entity';
import { UserResponseDto } from './dto/user-response.dto';
import { UserCreateDto } from './dto/user-create.dto';
import { Req, UseGuards } from '@nestjs/common';
import { CurrentUser } from './user.decorator';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { GraphqlAuthGuard } from '../auth/guards/graphql-auth.guard';

@Resolver(of => User)
@UseGuards(GraphqlAuthGuard)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => UserResponseDto)
    async getUser(
        @Args({ name: 'id', type: () => String }) id: string,
        @Req() request,
    ) {
        return await this.userService.findById(id);
    }

    @Query(() => [UserResponseDto])
    async getUsers() {
        return await this.userService.findAll();
    }

    @Query(() => UserResponseDto)
    async getCurrentUser(@CurrentUser() user: JwtPayload) {
        return await this.userService.findByEmail(user.email);
    }

    @Mutation(() => UserResponseDto)
    async createUser(@Args('user') user: UserCreateDto) {
        return await this.userService.create(user);
    }
}
