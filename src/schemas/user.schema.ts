import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({required: true})
    name: string

    @Prop({required: true, unique: true})
    email: string

    @Prop({required: true, select: false})
    password: string

    @Prop({required: true})
    birth_date: Date

    @Prop({default: Date.now})
    created_at: Date

    @Prop({required: true, default: 'admin'})
    role: string
}

export const UserSchema = SchemaFactory.createForClass(User);