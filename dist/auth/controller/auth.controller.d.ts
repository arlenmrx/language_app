import { LoginDto } from '../utils/dto/login.dto';
import { AuthService } from '../service/auth.service';
import { RegisterDto } from '../utils/dto/registration.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registration(registerData: RegisterDto): Promise<RegisterDto>;
    login(req: any, loginData: LoginDto): Promise<{
        access_token: string;
    }>;
}
