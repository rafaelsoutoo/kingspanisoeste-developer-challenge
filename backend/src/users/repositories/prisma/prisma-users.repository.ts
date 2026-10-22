import { Injectable } from '@nestjs/common';
import { UsersRepository } from '@/users/repositories/users.repository.js';
import { PrismaService } from '@/config/prisma/prisma.service.js';
import { CreateUserDTO } from '@/users/dtos/create-user.dto.js';
import { ApproverLevel, UserRole } from '@/generated/prisma/enums.js';
import type { PublicUser, UserEntity } from '@/users/entities/user.entity.js';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDTO & { passwordHash: string }): Promise<PublicUser> {
    const user = await this.prisma.client.user.create({
      data: {
        name: data.name,
        email: data.email,
        passwordHash: data.passwordHash,
        role: data.role ?? UserRole.SOLICITANTE,
        approverLevel:
          data.role === UserRole.APROVADOR
            ? (data.approverLevel ?? ApproverLevel.FIRST_LEVEL)
            : null,
      },
    });
    const { passwordHash: _, ...publicUser } = user;
    return publicUser;
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.prisma.client.user.findUnique({ where: { email } });
  }

  async findById(id: string): Promise<PublicUser | null> {
    const user = await this.prisma.client.user.findUnique({ where: { id } });
    if (!user) return null;
    const { passwordHash: _, ...publicUser } = user;
    return publicUser;
  }
}