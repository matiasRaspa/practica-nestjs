import { IsEmail } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  /* @PrimaryGeneratedColumn('uuid')//Alfanumerico
  id: string; */
  @PrimaryGeneratedColumn() //Autoincremental
  id: number;

  @Column({ length: 64 })
  name: string;

  @Column()
  age: number;

  /* @Index({ unique: true }) */
  @Column({ type: 'varchar', length: 64, unique: true })
  @IsEmail()
  email: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'is_deleted', default: false })
  isDeleted: boolean;
}
