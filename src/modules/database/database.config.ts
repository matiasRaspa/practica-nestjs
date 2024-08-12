import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from '../user/infraestructure/persistence/user.entity';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const { database, port, password, username, host } =
    configService.get('config.mysql');
  return {
    type: 'mysql',
    host,
    port,
    username,
    password,
    database,
    entities: [UserEntity],
    synchronize: false,
    logging: true,
  };
};
