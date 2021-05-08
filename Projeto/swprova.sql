-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `swprova` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `swprova` DEFAULT CHARACTER SET utf8 ;
USE `swprova` ;

-- -----------------------------------------------------
-- Table `mydb`.`credencial`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swprova`.`tradutor` (
  `PT` VARCHAR(200),
  `EN` VARCHAR(200),
  `ES` VARCHAR(200)
)
ENGINE = InnoDB;

INSERT INTO tradutor VALUES('casa', 'house', 'casa');
INSERT INTO tradutor VALUES('onibus', 'bus', 'autobús');
INSERT INTO tradutor VALUES('pessoa', 'people', 'personas');