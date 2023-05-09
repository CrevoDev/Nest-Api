import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsEmail } from 'class-validator';
import { IAddress } from '../interface/client';

export class UpdateClientDto extends PartialType(CreateClientDto) {
    @IsEmail()
    email?: string;
    birth_date?: Date;
    marital_status?: string
    addres?: IAddress
}
