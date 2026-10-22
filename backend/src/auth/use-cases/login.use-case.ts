import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from '@/users/repositories/users.repository.js';
import { LoginDTO } from '../dtos/login.dto.js';
import type { JwtPayload } from '../types/jwt-payload.js';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async execute(data: LoginDTO) {
    const user = await this.usersRepository.findByEmail(data.email);
    if (!user || !user.isActive) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const ok = await bcrypt.compare(data.password, user.passwordHash);
    if (!ok) throw new UnauthorizedException('Credenciais inválidas');

    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      approverLevel: user.approverLevel,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}