-- memo_table(test 데이터베이스/memo 테이블)
-- test 데이터베이스
CREATE DATABASE IF NOT EXISTS `test` /*!40100 DEFAULT CHARACTER SET utf8 */
  default character set utf8
  collate utf8_general_ci
;

USE `test`;

-- test.memo 테이블
CREATE TABLE IF NOT EXISTS `memo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(32) DEFAULT NULL,
  `contents` text,
  `createDate` varchar(16) DEFAULT NULL,
  `filename` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;