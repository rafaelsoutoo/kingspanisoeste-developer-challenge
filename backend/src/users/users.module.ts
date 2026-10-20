import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { RepositoryProviders } from '../providers/repository.provider.js';
import { PrismaModule } from '../config/prisma/prisma.module.js';
import { CreateUserUseCase } from './use-cases/create-user.use-case.js';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [
    CreateUserUseCase,
    ...RepositoryProviders,
  ],
  exports: [
    ...RepositoryProviders,
  ],
})
export class UsersModule {}