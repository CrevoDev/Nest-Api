import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name?: string;
    @IsEmail()
    email?: string;
    password?: string;
    birth_date?: Date;
}
