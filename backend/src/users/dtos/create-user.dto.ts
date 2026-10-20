import { IsEmail, IsNotEmpty, IsString, IsEnum, MinLength, IsOptional, ValidateIf, } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ApproverLevel, UserRole } from '@/generated/prisma/enums.js';

export class CreateUserDTO {
    @ApiProperty({ description: 'Nome do usuário', example: 'Maria Silva' })
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    @IsString({ message: 'O nome deve ser um texto' })
    name: string;

    @ApiProperty({ description: 'E-mail do usuário', example: 'maria@empresa.com' })
    @IsNotEmpty({ message: 'O e-mail é obrigatório' })
    @IsEmail({}, { message: 'Informe um e-mail válido' })
    email: string;

    @ApiProperty({ description: 'Senha do usuário', minLength: 8, example: 'Senha@123' })
    @IsNotEmpty({ message: 'A senha é obrigatória' })
    @IsString({ message: 'A senha deve ser um texto' })
    @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    password: string;

    @ApiProperty({ description: 'Papel do usuário', enum: UserRole, default: UserRole.SOLICITANTE })
    @IsOptional()
    @IsEnum(UserRole, { message: 'Papel inválido' })
    role: UserRole = UserRole.SOLICITANTE;

    @ApiPropertyOptional({ description: 'Obrigatório apenas se o papel for aprovador', enum: ApproverLevel, default: ApproverLevel.FIRST_LEVEL })
    @ValidateIf((o: CreateUserDTO) => o.role === UserRole.APROVADOR)
    @IsNotEmpty({ message: 'O nível de aprovação é obrigatório para aprovadores' })
    @IsEnum(ApproverLevel, { message: 'Nível de aprovação inválido' })
    @IsOptional()
    approverLevel?: ApproverLevel = ApproverLevel.FIRST_LEVEL;
}