import { IUserRepository } from '../../domain/user.repository';
import { User } from '../../domain/user';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryImpl implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findById(id: number): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  async createUser(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  async updateUser(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  async deleteUser(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
  /* async create(user: User): Promise<User> {
    const userOrmEntity = this.toPersistence(user);
    const savedUser = await this.userRepository.save(userOrmEntity);
    return this.toDomain(savedUser);
  } */
}