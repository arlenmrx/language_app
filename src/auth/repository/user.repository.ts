import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "../entity/user.entity";
import { RegisterDto } from "../utils/dto/registration.dto";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async createUser(userData: RegisterDto) {
        const result = await this.userRepository.insert(userData);
        if(result) {
            return userData;
        }
        else {
            return null;
        }
    }

    async findByUsername(username: string) {
        return await this.userRepository.findOneBy({ username: username });
    }
}