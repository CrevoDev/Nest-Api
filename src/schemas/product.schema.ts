import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Item, itemSchema } from "./item.schema";

export type ProductDocument = HydratedDocument<Product>

@Schema()
export class Product {
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop({ type: [itemSchema] })
    items: Array<Item>;
    @Prop()
    brand: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product)