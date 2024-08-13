import { IUserRepository } from '../../domain/user.repository';
import { User } from '../../domain/user';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserMapper } from './user.mapper';

@Injectable()
export class UserRepositoryImpl implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findById(id: number): Promise<User | null> {
    const userEntity = await this.userRepository.findOneBy({ id });
    if (!userEntity) {
      return null;
    }
    return UserMapper.entityToDomain(userEntity);
  }

  async findAll(): Promise<User[]> {
    const userEntityList = await this.userRepository.find();
    const userDomainList = userEntityList.map((u) =>
      UserMapper.entityToDomain(u),
    );
    return userDomainList;
  }

  async createUser(userDomain: User): Promise<User> {
    const userEntity = UserMapper.domainToEntity(userDomain);

    const savedUser = await this.userRepository.save(userEntity);

    return UserMapper.entityToDomain(savedUser);
  }

  async updateUser(userDomain: User): Promise<User> {
    const userEntity = UserMapper.domainToEntity(userDomain);

    const savedUser = await this.userRepository.save(userEntity);

    return UserMapper.entityToDomain(savedUser);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
