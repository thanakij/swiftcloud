-- Custom SQL migration file, put your code below! --
UPDATE stats
SET album_id = songs.album_id
FROM songs
WHERE stats.song_id = songs.id;
