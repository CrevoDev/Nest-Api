import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ _id: false })
export class Address extends Document {
    @Prop()
    street: string
    @Prop({ default: 'N/A' })
    number: string
    @Prop()
    district: string
    @Prop()
    state: string
    @Prop()
    city: string
    @Prop()
    cep: string
}

export const AddressSchema = SchemaFactory.createForClass(Address)