import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { MachinesModule } from './machines/machines.module';
import { UsersService } from './users.service';

@Module({
  imports: [
    JwtModule.register({}),
    AuthModule,
    MachinesModule,
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class AppModule {}
