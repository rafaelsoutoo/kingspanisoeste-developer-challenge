import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from '@/users/dtos/create-user.dto.js';
import { CreateUserUseCase } from '@/users/use-cases/create-user.use-case.js';
import { UsersRepository } from '@/users/repositories/users.repository.js';
import { LoginDTO } from './dtos/login.dto.js';
import { LoginUseCase } from './use-cases/login.use-case.js';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';
import { CurrentUser } from './decorators/current-user.decorator.js';
import type { AuthUser } from './types/jwt-payload.js';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    @Inject(CreateUserUseCase) private createUserUseCase: CreateUserUseCase,
    @Inject(LoginUseCase) private loginUseCase: LoginUseCase,
    @Inject(UsersRepository) private usersRepository: UsersRepository,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Cadastra novo usuário' })
  async register(@Body() body: CreateUserDTO) {
    return this.createUserUseCase.execute({ data: body });
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Autentica e retorna JWT' })
  async login(@Body() body: LoginDTO) {
    return this.loginUseCase.execute(body);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Usuário logado' })
  async me(@CurrentUser() user: AuthUser) {
    return this.usersRepository.findById(user.id);
  }
}