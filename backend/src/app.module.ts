import { Module } from '@nestjs/common';
import { PrismaModule } from './config/prisma/prisma.module.js';
import { UsersModule } from './users/users.module.js';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
  ],
})
export class AppModule { }