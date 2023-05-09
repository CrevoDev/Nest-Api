import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Item extends Document {
    @Prop()
    coust: number;
    @Prop()
    price: number;
    @Prop({ default: Date.now })
    created_at: Date;
    @Prop()
    saled_at: Date;
}

export const itemSchema = SchemaFactory.createForClass(Item)