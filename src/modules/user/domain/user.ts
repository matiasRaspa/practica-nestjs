export class User {
  id?: number;
  name: string;
  age: number;
  email: string;
  updatedAt?: Date;
  createdAt?: Date;
  isDeleted?: boolean;

  constructor(user: {id?: number, name: string, age: number, email: string, updatedAt?: Date, createdAt?: Date, isDeleted?: boolean}) {
    this.id = user?.id
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
    this.updatedAt = user.updatedAt;
    this.createdAt = user.createdAt;
    this.isDeleted = user.isDeleted ?? false;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  updateName(name: string): void {
    this.email = name;
    this.updatedAt = new Date();
  }

  getAge(): number {
    return this.age;
  }

  updateAge(age: string): void {
    this.email = age;
    this.updatedAt = new Date();
  }

  getEmail(): string {
    return this.email;
  }

  updateEmail(email: string): void {
    this.email = email;
    this.updatedAt = new Date();
  }

  getIsDeleted(): boolean {
    return this.isDeleted;
  }

  updateIsDeleted(isDeleted: boolean): void {
    this.isDeleted = isDeleted;
    this.updatedAt = new Date();
  }
}
