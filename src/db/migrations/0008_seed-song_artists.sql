-- Custom SQL migration file, put your code below! --
INSERT INTO "song_artists" ("song_id", "artist_id", "role", "sort_order", "created_at") VALUES
-- 1
((SELECT id FROM "songs" WHERE name = 'Style'), (SELECT id FROM "artists" WHERE name = 'Taylor Swift'), 'primary', 1, now()),
-- 2
((SELECT id FROM "songs" WHERE name = 'Beautiful Ghosts'), (SELECT id FROM "artists" WHERE name = 'Taylor Swift'), 'primary', 1, now()),
-- 3
((SELECT id FROM "songs" WHERE name = 'Peace'), (SELECT id FROM "artists" WHERE name = 'Taylor Swift'), 'primary', 1, now()),
-- 4
((SELECT id FROM "songs" WHERE name = 'Seven'), (SELECT id FROM "artists" WHERE name = 'Taylor Swift'), 'primary', 1, now()),
-- 5
((SELECT id FROM "songs" WHERE name = 'Cold as You'), (SELECT id FROM "artists" WHERE name = 'Taylor Swift'), 'primary', 1, now()),
-- 6
((SELECT id FROM "songs" WHERE name = 'Mirrorball'), (SELECT id FROM "artists" WHERE name = 'Taylor Swift'), 'primary', 1, now()),
-- 7
((SELECT id FROM "songs" WHERE name = 'Getaway Car'), (SELECT id FROM "artists" WHERE name = 'Taylor Swift'), 'primary', 1, now()),
-- 8
((SELECT id FROM "songs" WHERE name = 'Both of Us'), (SELECT id FROM "artists" WHERE name = 'B.o.B'), 'primary', 1, now()),
((SELECT id FROM "songs" WHERE name = 'Both of Us'), (SELECT id FROM "artists" WHERE name = 'Taylor Swift'), 'featuring', 2, now()),
-- 9
((SELECT id FROM "songs" WHERE name = 'Christmas Tree Farm'), (SELECT id FROM "artists" WHERE name = 'Taylor Swift'), 'primary', 1, now()),
-- 10
((SELECT id FROM "songs" WHERE name = 'Fearless'), (SELECT id FROM "artists" WHERE name = 'Taylor Swift'), 'primary', 1, now())
;
