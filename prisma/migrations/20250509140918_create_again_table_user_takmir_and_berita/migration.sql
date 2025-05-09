-- CreateTable
CREATE TABLE `user` (
    `email` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `status` ENUM('PENDING', 'ACTIVE', 'INACTIVE') NULL DEFAULT 'PENDING',
    `role` ENUM('ADMIN', 'TAKMIR') NULL DEFAULT 'TAKMIR',

    UNIQUE INDEX `user_email_key`(`email`),
    INDEX `user_role_idx`(`role`),
    INDEX `user_status_idx`(`status`),
    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `takmir` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(100) NULL,
    `last_name` VARCHAR(100) NULL,
    `phone` VARCHAR(100) NULL,
    `address` VARCHAR(100) NULL,
    `sk_masjid` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NULL,

    UNIQUE INDEX `takmir_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `berita` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `content` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `image` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `takmir` ADD CONSTRAINT `takmir_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`username`) ON DELETE SET NULL ON UPDATE CASCADE;
