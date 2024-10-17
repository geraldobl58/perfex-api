import { Category } from '@prisma/client';

export class CategoryEntity implements Category {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}
