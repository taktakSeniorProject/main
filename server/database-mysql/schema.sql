-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
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
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `ecommerce`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`review` (
  `rev_id` INT NOT NULL AUTO_INCREMENT,
  `revRating` INT NOT NULL,
  `comments` VARCHAR(255) NULL,
  PRIMARY KEY (`rev_id`));


-- -----------------------------------------------------
-- Table `ecommerce`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `price` VARCHAR(25) NOT NULL,
  `gategorie` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_items_review1_idx` (`review_rev_id` ASC) VISIBLE,
  CONSTRAINT `fk_items_review1`
    FOREIGN KEY (`review_rev_id`)
    REFERENCES `ecommerce`.`review` (`rev_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `ecommerce`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`review` (
  `rev_id` INT NOT NULL AUTO_INCREMENT,
  `revRating` INT NOT NULL,
  `comments` VARCHAR(255) NULL DEFAULT NULL,
  `user_user_id` INT NOT NULL,
  PRIMARY KEY (`rev_id`),
  INDEX `fk_review_user1_idx` (`user_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_review_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `ecommerce`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `ecommerce`.`wishLists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`wishLists` (
  `wishlist_id` INT NOT NULL AUTO_INCREMENT,
  `items_id` INT NOT NULL,
  PRIMARY KEY (`wishlist_id`, `items_id`),
  INDEX `fk_wishLists_items1_idx` (`items_id` ASC) VISIBLE,
  CONSTRAINT `fk_wishLists_items1`
    FOREIGN KEY (`items_id`)
    REFERENCES `ecommerce`.`items` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `ecommerce`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `items_id` INT NOT NULL,
  `bacet_bacet_id` INT NOT NULL,
  `wishLists_wishlist_id` INT NOT NULL,
  `phoneN` VARCHAR(8) NOT NULL,
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `review_rev_id` INT NOT NULL,
  INDEX `fk_user_items_idx` (`items_id` ASC) VISIBLE,
  INDEX `fk_user_bacet1_idx` (`bacet_bacet_id` ASC) VISIBLE,
  INDEX `fk_user_wishLists1_idx` (`wishLists_wishlist_id` ASC) VISIBLE,
  PRIMARY KEY (`user_id`),
  INDEX `fk_user_review1_idx` (`review_rev_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_items`
    FOREIGN KEY (`items_id`)
    REFERENCES `ecommerce`.`items` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_bacet1`
    FOREIGN KEY (`bacet_bacet_id`)
    REFERENCES `ecommerce`.`bacet` (`bacet_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_wishLists1`
    FOREIGN KEY (`wishLists_wishlist_id`)
    REFERENCES `ecommerce`.`wishLists` (`wishlist_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_review1`
    FOREIGN KEY (`review_rev_id`)
    REFERENCES `ecommerce`.`review` (`rev_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;