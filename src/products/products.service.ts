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

  async findAll(query: { page: number; limit: number; title: string }) {
    const { page = 1, limit = 10, title } = query;

    const result = await this.repository.findAll();

    let filteredProducts = result.data;

    filteredProducts = filteredProducts.filter((product) => {
      const matchesTitle = title
        ? product.title.toLowerCase().includes(title.toLowerCase())
        : true;

      return matchesTitle;
    });

    const total = filteredProducts.length;

    const startIndex = (page - 1) * limit;
    const paginatedProducts = filteredProducts.slice(
      startIndex,
      startIndex + limit,
    );

    return {
      total,
      page,
      limit,
      data: paginatedProducts,
    };
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
