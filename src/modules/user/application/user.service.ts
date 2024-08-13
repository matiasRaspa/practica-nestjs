import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserRepository } from '../domain/user.repository';
import { User } from '../domain/user';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userDomain = new User(createUserDto);
    return this.userRepository.createUser(userDomain);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: number) {
    const userDomain = await this.userRepository.findById(id);
    if (!userDomain) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return userDomain;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userDomain = await this.userRepository.findById(id);
    if (!userDomain) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    const updateUserDomain = Object.assign(userDomain, updateUserDto);
    return this.userRepository.updateUser(updateUserDomain);
  }

  async remove(id: number) {
    const userDomain = await this.userRepository.findById(id);
    if (!userDomain) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return this.userRepository.deleteUser(id);
  }
}
