import { Module } from '@nestjs/common';
import { RepositoryProviders } from '../providers/repository.provider.js';
import { PrismaModule } from '../config/prisma/prisma.module.js';
import { CreateUserUseCase } from './use-cases/create-user.use-case.js';

@Module({
  imports: [PrismaModule],
  providers: [
    CreateUserUseCase,
    ...RepositoryProviders,
  ],
  exports: [
    CreateUserUseCase,
    ...RepositoryProviders,
  ],
})
export class UsersModule {}