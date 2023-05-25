CREATE TABLE visitor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

INSERT INTO visitor (name, comment) values
('홍길동', '내가 왔다'),
('이찬혁', '으라차차');

--사용자 생성
CREATE USER 'user'@'%' IDENTIFIED BY '1234';

--사용자 권한(모든 DB에 접근 가능)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;

--현재 사용중인 MYSQL캐쉬를 지우고 다시설정
FLUSH PRIVILEGES;
