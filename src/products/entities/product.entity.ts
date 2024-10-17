import { Product } from '@prisma/client';

export class ProductEntity implements Product {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  items: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}
