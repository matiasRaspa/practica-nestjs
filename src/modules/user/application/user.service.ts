import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
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

    //Compruebo que el email no exista para devolver error al usuario
    await this.findOneByEmail(createUserDto.email);

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

  private async findOneByEmail(email: string): Promise<void> {
    const userDomain = await this.userRepository.findByEmail(email);

    //Si existe lanzo error
    if (userDomain) {
      throw new BadRequestException(`El Usuario con Email ${email} ya existe`);
    }
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
