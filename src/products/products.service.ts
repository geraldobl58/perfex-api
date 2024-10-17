import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './repositories/products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly repository: ProductsRepository) {}

  create(createProductDto: CreateProductDto) {
    return this.repository.create(createProductDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.repository.update(id, updateProductDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
