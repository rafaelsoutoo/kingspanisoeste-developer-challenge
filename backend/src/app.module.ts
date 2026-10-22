import { Module } from '@nestjs/common';
import { PrismaModule } from './config/prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
  ],
})
export class AppModule { }