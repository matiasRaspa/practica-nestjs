export class User {
  _id: number;
  _name: string;
  _age: number;
  _email: string;
  _updatedAt?: Date;
  _createdAt?: Date;
  _isDeleted?: boolean;

  constructor(id, name, age, email, updatedAt?, createdAt?, isDeleted?) {
    this._id = id
    this._name = name;
    this._age = age;
    this._email = email;
    this._updatedAt = updatedAt;
    this._createdAt = createdAt;
    this._isDeleted = isDeleted ?? false;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  updateName(name: string): void {
    this._email = name;
    this._updatedAt = new Date();
  }

  get age(): number {
    return this._age;
  }

  updateAge(age: string): void {
    this._email = age;
    this._updatedAt = new Date();
  }

  get email(): string {
    return this._email;
  }

  updateEmail(email: string): void {
    this._email = email;
    this._updatedAt = new Date();
  }

  get isDeleted(): boolean {
    return this._isDeleted;
  }

  updateIsDeleted(isDeleted: boolean): void {
    this._isDeleted = isDeleted;
    this._updatedAt = new Date();
  }
}
