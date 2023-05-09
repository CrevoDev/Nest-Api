import { IsNotEmpty } from "class-validator";
import { IItem } from "../interface/item";

export class CreateProductDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    items: Array<IItem>
    @IsNotEmpty()
    brand: string
}
