export enum UserRole {
  SOLICITANTE = 'SOLICITANTE',
  APROVADOR = 'APROVADOR',
  ADMIN = 'ADMIN',
}

export enum ApproverLevel {
  FIRST_LEVEL = 'FIRST_LEVEL',
  SECOND_LEVEL = 'SECOND_LEVEL',
}

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  approverLevel: ApproverLevel;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}