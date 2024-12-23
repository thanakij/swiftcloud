CREATE TABLE stats (
    id SERIAL PRIMARY KEY,
    song_id INT NOT NULL,
    year INT NOT NULL,
    month INT NOT NULL,
    plays INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CHECK (month BETWEEN 1 AND 12),
    UNIQUE (song_id, year, month),
    FOREIGN KEY (song_id) REFERENCES songs(id)
);

ALTER TABLE songs
    ADD total_plays INT DEFAULT 0;
