import { JwtService } from '@nestjs/jwt';
import { UserI } from '../utils/interface/user.interface';
import { RegisterDto } from '../utils/dto/registration.dto';
import { UserRepository } from '../repository/user.repository';
export declare class AuthService {
    private jwtService;
    private userRepository;
    constructor(jwtService: JwtService, userRepository: UserRepository);
    validateUser(username: string, pass: string): Promise<UserI>;
    login(user: UserI): Promise<{
        access_token: string;
    }>;
    registerUser(registerData: RegisterDto): Promise<RegisterDto>;
}
