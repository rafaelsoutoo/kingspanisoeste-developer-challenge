import { CreateUserDTO } from '@/users/dtos/create-user.dto.js';
import type { PublicUser, UserEntity } from '@/users/entities/user.entity.js';

export abstract class UsersRepository {
  abstract create(data: CreateUserDTO & { passwordHash: string }): Promise<PublicUser>;
  abstract findByEmail(email: string): Promise<UserEntity | null>;
  abstract findById(id: string): Promise<PublicUser | null>;
}