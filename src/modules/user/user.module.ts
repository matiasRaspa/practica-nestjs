import { Module } from '@nestjs/common';
import { UserService } from './application/user.service';
import { UserController } from './infraestructure/user.controller';
import { UserRepositoryImpl } from './infraestructure/persistence/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infraestructure/persistence/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, {
    provide: 'UserRepository',
    useClass: UserRepositoryImpl
  }],
  exports: [UserService],
})
export class UserModule {}
