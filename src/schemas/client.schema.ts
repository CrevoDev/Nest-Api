import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Address, AddressSchema } from "./address.schema";

export type ClientDocument = HydratedDocument<Client>

@Schema()
export class Client {
    @Prop({ required: true })
    name: string;
    @Prop({ required: false, unique: true })
    email: string;
    @Prop({ required: false })
    number: string;
    @Prop({ required: false })
    birth_date?: Date;
    @Prop({ required: false, unique: true })
    rg: string;
    @Prop({ required: false, unique: true })
    cnh: string;
    @Prop({ required: true, unique: true })
    cpf: string;
    @Prop({ required: false })
    marital_status?: string
    @Prop({ type: AddressSchema })
    addres: Address
}

export const ClientSchema = SchemaFactory.createForClass(Client);