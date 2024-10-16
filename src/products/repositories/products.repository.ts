import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.prisma.product.create({
      data: {
        ...createProductDto,
      },
    });

    return product;
  }

  async findAll() {
    const products = await this.prisma.product.findMany({
      include: {
        category: true,
      },
    });

    return {
      data: products,
    };
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
      },
    });

    return product;
  }

  async update(id: string, updateUserDto: UpdateProductDto) {
    const product = await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        ...updateUserDto,
      },
    });

    return product;
  }

  async remove(id: string) {
    const product = await this.prisma.product.delete({
      where: {
        id,
      },
    });

    return product;
  }
}
