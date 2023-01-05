-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `user_type` ENUM('LANDLORD', 'CLIENT', 'CARETAKER') NOT NULL DEFAULT 'CLIENT',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accounts` (
    `accounts` INTEGER NOT NULL AUTO_INCREMENT,
    `landlord` INTEGER NOT NULL,
    `bank_name` VARCHAR(200) NOT NULL,
    `bank_branch` VARCHAR(200) NULL,
    `acc_name` VARCHAR(200) NOT NULL,
    `acc_num` INTEGER NOT NULL,

    UNIQUE INDEX `landlord`(`landlord`),
    UNIQUE INDEX `acc_name`(`acc_name`),
    UNIQUE INDEX `acc_num`(`acc_num`),
    PRIMARY KEY (`accounts`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accumulator` (
    `accumulator` INTEGER NOT NULL AUTO_INCREMENT,
    `loan` INTEGER NOT NULL,
    `invoice` INTEGER NOT NULL,
    `total` DOUBLE NOT NULL,
    `charge` DOUBLE NOT NULL,

    UNIQUE INDEX `loan`(`loan`),
    UNIQUE INDEX `invoice`(`invoice`),
    PRIMARY KEY (`accumulator`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agent` (
    `agent` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(200) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `title` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `username`(`username`),
    PRIMARY KEY (`agent`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agreement` (
    `agreement` INTEGER NOT NULL AUTO_INCREMENT,
    `room` INTEGER NOT NULL,
    `client` INTEGER NOT NULL,
    `amount` DOUBLE NULL,
    `start_date` DATE NOT NULL,
    `duration` INTEGER NULL,
    `review` INTEGER NULL,
    `terminated` DATE NULL,
    `valid` INTEGER NOT NULL,
    `comment` VARCHAR(255) NULL,

    INDEX `room`(`room`),
    UNIQUE INDEX `identification1`(`client`, `room`, `start_date`),
    PRIMARY KEY (`agreement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `balance_initial` (
    `balance_initial` INTEGER NOT NULL AUTO_INCREMENT,
    `client` INTEGER NOT NULL,
    `invoice` INTEGER NULL,
    `date_g` DATE NULL,
    `amount_g` DOUBLE NULL,
    `amount_v` DOUBLE NULL,
    `amount` DOUBLE NULL,
    `date_v` DATE NULL,
    `comment` VARCHAR(255) NULL,
    `date` DATE NOT NULL,

    INDEX `invoice`(`invoice`),
    UNIQUE INDEX `identification2`(`client`, `date`),
    PRIMARY KEY (`balance_initial`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `business` (
    `business` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `ceo` VARCHAR(255) NULL,
    `consumption` DOUBLE NULL,
    `market_rent_price` DOUBLE NULL,
    `water_cost` DOUBLE NULL,
    `is_current` INTEGER NOT NULL,

    UNIQUE INDEX `identification13`(`name`),
    UNIQUE INDEX `identification23`(`ceo`),
    PRIMARY KEY (`business`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `caretaker` (
    `caretaker` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(200) NOT NULL,
    `name` VARCHAR(100) NULL,
    `title` VARCHAR(100) NULL,

    UNIQUE INDEX `username`(`username`),
    PRIMARY KEY (`caretaker`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `changes` (
    `pk` INTEGER NOT NULL,
    `source` TEXT NOT NULL,
    `operation` ENUM('update', 'create', 'delete', '') NOT NULL,
    `datetime` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `id`(`pk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `charge` (
    `charge` INTEGER NOT NULL AUTO_INCREMENT,
    `service` INTEGER NOT NULL,
    `invoice` INTEGER NOT NULL,
    `name` VARCHAR(255) NULL,
    `price` DOUBLE NULL,
    `factor` DOUBLE NULL,
    `amount` DOUBLE NULL,

    INDEX `service`(`service`),
    UNIQUE INDEX `id4`(`invoice`, `service`),
    PRIMARY KEY (`charge`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client` (
    `client` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NULL,
    `quarterly` INTEGER NOT NULL,
    `contact` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,

    UNIQUE INDEX `id5`(`name`),
    PRIMARY KEY (`client`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `closing_balance` (
    `closing_balance` INTEGER NOT NULL AUTO_INCREMENT,
    `invoice` INTEGER NOT NULL,
    `amount` DOUBLE NULL,
    `posted` INTEGER NOT NULL,

    UNIQUE INDEX `id6`(`invoice`),
    PRIMARY KEY (`closing_balance`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `communications` (
    `communications` INTEGER NOT NULL,
    `client` INTEGER NOT NULL,
    `ref` VARCHAR(100) NOT NULL,

    INDEX `client`(`client`),
    PRIMARY KEY (`communications`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `credit` (
    `credit` INTEGER NOT NULL AUTO_INCREMENT,
    `client` INTEGER NOT NULL,
    `invoice` INTEGER NULL,
    `reason` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `amount` DOUBLE NULL,

    INDEX `invoice`(`invoice`),
    UNIQUE INDEX `id7`(`client`, `reason`, `date`),
    PRIMARY KEY (`credit`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `debit` (
    `debit` INTEGER NOT NULL AUTO_INCREMENT,
    `client` INTEGER NOT NULL,
    `invoice` INTEGER NULL,
    `reason` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `amount` DOUBLE NULL,

    INDEX `invoice`(`invoice`),
    UNIQUE INDEX `id8`(`client`, `reason`, `date`),
    PRIMARY KEY (`debit`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `eaccount` (
    `eaccount` INTEGER NOT NULL AUTO_INCREMENT,
    `num` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NULL,
    `is_invalid` INTEGER NOT NULL,
    `comment` VARCHAR(255) NULL,
    `source` VARCHAR(255) NULL,

    UNIQUE INDEX `id9`(`num`),
    PRIMARY KEY (`eaccount`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ebill` (
    `ebill` INTEGER NOT NULL AUTO_INCREMENT,
    `msg` INTEGER NULL,
    `eaccount` INTEGER NOT NULL,
    `invoice` INTEGER NULL,
    `due_date` DATE NOT NULL,
    `current_amount` DOUBLE NULL,

    INDEX `invoice`(`invoice`),
    INDEX `msg`(`msg`),
    UNIQUE INDEX `identification10`(`eaccount`, `due_date`),
    PRIMARY KEY (`ebill`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `econnection` (
    `econnection` INTEGER NOT NULL AUTO_INCREMENT,
    `room` INTEGER NOT NULL,
    `emeter` INTEGER NOT NULL,
    `rate` INTEGER NULL,
    `start_date` DATE NULL,
    `end_date` DATE NOT NULL,
    `start_reading` INTEGER NULL,
    `share` INTEGER NULL,

    INDEX `emeter`(`emeter`),
    INDEX `end_date`(`end_date`),
    INDEX `room`(`room`),
    UNIQUE INDEX `id11`(`room`, `emeter`, `end_date`),
    PRIMARY KEY (`econnection`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `electricity` (
    `electricity` INTEGER NOT NULL AUTO_INCREMENT,
    `eaccount` INTEGER NOT NULL,
    `invoice` INTEGER NOT NULL,
    `eaccount_no` VARCHAR(30) NULL,
    `emeter_no` VARCHAR(30) NULL,
    `due_date` DATE NULL,
    `payable_to_kplc` DOUBLE NULL,
    `sharing` VARCHAR(20) NULL,
    `amount` DOUBLE NULL,

    INDEX `invoice`(`invoice`),
    UNIQUE INDEX `id12`(`eaccount`, `invoice`),
    PRIMARY KEY (`electricity`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `elink` (
    `elink` INTEGER NOT NULL AUTO_INCREMENT,
    `emeter` INTEGER NOT NULL,
    `eaccount` INTEGER NOT NULL,
    `origin` VARCHAR(255) NULL,

    INDEX `eaccount`(`eaccount`),
    UNIQUE INDEX `id13`(`emeter`, `eaccount`),
    PRIMARY KEY (`elink`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emeter` (
    `emeter` INTEGER NOT NULL AUTO_INCREMENT,
    `num` VARCHAR(50) NOT NULL,
    `uid` INTEGER NULL,
    `name` VARCHAR(255) NULL,
    `is_invalid` INTEGER NOT NULL,
    `comment` VARCHAR(255) NULL,
    `source` VARCHAR(255) NULL,
    `new_num` VARCHAR(50) NULL,

    UNIQUE INDEX `id14`(`num`),
    UNIQUE INDEX `id`(`new_num`),
    PRIMARY KEY (`emeter`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ereading` (
    `ereading` INTEGER NOT NULL AUTO_INCREMENT,
    `emeter` INTEGER NOT NULL,
    `invoice` INTEGER NULL,
    `date` DATE NOT NULL,
    `value` DOUBLE NULL,
    `remark` VARCHAR(255) NULL,

    INDEX `invoice`(`invoice`),
    UNIQUE INDEX `identification15`(`emeter`, `date`),
    PRIMARY KEY (`ereading`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invoice` (
    `invoice` INTEGER NOT NULL AUTO_INCREMENT,
    `client` INTEGER NOT NULL,
    `period` INTEGER NOT NULL,
    `is_valid` INTEGER NOT NULL,

    INDEX `period`(`period`),
    UNIQUE INDEX `id16`(`client`, `period`, `is_valid`),
    PRIMARY KEY (`invoice`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `job` (
    `job` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `dbname` VARCHAR(255) NULL,
    `sql` VARCHAR(255) NULL,

    UNIQUE INDEX `id17`(`name`),
    PRIMARY KEY (`job`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `landlord` (
    `landlord` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,
    `title` INTEGER NULL,
    `username` VARCHAR(200) NOT NULL,
    `paybill` INTEGER NOT NULL,

    UNIQUE INDEX `username`(`username`),
    UNIQUE INDEX `paybill`(`paybill`),
    PRIMARY KEY (`landlord`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `loan` (
    `loan` INTEGER NOT NULL AUTO_INCREMENT,
    `agreement` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,
    `instalment` INTEGER NOT NULL,
    `start_date` DATE NOT NULL,

    INDEX `agreement`(`agreement`),
    PRIMARY KEY (`loan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mobile` (
    `mobile` INTEGER NOT NULL AUTO_INCREMENT,
    `client` INTEGER NULL,
    `num` VARCHAR(30) NOT NULL,
    `contact` VARCHAR(30) NULL,

    UNIQUE INDEX `id18`(`num`),
    INDEX `client`(`client`),
    PRIMARY KEY (`mobile`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `msg` (
    `msg` INTEGER NOT NULL AUTO_INCREMENT,
    `id` VARCHAR(32) NOT NULL,
    `body` LONGTEXT NULL,
    `date` DATE NULL,

    UNIQUE INDEX `id19`(`id`),
    PRIMARY KEY (`msg`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `note` (
    `note` INTEGER NOT NULL AUTO_INCREMENT,
    `invoice` INTEGER NOT NULL,
    `info` LONGTEXT NULL,

    UNIQUE INDEX `id20`(`invoice`),
    PRIMARY KEY (`note`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `payment` INTEGER NOT NULL AUTO_INCREMENT,
    `client` INTEGER NOT NULL,
    `invoice` INTEGER NULL,
    `date` DATE NOT NULL,
    `bank` VARCHAR(255) NULL,
    `amount` DOUBLE NULL,
    `type` VARCHAR(20) NULL,
    `ref` VARCHAR(30) NOT NULL,
    `description` VARCHAR(50) NULL,

    INDEX `invoice`(`invoice`),
    INDEX `ref`(`ref`),
    UNIQUE INDEX `id21`(`client`, `date`),
    PRIMARY KEY (`payment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `period` (
    `period` INTEGER NOT NULL AUTO_INCREMENT,
    `year` INTEGER NOT NULL,
    `month` INTEGER NOT NULL,
    `cutoff` DATE NULL,

    UNIQUE INDEX `identification22`(`year`, `month`),
    PRIMARY KEY (`period`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `picture` (
    `picture` INTEGER NOT NULL AUTO_INCREMENT,
    `room` INTEGER NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `elevation` VARCHAR(50) NULL,

    UNIQUE INDEX `identification23`(`room`, `name`),
    PRIMARY KEY (`picture`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `size` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `property` (
    `property` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` VARCHAR(200) NOT NULL,
    `rental_unit` INTEGER NOT NULL,
    `landlord` INTEGER NOT NULL,
    `agent` INTEGER NULL,
    `caretaker` INTEGER NULL,
    `name` VARCHAR(100) NULL,
    `location` VARCHAR(100) NULL,

    UNIQUE INDEX `uid`(`uid`),
    UNIQUE INDEX `landlord_pk`(`landlord`),
    UNIQUE INDEX `agent_pk`(`agent`),
    UNIQUE INDEX `caretaker`(`caretaker`),
    UNIQUE INDEX `property_name`(`name`),
    INDEX `property_ibfk_3`(`rental_unit`),
    PRIMARY KEY (`property`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rent` (
    `rent` INTEGER NOT NULL AUTO_INCREMENT,
    `invoice` INTEGER NOT NULL,
    `agreement` INTEGER NOT NULL,
    `room_no` VARCHAR(255) NULL,
    `price` DOUBLE NULL,
    `agreement_start_date` DATE NOT NULL,
    `rental_period` VARCHAR(30) NOT NULL,
    `factor` INTEGER NULL,
    `amount` DOUBLE NULL,

    INDEX `agreement`(`agreement`),
    UNIQUE INDEX `id24`(`invoice`, `agreement`),
    PRIMARY KEY (`rent`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `repayment` (
    `repayment` INTEGER NOT NULL AUTO_INCREMENT,
    `loan` INTEGER NOT NULL,
    `invoice` INTEGER NULL,
    `date` DATE NOT NULL,
    `amount` DOUBLE NOT NULL,

    UNIQUE INDEX `loan`(`loan`),
    UNIQUE INDEX `invoice`(`invoice`),
    UNIQUE INDEX `id_date`(`date`),
    PRIMARY KEY (`repayment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `room` (
    `room` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` VARCHAR(255) NOT NULL,
    `is_psuedo` INTEGER NOT NULL,
    `title` VARCHAR(255) NULL,
    `floor` VARCHAR(255) NULL,
    `wing` VARCHAR(255) NULL,
    `width_ft` INTEGER NULL,
    `width_inch` INTEGER NULL,
    `breadth_ft` INTEGER NULL,
    `breadth_inch` INTEGER NULL,
    `area_sq_m` DOUBLE NULL,
    `area_sq_ft` INTEGER NULL,

    UNIQUE INDEX `identification25`(`uid`),
    PRIMARY KEY (`room`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `qty` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,

    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service` (
    `service` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `price` DOUBLE NULL,
    `auto` INTEGER NOT NULL,

    UNIQUE INDEX `id26`(`name`),
    PRIMARY KEY (`service`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `value` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,

    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subscription` (
    `subscription` INTEGER NOT NULL AUTO_INCREMENT,
    `client` INTEGER NOT NULL,
    `service` INTEGER NOT NULL,
    `amount` DOUBLE NULL,

    INDEX `service`(`service`),
    UNIQUE INDEX `id27`(`client`, `service`),
    PRIMARY KEY (`subscription`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `water` (
    `water` INTEGER NOT NULL AUTO_INCREMENT,
    `wconnection` INTEGER NOT NULL,
    `invoice` INTEGER NOT NULL,
    `serial_no` VARCHAR(255) NULL,
    `prev_date` DATE NULL,
    `prev_value` DOUBLE NULL,
    `curr_date` DATE NULL,
    `curr_value` DOUBLE NULL,
    `consumption` DOUBLE NULL,
    `rate` DOUBLE NULL,
    `amount` DOUBLE NULL,

    INDEX `invoice`(`invoice`),
    UNIQUE INDEX `id28`(`wconnection`, `invoice`),
    PRIMARY KEY (`water`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wconnection` (
    `wconnection` INTEGER NOT NULL AUTO_INCREMENT,
    `room` INTEGER NOT NULL,
    `wmeter` INTEGER NOT NULL,
    `rate` DOUBLE NULL,
    `start_date` DATE NULL,
    `end_date` DATE NOT NULL,
    `start_reading` INTEGER NULL,
    `end_reading` INTEGER NULL,
    `disconnected` DATE NULL,

    INDEX `wmeter`(`wmeter`),
    UNIQUE INDEX `id29`(`room`, `wmeter`, `end_date`),
    PRIMARY KEY (`wconnection`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wmeter` (
    `wmeter` INTEGER NOT NULL AUTO_INCREMENT,
    `serial_no` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NULL,
    `comment` VARCHAR(255) NULL,
    `is_supply` INTEGER NOT NULL,

    UNIQUE INDEX `id30`(`serial_no`),
    PRIMARY KEY (`wmeter`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wreading` (
    `wreading` INTEGER NOT NULL AUTO_INCREMENT,
    `wmeter` INTEGER NOT NULL,
    `invoice` INTEGER NULL,
    `date` DATE NOT NULL,
    `value` DOUBLE NULL,
    `remark` VARCHAR(255) NULL,

    INDEX `invoice`(`invoice`),
    INDEX `wmeter`(`wmeter`),
    UNIQUE INDEX `identification31`(`date`, `wmeter`),
    PRIMARY KEY (`wreading`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wreading_changes` (
    `wreading_changes` INTEGER NOT NULL AUTO_INCREMENT,
    `table_name` VARCHAR(100) NOT NULL,
    `operation` VARCHAR(100) NOT NULL,
    `pk` INTEGER NOT NULL,
    `date` DATE NOT NULL,

    PRIMARY KEY (`wreading_changes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`landlord`) REFERENCES `landlord`(`landlord`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `accumulator` ADD CONSTRAINT `accumulator_ibfk_2` FOREIGN KEY (`loan`) REFERENCES `loan`(`loan`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `accumulator` ADD CONSTRAINT `accumulator_ibfk_3` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `agreement` ADD CONSTRAINT `agreement_ibfk_1` FOREIGN KEY (`room`) REFERENCES `room`(`room`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `agreement` ADD CONSTRAINT `agreement_ibfk_2` FOREIGN KEY (`client`) REFERENCES `client`(`client`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `balance_initial` ADD CONSTRAINT `balance_initial_ibfk_1` FOREIGN KEY (`client`) REFERENCES `client`(`client`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `balance_initial` ADD CONSTRAINT `balance_initial_ibfk_2` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `charge` ADD CONSTRAINT `charge_ibfk_1` FOREIGN KEY (`service`) REFERENCES `service`(`service`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `charge` ADD CONSTRAINT `charge_ibfk_2` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `closing_balance` ADD CONSTRAINT `closing_balance_ibfk_1` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `communications` ADD CONSTRAINT `communications_ibfk_1` FOREIGN KEY (`client`) REFERENCES `client`(`client`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `credit` ADD CONSTRAINT `credit_ibfk_1` FOREIGN KEY (`client`) REFERENCES `client`(`client`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `credit` ADD CONSTRAINT `credit_ibfk_2` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `debit` ADD CONSTRAINT `debit_ibfk_1` FOREIGN KEY (`client`) REFERENCES `client`(`client`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `debit` ADD CONSTRAINT `debit_ibfk_2` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ebill` ADD CONSTRAINT `ebill_ibfk_1` FOREIGN KEY (`msg`) REFERENCES `msg`(`msg`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ebill` ADD CONSTRAINT `ebill_ibfk_2` FOREIGN KEY (`eaccount`) REFERENCES `eaccount`(`eaccount`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ebill` ADD CONSTRAINT `ebill_ibfk_3` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `econnection` ADD CONSTRAINT `econnection_ibfk_1` FOREIGN KEY (`room`) REFERENCES `room`(`room`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `econnection` ADD CONSTRAINT `econnection_ibfk_2` FOREIGN KEY (`emeter`) REFERENCES `emeter`(`emeter`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `electricity` ADD CONSTRAINT `electricity_ibfk_1` FOREIGN KEY (`eaccount`) REFERENCES `eaccount`(`eaccount`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `electricity` ADD CONSTRAINT `electricity_ibfk_2` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `elink` ADD CONSTRAINT `elink_ibfk_1` FOREIGN KEY (`emeter`) REFERENCES `emeter`(`emeter`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `elink` ADD CONSTRAINT `elink_ibfk_2` FOREIGN KEY (`eaccount`) REFERENCES `eaccount`(`eaccount`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ereading` ADD CONSTRAINT `ereading_ibfk_1` FOREIGN KEY (`emeter`) REFERENCES `emeter`(`emeter`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ereading` ADD CONSTRAINT `ereading_ibfk_2` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `invoice` ADD CONSTRAINT `invoice_ibfk_1` FOREIGN KEY (`client`) REFERENCES `client`(`client`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `invoice` ADD CONSTRAINT `invoice_ibfk_2` FOREIGN KEY (`period`) REFERENCES `period`(`period`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `loan` ADD CONSTRAINT `loan_ibfk_1` FOREIGN KEY (`agreement`) REFERENCES `agreement`(`agreement`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `mobile` ADD CONSTRAINT `mobile_ibfk_1` FOREIGN KEY (`client`) REFERENCES `client`(`client`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `note` ADD CONSTRAINT `note_ibfk_1` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`client`) REFERENCES `client`(`client`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `picture` ADD CONSTRAINT `picture_ibfk_1` FOREIGN KEY (`room`) REFERENCES `room`(`room`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_ibfk_1` FOREIGN KEY (`landlord`) REFERENCES `landlord`(`landlord`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_ibfk_2` FOREIGN KEY (`agent`) REFERENCES `agent`(`agent`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_ibfk_3` FOREIGN KEY (`rental_unit`) REFERENCES `room`(`room`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rent` ADD CONSTRAINT `rent_ibfk_1` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rent` ADD CONSTRAINT `rent_ibfk_2` FOREIGN KEY (`agreement`) REFERENCES `agreement`(`agreement`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `repayment` ADD CONSTRAINT `invoice_fk` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `repayment` ADD CONSTRAINT `loan_fk` FOREIGN KEY (`loan`) REFERENCES `loan`(`loan`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sales` ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `subscription_ibfk_1` FOREIGN KEY (`client`) REFERENCES `client`(`client`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `subscription_ibfk_2` FOREIGN KEY (`service`) REFERENCES `service`(`service`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `water` ADD CONSTRAINT `water_ibfk_1` FOREIGN KEY (`wconnection`) REFERENCES `wconnection`(`wconnection`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `water` ADD CONSTRAINT `water_ibfk_2` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wconnection` ADD CONSTRAINT `wconnection_ibfk_1` FOREIGN KEY (`room`) REFERENCES `room`(`room`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wconnection` ADD CONSTRAINT `wconnection_ibfk_2` FOREIGN KEY (`wmeter`) REFERENCES `wmeter`(`wmeter`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wreading` ADD CONSTRAINT `wreading_ibfk_1` FOREIGN KEY (`wmeter`) REFERENCES `wmeter`(`wmeter`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wreading` ADD CONSTRAINT `wreading_ibfk_2` FOREIGN KEY (`invoice`) REFERENCES `invoice`(`invoice`) ON DELETE NO ACTION ON UPDATE NO ACTION;
