import { User } from './../model/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserResponseDto } from './dto/user-response.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly repository: Repository<User>,
    ) {}

    public async findAll() {
        const users = await this.repository.find();

        return users.map(user => new UserResponseDto(user));
    }
}
