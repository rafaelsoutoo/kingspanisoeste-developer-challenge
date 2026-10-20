import { Body, Controller, HttpCode, HttpStatus, Inject, Post, Req } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { CreateUserUseCase } from "./use-cases/create-user.use-case.js";
import { CreateUserDTO } from "./dtos/create-user.dto.js";

@Controller()
export class UsersController {
    constructor(
        @Inject(CreateUserUseCase)
        private createUserUseCase: CreateUserUseCase,
    ) {}

    @Post('criar')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({
        summary: 'Criar usuário',
        description: 'Cria um novo usuário no sistema.',
    })
    async createUser(@Body() body: CreateUserDTO): Promise<void> {
        await this.createUserUseCase.execute({ data: body });
    }
}
