import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserI } from '../utils/interface/user.interface';
import { RegisterDto } from '../utils/dto/registration.dto';
import { UserRepository } from '../repository/user.repository';
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userRepository: UserRepository
  ) {}

  async validateUser(username: string, pass: string): Promise<UserI> {
    const userEntity = await this.userRepository.findByUsername(username);

    if(!userEntity) {
      return null;
    }

    const isCorrectPwd = bcrypt.compareSync(pass, userEntity.user_password)

    if (isCorrectPwd) {
      const { user_password, ...result } = userEntity;
      return result;
    }

    return null;   
  }

  async login(user: UserI) {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registerUser(registerData: RegisterDto) {
    const hash = bcrypt.hashSync(registerData.user_password, 8);
    registerData.user_password = hash;

    return await this.userRepository.createUser(registerData);
  }

}