/*
  Warnings:

  - Changed the type of `type` on the `comments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TypeContent" AS ENUM ('BLOG', 'ARTICLE');

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "type",
ADD COLUMN     "type" "TypeContent" NOT NULL;
