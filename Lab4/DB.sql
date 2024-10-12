sqlite3 sqlite.db

CREATE TABLE IF NOT EXISTS recipes
(
    recipe_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name        VARCHAR(255) NOT NULL,
    instruction TEXT         NOT NULL,
    tags        VARCHAR(255) NOT NULL,
    image       TEXT
);

CREATE TABLE IF NOT EXISTS ingredients
(
    ingredient_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name          VARCHAR(255) NOT NULL,
    amount        VARCHAR(255) NOT NULL,
    recipe_id     INTEGER      NOT NULL REFERENCES recipes (recipe_id)
);


INSERT INTO recipes (name, instruction, tags, image)
VALUES ('Pasta', 'Boil water, add pasta, cook for 10 minutes', 'italian', '');

INSERT INTO ingredients (name, amount, recipe_id)
VALUES ('Pasta', '1 cup', 1);