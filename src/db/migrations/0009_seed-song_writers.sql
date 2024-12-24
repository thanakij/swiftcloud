-- Custom SQL migration file, put your code below! --
INSERT INTO "song_writers" ("song_id", "writer_id", "sort_order", "created_at") VALUES
-- 1
((SELECT id FROM "songs" WHERE name = 'Style'), (SELECT id FROM "writers" WHERE name = 'Taylor Swift'), 1, now()),
((SELECT id FROM "songs" WHERE name = 'Style'), (SELECT id FROM "writers" WHERE name = 'Max Martin'), 2, now()),
((SELECT id FROM "songs" WHERE name = 'Style'), (SELECT id FROM "writers" WHERE name = 'Shellback'), 3, now()),
((SELECT id FROM "songs" WHERE name = 'Style'), (SELECT id FROM "writers" WHERE name = 'Ali Payami'), 4, now()),
-- 2
((SELECT id FROM "songs" WHERE name = 'Beautiful Ghosts'), (SELECT id FROM "writers" WHERE name = 'Taylor Swift'), 1, now()),
((SELECT id FROM "songs" WHERE name = 'Beautiful Ghosts'), (SELECT id FROM "writers" WHERE name = 'Andrew Lloyd Webber'), 2, now()),
-- 3
((SELECT id FROM "songs" WHERE name = 'Peace'), (SELECT id FROM "writers" WHERE name = 'Taylor Swift'), 1, now()),
((SELECT id FROM "songs" WHERE name = 'Peace'), (SELECT id FROM "writers" WHERE name = 'Aaron Dessner'), 2, now()),
-- 4
((SELECT id FROM "songs" WHERE name = 'Seven'), (SELECT id FROM "writers" WHERE name = 'Taylor Swift'), 1, now()),
((SELECT id FROM "songs" WHERE name = 'Seven'), (SELECT id FROM "writers" WHERE name = 'Aaron Dessner'), 2, now()),
-- 5
((SELECT id FROM "songs" WHERE name = 'Cold as You'), (SELECT id FROM "writers" WHERE name = 'Taylor Swift'), 1, now()),
((SELECT id FROM "songs" WHERE name = 'Cold as You'), (SELECT id FROM "writers" WHERE name = 'Liz Rose'), 2, now()),
-- 6
((SELECT id FROM "songs" WHERE name = 'Mirrorball'), (SELECT id FROM "writers" WHERE name = 'Taylor Swift'), 1, now()),
((SELECT id FROM "songs" WHERE name = 'Mirrorball'), (SELECT id FROM "writers" WHERE name = 'Jack Antonoff'), 2, now()),
-- 7
((SELECT id FROM "songs" WHERE name = 'Getaway Car'), (SELECT id FROM "writers" WHERE name = 'Taylor Swift'), 1, now()),
((SELECT id FROM "songs" WHERE name = 'Getaway Car'), (SELECT id FROM "writers" WHERE name = 'Jack Antonoff'), 2, now()),
-- 8
((SELECT id FROM "songs" WHERE name = 'Both of Us'), (SELECT id FROM "writers" WHERE name = 'Bobby Ray Simmons, Jr.'), 1, now()),
((SELECT id FROM "songs" WHERE name = 'Both of Us'), (SELECT id FROM "writers" WHERE name = 'Taylor Swift'), 2, now()),
((SELECT id FROM "songs" WHERE name = 'Both of Us'), (SELECT id FROM "writers" WHERE name = 'Ammar Malik'), 3, now()),
((SELECT id FROM "songs" WHERE name = 'Both of Us'), (SELECT id FROM "writers" WHERE name = 'Lukasz Gottwald'), 4, now()),
((SELECT id FROM "songs" WHERE name = 'Both of Us'), (SELECT id FROM "writers" WHERE name = 'Henry Walter'), 5, now()),
-- 9
((SELECT id FROM "songs" WHERE name = 'Christmas Tree Farm'), (SELECT id FROM "writers" WHERE name = 'Taylor Swift'), 1, now()),
-- 10
((SELECT id FROM "songs" WHERE name = 'Fearless'), (SELECT id FROM "writers" WHERE name = 'Taylor Swift'), 1, now()),
((SELECT id FROM "songs" WHERE name = 'Fearless'), (SELECT id FROM "writers" WHERE name = 'Liz Rose'), 2, now()),
((SELECT id FROM "songs" WHERE name = 'Fearless'), (SELECT id FROM "writers" WHERE name = 'Hillary Lindsey'), 3, now())
;
