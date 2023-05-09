import { IsEmail, IsNotEmpty } from "class-validator";
import { IAddress } from "../interface/client";

export class CreateClientDto {
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email?: string;
    number?: string;
    birth_date?: Date;
    rg?: string;
    cnh?: string;
    cpf: string;
    marital_status?: string
    addres?: IAddress
}
