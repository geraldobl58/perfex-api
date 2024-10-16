/*
  Warnings:

  - Changed the type of `status` on the `product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PRODUCT_STATUS" AS ENUM ('APPROVED', 'PENDING', 'REJECTED', 'REFUNDED', 'UNPAID');

-- AlterTable
ALTER TABLE "product" DROP COLUMN "status",
ADD COLUMN     "status" "PRODUCT_STATUS" NOT NULL;
