/*
  Warnings:

  - You are about to drop the column `orderId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_userId_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_orderId_fkey";

-- AlterTable
ALTER TABLE "product" DROP COLUMN "orderId",
ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "order";

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
