import { ConflictException, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from '../repositories/users.repository.js';
import { CreateUserDTO } from '../dtos/create-user.dto.js';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  async execute({ data }: { data: CreateUserDTO }) {
    const existing = await this.usersRepository.findByEmail(data.email);
    if (existing) throw new ConflictException('E-mail já cadastrado');

    const passwordHash = await bcrypt.hash(data.password, 10);
    return this.usersRepository.create({ ...data, passwordHash });
  }
}