DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

-- DROP TABLE IF EXISTS donuts;

CREATE TABLE donuts (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    description TEXT,
    jolt NUMERIC DEFAULT 1,
    CHECK (jolt >= 1 AND jolt <= 2),
    price INTEGER DEFAULT 0,
    rating NUMERIC DEFAULT 0,
    CHECK (rating >= 0 AND rating <= 5),
    featured BOOLEAN,
    quantity INTEGER DEFAULT 1,
    image TEXT,
    responsibility BOOLEAN
);
