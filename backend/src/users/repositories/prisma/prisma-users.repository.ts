import { Injectable } from '@nestjs/common';
import { UsersRepository } from '@/users/repositories/users.repository.js';
import { PrismaService } from '@/config/prisma/prisma.service.js';
import { CreateUserDTO } from '@/users/dtos/create-user.dto.js';
import { ApproverLevel, UserRole } from '@/generated/prisma/enums.js';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateUserDTO): Promise<void> {
        await this.prisma.client.user.create({
            data: {
                name: data.name,
                email: data.email,
                passwordHash: data.password,
                role: data.role ?? UserRole.SOLICITANTE,
                approverLevel: data.approverLevel ?? ApproverLevel.FIRST_LEVEL,
            }
        });

    }
}