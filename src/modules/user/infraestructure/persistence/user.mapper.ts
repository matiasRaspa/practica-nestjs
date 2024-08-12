import { plainToClass } from '@nestjs/class-transformer';
import { User } from '../../domain/user';
import { UserEntity } from './user.entity';

export class UserMapper {
  // Método para mapear de Entidad a Dominio
  static entityToDomain(userEntity: UserEntity): User {
    return plainToClass(User, userEntity);
  }

  // Método para mapear de Dominio a Entidad
  static domainToEntity(userDomain: User): UserEntity {
    return plainToClass(UserEntity, userDomain);
  }
}
