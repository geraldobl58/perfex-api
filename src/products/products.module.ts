import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductsRepository } from './repositories/products.repository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, ProductsRepository],
})
export class ProductsModule {}
