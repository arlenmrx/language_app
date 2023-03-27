import { Repository } from 'typeorm';
import { User } from "../entity/user.entity";
import { RegisterDto } from "../utils/dto/registration.dto";
export declare class UserRepository {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(userData: RegisterDto): Promise<RegisterDto>;
    findByUsername(username: string): Promise<User>;
}
