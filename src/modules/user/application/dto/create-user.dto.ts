import { IsString, IsNumber, IsEmail, IsNotEmpty, } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
