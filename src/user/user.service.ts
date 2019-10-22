import { User } from '../model/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserResponseDto } from './dto/user-response.dto';
import { Injectable } from '@nestjs/common';
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

        return new UserResponseDto(user);
    }

    public async create(user: UserCreateDto) {
        const userEntity = this.repository.create(user);
        const newUser = await this.repository.save(userEntity);
        return new UserResponseDto(newUser);
    }
}
