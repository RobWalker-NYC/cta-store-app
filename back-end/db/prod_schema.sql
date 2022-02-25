DROP TABLE IF EXISTS donuts;

CREATE TABLE donuts (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    description TEXT,
    jolt NUMERIC DEFAULT 1,
    price INTEGER DEFAULT 0,
    rating NUMERIC DEFAULT 0,
    featured BOOLEAN,
    quantity INTEGER DEFAULT 1,
    image TEXT,
    responsibility BOOLEAN
);
