import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateProductDto } from './create-product.dto';
import { IItem } from '../interface/item';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsNotEmpty()
    items?: Array<IItem>
}
