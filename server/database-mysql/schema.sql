-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecommerce` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ecommerce` ;

-- -----------------------------------------------------
-- Table `ecommerce`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `phoneN` VARCHAR(8) NOT NULL,
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `profile` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`cart` (
  `cart_id` INT NOT NULL,
  `user_id` INT NULL DEFAULT NULL,
  `user_user_id` INT NOT NULL,
  PRIMARY KEY (`cart_id`, `user_user_id`),
  INDEX `fk_cart_user1_idx` (`user_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_cart_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `ecommerce`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `quantity` INT NOT NULL DEFAULT '1',
  `price` VARCHAR(25) NOT NULL,
  `categorie` VARCHAR(45) NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  `user_user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_items_user1_idx` (`user_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_items_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `ecommerce`.`user` (`user_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`cart_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`cart_items` (
  `cart_items_id` INT NOT NULL AUTO_INCREMENT,
  `cart_id` INT NULL DEFAULT NULL,
  `quantity` INT NULL DEFAULT NULL,
  `price` VARCHAR(25) NULL DEFAULT NULL,
  `categorie` VARCHAR(45) NULL DEFAULT NULL,
  `cart_cart_id` INT NOT NULL,
  `items_id` INT NOT NULL,
  PRIMARY KEY (`cart_items_id`, `items_id`),
  INDEX `fk_cart_items_cart1_idx` (`cart_cart_id` ASC) VISIBLE,
  INDEX `fk_cart_items_items1_idx` (`items_id` ASC) VISIBLE,
  CONSTRAINT `fk_cart_items_cart1`
    FOREIGN KEY (`cart_cart_id`)
    REFERENCES `ecommerce`.`cart` (`cart_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_items_items1`
    FOREIGN KEY (`items_id`)
    REFERENCES `ecommerce`.`items` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`review` (
  `rev_id` INT NOT NULL AUTO_INCREMENT,
  `revRating` INT NOT NULL,
  `comments` VARCHAR(255) NULL DEFAULT NULL,
  `items_id` INT NOT NULL,
  `user_user_id` INT NOT NULL,
  PRIMARY KEY (`rev_id`),
  INDEX `fk_review_items1_idx` (`items_id` ASC) VISIBLE,
  INDEX `fk_review_user1_idx` (`user_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_review_items1`
    FOREIGN KEY (`items_id`)
    REFERENCES `ecommerce`.`items` (`id`),
  CONSTRAINT `fk_review_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `ecommerce`.`user` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`wishlists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`wishlists` (
  `wishlist_id` INT NOT NULL AUTO_INCREMENT,
  `items_id` INT NOT NULL,
  `user_user_id` INT NOT NULL,
  PRIMARY KEY (`wishlist_id`, `items_id`),
  INDEX `fk_wishLists_items1_idx` (`items_id` ASC) VISIBLE,
  INDEX `fk_wishlists_user1_idx` (`user_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_wishLists_items1`
    FOREIGN KEY (`items_id`)
    REFERENCES `ecommerce`.`items` (`id`),
  CONSTRAINT `fk_wishlists_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `ecommerce`.`user` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
