import { Provider } from '@nestjs/common';
import { UsersRepository } from '@/users/repositories/users.repository.js';
import { PrismaUsersRepository } from '@/users/repositories/prisma/prisma-users.repository.js';

export const RepositoryProviders: Provider[] = [
  {
    provide: UsersRepository,
    useClass: PrismaUsersRepository,
  },
  // depois: RequestsRepository → PrismaRequestsRepository, etc.
];