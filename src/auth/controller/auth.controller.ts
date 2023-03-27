import { Controller, Request, Body, Post, UseGuards, Get } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LoginDto } from '../utils/dto/login.dto';
import { LocalAuthGuard } from '../strategy/local-auth.guard';
import { AuthService } from '../service/auth.service';
import { AccessTokenDto } from '../utils/dto/access-token.dto';
import { JwtAuthGuard } from '../strategy/jwt-auth.guard';
import { RegisterDto } from '../utils/dto/registration.dto';

@ApiTags('Auth')
@Controller()
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}


  @ApiResponse({ status: 200, type: RegisterDto })
  @Post('auth/register')
  async registration(@Body() registerData: RegisterDto) {
    return await this.authService.registerUser(registerData);
  }

  @ApiResponse({ status: 200, type: AccessTokenDto })
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() loginData: LoginDto) {
    return this.authService.login(req.user) // {access_token}
  }
  
}