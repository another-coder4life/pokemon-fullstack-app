CREATE TABLE pokemon (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    imagefront TEXT NOT NULL,
    imageback TEXT NOT NULL,
    quantity INTEGER DEFAULT 0
);