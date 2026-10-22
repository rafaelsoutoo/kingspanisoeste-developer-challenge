import type { ApproverLevel, UserRole } from '@/generated/prisma/enums.js';

export interface JwtPayload {
  sub: string;
  email: string;
  role: UserRole;
  approverLevel: ApproverLevel | null;
}

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  approverLevel: ApproverLevel | null;
}