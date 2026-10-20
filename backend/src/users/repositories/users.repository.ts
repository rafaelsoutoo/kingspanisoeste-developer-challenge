import { CreateUserDTO } from "@/users/dtos/create-user.dto.js";

export abstract class UsersRepository {
    abstract create(data: CreateUserDTO): Promise<void>
}	