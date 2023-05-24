CREATE TABLE user(
    id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F','M','') default '',
    birthday DATE not null,
    age int(3) not null default 0
);

INSERT INTO user (id, pw, name, gender, birthday,age) values
 ('hong1234', '804ijf','홍길동','M','1990-01-30', 33),
 ('sexysung','87dkjt','성춘향','F','1992-3-13', 31),
 ('sexysung','87dkjt','변사또','M','1992-3-13', 31),
 ('sexysung','87dkjt','한조','M','1992-3-13', 31),
 ('sexysung','87dkjt','위도우','F','1992-3-13', 31),
 ('sexysung','87dkjt','송하나','F','1992-3-13', 31),
 ('sexysung','87dkjt','정크랫','M','1992-3-13', 31);



-- 외래키

CREATE TABLE customer(
    id varchar(10)  not null primary key,
    name varchar(10) not null,
    birthday DATE not null
)

INSERT INTO customer (id , name, birthday) values
 ('aaa', '김이현', '1990-03-17'),
 ('bbb', '최지율', '1992-11-01'),
 ('ccc', '이혜진', '1993-05-31');

 CREATE TABLE order_list(
    id INT AUTO_INCREMENT NOT NULL primary KEY,
    customer_id varchar(10) NOT NULL,
    product_name varchar(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) on update CASCADE  on delete CASCADE  --외래키를 연결하고 커스터머의 id를 참조하겠다.
 )

 INSERT INTO order_list(customer_id, product_name,quantity) values
 ('aaa','맥북m1', 1),
 ('bbb','빅파이', 30),
 ('ccc','키보드', 3),
 ('ddd','초코파이',5),
 ('ccc','텀블러', 1);

 select * from customer;
 select * from order_list;

 --inner join--
--  select * from customer inner join order_list on customer.id=order_list.customer_id; --customer를 기준으로 order_list와 조인함 . 커스터머의 아이디값과 orderlist의 아이디중에 같은값들을 연결해 가져오라는뜻.
 select * from a.name, b.quantity from customer as a inner join order_list as b on a.id=b.customer_id;  --어떤 조건으로 join할것인지 on 뒤에붙임 앞쪽엔 select,뒷쪽엔 조건
 select * from customer.name, order_list.quantity from customer inner join order_list on customer.id=order_list.customer_id; 
select * from customer inner join order_list on customer.id = order_list.customer_id where order_list.quantity >=5;
select * from customer as a inner join order_list as b on a.id = b.customer_id where b.quantity >=5;


--외래키 table만들기
CREATE TABLE new_customer(
    -- id int not null AUTO_INCREMENT primary key, 보통 인덱스값으로 사용하기도 한다.
    id varchar(10) not null primary key,
    name varchar(5) not null,
    birthday varchar(6) not null,
    phone varchar(20) not null,
    constraint new_customer_id primary key (id)
);

CREATE TABLE new_product(
    id int not null AUTO_INCREMENT primary key,
    product_name varchar(10) not null,
    origin varchar(10) not null,
    price int not null
);

CREATE TABLE new_order (
    order_id varchar(10) not null primary key,
    new_customer_id varchar(10) not null,
    new_product_id int not null,
    quantity int not null,
    FOREIGN key(new_customer_id) REFERENCES new_customer(id) on update CASCADE on delete CASCADE,
    FOREIGN KEY(new_product_id) REFERENCES new_product(id) on update CASCADE on delete CASCADE

)

INSERT into new_customer(id, name, birthday,phone) values
('hello','김지수', '910101', '010-9184-3919'),
('world','박세진*', '920202', '010-2830-8207'),
('banana','이민지', '930303', '010-2346-3920'),
('apple','정민혁', '940404', '010-9403-2905'),
('kiwi','박세진*', '960517', '010-1350-7253');

INSERT INTO new_product (product_name,origin,price) values
('무선마우스','삼성', 20000),
('무선마우스','lg', 60000),
('긴팔티셔츠','lg',40000 ),
('키보드','삼성',50000 ),
('헤드폰','소니', 30000),
('마우스','로지텍',40000);

 INSERT INTO new_order(order_id, new_customer_id,new_product_id, quantity) values
 ('m101312','hello', 1,2),
 ('k233332','banana', 4,1),
 ('t220085','world', 3,3),
 ('h111077','hello', 5,1),
 ('m123567','kiwi',6 ,1);


 --상품을 주문한 사람들만 뽑아내기
SELECT * FROM new_customer as a
inner join new_order as b
on a.id=b.new_customer_id;

--과제 1 김지수가 주문한 상품만 조회
  select * from new_customer as a 
  inner join new_order as b on a.id = b.new_customer_id 
 inner join new_product as c on b.new_product_id=c.id where a.name='김지수';

--과제 2 무선마우스를 구매한 고객 출력하기
 select * from new_customer as a 
inner join new_order as b on a.id = b.new_customer_id 
inner join new_product as c on b.new_product_id=c.id where c.product_name='무선마우스';

--과제 3 박세진중 긴팔티셔츠를 구매한 사람의 아이디와 상품가격, 구매수량을 조회하라


--내가만든테이블--

CREATE TABLE customer2(
     id varchar(20) NOT NULL primary KEY,
     name varchar(10) not null,
     birthday varchar(10) not null,
     ph varchar(40) not null
);


INSERT INTO customer2 (id, name, birthday, ph) values
('hello','김지수', '910101', '010-9184-3919'),
('world','박세진*', '920202', '010-2830-8207'),
('banana','이민지', '930303', '010-2346-3920'),
('apple','정민혁', '940404', '010-9403-2905'),
('kiwi','박세진*', '960517', '010-1350-7253');

CREATE TABLE product2(
     id INT AUTO_INCREMENT NOT NULL primary KEY,
     name varchar(10) not null,
     company varchar(10) not null,
     price int not null
);
INSERT INTO product2 (name, company, price) values
('무선마우스','삼성', 20000),
('무선마우스','lg', 60000),
('긴팔티셔츠','lg',40000 ),
('키보드','삼성',50000 ),
('헤드폰','소니', 30000),
('마우스','로지텍',40000);


CREATE TABLE order1(
    id varchar(20) NOT NULL primary KEY,
    customer2_id varchar(10) NOT NULL,
    product2_id  INT AUTO_INCREMENT NOT NULL,
    FOREIGN KEY (customer2_id) REFERENCES customer2(id) on update CASCADE on delete CASCADE,
    FOREIGN KEY (product2_id) REFERENCES product2(id) on update CASCADE on delete CASCADE,
    number int not null
);


 INSERT INTO order1(id, customer2_id,product2_id,number) values
 ('m101312','hello', 1,2),
 ('k233332','banana', 4,1),
 ('t220085','world', 3,3),
 ('h111077','hello', 5,1),
 ('m123567','kiwi',6 ,1);