/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "category_title_key" ON "category"("title");

-- CreateIndex
CREATE UNIQUE INDEX "product_title_key" ON "product"("title");
