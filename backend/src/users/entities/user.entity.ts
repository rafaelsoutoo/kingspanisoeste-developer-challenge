import type { ApproverLevel, UserRole } from '@/generated/prisma/enums.js';

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  approverLevel: ApproverLevel | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type PublicUser = Omit<UserEntity, 'passwordHash'>;