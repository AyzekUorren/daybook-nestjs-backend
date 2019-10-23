import { User } from '../model/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserResponseDto } from './dto/user-response.dto';
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { UserCreateDto } from './dto/user-create.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly repository: Repository<User>,
    ) {}

    public async findAll() {
        const users = await this.repository.find();

        return users.map(user => new UserResponseDto(user));
    }

    public async findById(id: string): Promise<UserResponseDto> {
        const user = await this.repository.findOne({ id });

        if (user) {
            return new UserResponseDto(user);
        }

        return null;
    }

    public async findByEmail(email: string): Promise<UserResponseDto> {
        const user = await this.repository.findOne({ email });

        if (user) {
            return new UserResponseDto(user);
        }

        return null;
    }

    public async create(user: UserCreateDto) {
        if (await this.isUserExists(user.email)) {
            const errorMessage = `user with email: ${user.email}, already exists`;
            Logger.error('UserService -> create: ' + errorMessage);
            throw new BadRequestException(errorMessage);
        }

        const userEntity = this.repository.create(user);
        const newUser = await this.repository.save(userEntity);
        return new UserResponseDto(newUser);
    }

    private async isUserExists(email: string): Promise<boolean> {
        const user = await this.findByEmail(email);
        return user !== null;
    }
}
