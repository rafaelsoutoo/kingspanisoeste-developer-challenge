import { CreateUserDTO } from "@/users/dtos/create-user.dto.js";
import { CreateUserUseCase } from "@/users/use-cases/create-user.use-case.js";
import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";

@Controller('auth')
export class AuthController {
    constructor(
        @Inject(CreateUserUseCase)
        private createUserUseCase: CreateUserUseCase,
    ) {}

    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({
        summary: 'Cadastra novo usuário',
        // description: 'Cria um novo usuário no sistema.',
    })
    async createUser(@Body() body: CreateUserDTO): Promise<void> {
        await this.createUserUseCase.execute({ data: body });
    }
}
