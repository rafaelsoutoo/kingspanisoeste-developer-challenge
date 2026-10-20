import { Inject } from "@nestjs/common"
import { UsersRepository } from "../repositories/users.repository.js"
import { CreateUserDTO } from "../dtos/create-user.dto.js"

interface CreateUserUseCaseRequest {
    data: CreateUserDTO
}

export class CreateUserUseCase {
    constructor(
        @Inject(UsersRepository)
        private usersRepository: UsersRepository,
    ) { }

    async execute({
        data
    }: CreateUserUseCaseRequest): Promise<void> {
        await this.usersRepository.create(data);
    }
}