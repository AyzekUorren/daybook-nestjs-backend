import { UserService } from './user.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../model/user.entity';
import { UserResponseDto } from './dto/user-response.dto';
import { UserCreateDto } from './dto/user-create.dto';

@Resolver(of => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => UserResponseDto)
    async getUser(@Args({ name: 'id', type: () => String }) id: string) {
        return await this.userService.findById(id);
    }

    @Query(() => [UserResponseDto])
    async getUsers() {
        return await this.userService.findAll();
    }

    @Mutation(() => UserResponseDto)
    async createUser(@Args('user') user: UserCreateDto) {
        return await this.userService.create(user);
    }
}
