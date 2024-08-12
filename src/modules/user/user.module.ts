import { Module } from '@nestjs/common';
import { UserService } from './application/user.service';
import { UserController } from './infraestructure/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
