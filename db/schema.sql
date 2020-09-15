DROP DATABASE IF EXISTS burgers_db;
CREATE burgers_db;

use burgers_db;

CREATE TABLE burgers
(
    id AUTO_INCREMENT
    INT,
    burger_name VARCHAR
    (35) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY
    (id)
);
