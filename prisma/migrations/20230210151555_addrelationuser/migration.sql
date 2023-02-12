/*
  Warnings:

  - You are about to drop the column `username` on the `landlord` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `agent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `landlord` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `landlord` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `username` ON `landlord`;

-- AlterTable
ALTER TABLE `agent` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `client` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `landlord` DROP COLUMN `username`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `agent_userId_key` ON `agent`(`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `client_userId_key` ON `client`(`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `landlord_userId_key` ON `landlord`(`userId`);

-- AddForeignKey
ALTER TABLE `agent` ADD CONSTRAINT `agent_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `client_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `landlord` ADD CONSTRAINT `landlord_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
