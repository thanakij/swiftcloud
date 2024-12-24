-- Custom SQL migration file, put your code below! --
INSERT INTO "stats" ("song_id", "year", "month", "plays", "created_at") VALUES

((SELECT id FROM "songs" WHERE name = 'All You Had to Do Was Stay'), 2024, 6, 78, now()),
((SELECT id FROM "songs" WHERE name = 'All You Had to Do Was Stay'), 2024, 7, 78, now()),
((SELECT id FROM "songs" WHERE name = 'All You Had to Do Was Stay'), 2024, 8, 97, now()),

((SELECT id FROM "songs" WHERE name = 'Bad Blood (album version)'), 2024, 6, 10, now()),
((SELECT id FROM "songs" WHERE name = 'Bad Blood (album version)'), 2024, 7, 75, now()),
((SELECT id FROM "songs" WHERE name = 'Bad Blood (album version)'), 2024, 8, 29, now()),

((SELECT id FROM "songs" WHERE name = 'Blank Space'), 2024, 6, 37, now()),
((SELECT id FROM "songs" WHERE name = 'Blank Space'), 2024, 7, 66, now()),
((SELECT id FROM "songs" WHERE name = 'Blank Space'), 2024, 8, 94, now()),

((SELECT id FROM "songs" WHERE name = 'Clean'), 2024, 6, 61, now()),
((SELECT id FROM "songs" WHERE name = 'Clean'), 2024, 7, 57, now()),
((SELECT id FROM "songs" WHERE name = 'Clean'), 2024, 8, 57, now()),

((SELECT id FROM "songs" WHERE name = 'How You Get the Girl'), 2024, 6, 59, now()),
((SELECT id FROM "songs" WHERE name = 'How You Get the Girl'), 2024, 7, 7, now()),
((SELECT id FROM "songs" WHERE name = 'How You Get the Girl'), 2024, 8, 75, now()),

((SELECT id FROM "songs" WHERE name = 'I Know Places'), 2024, 6, 21, now()),
((SELECT id FROM "songs" WHERE name = 'I Know Places'), 2024, 7, 81, now()),
((SELECT id FROM "songs" WHERE name = 'I Know Places'), 2024, 8, 59, now()),

((SELECT id FROM "songs" WHERE name = 'I Wish You Would'), 2024, 6, 14, now()),
((SELECT id FROM "songs" WHERE name = 'I Wish You Would'), 2024, 7, 18, now()),
((SELECT id FROM "songs" WHERE name = 'I Wish You Would'), 2024, 8, 110, now()),

((SELECT id FROM "songs" WHERE name = 'Out of the Woods'), 2024, 6, 51, now()),
((SELECT id FROM "songs" WHERE name = 'Out of the Woods'), 2024, 7, 7, now()),
((SELECT id FROM "songs" WHERE name = 'Out of the Woods'), 2024, 8, 18, now()),

((SELECT id FROM "songs" WHERE name = 'Shake It Off'), 2024, 6, 19, now()),
((SELECT id FROM "songs" WHERE name = 'Shake It Off'), 2024, 7, 11, now()),
((SELECT id FROM "songs" WHERE name = 'Shake It Off'), 2024, 8, 95, now()),

((SELECT id FROM "songs" WHERE name = 'Style'), 2024, 6, 103, now()),
((SELECT id FROM "songs" WHERE name = 'Style'), 2024, 7, 94, now()),
((SELECT id FROM "songs" WHERE name = 'Style'), 2024, 8, 110, now()),

((SELECT id FROM "songs" WHERE name = 'This Love'), 2024, 6, 68, now()),
((SELECT id FROM "songs" WHERE name = 'This Love'), 2024, 7, 44, now()),
((SELECT id FROM "songs" WHERE name = 'This Love'), 2024, 8, 6, now()),

((SELECT id FROM "songs" WHERE name = 'Welcome to New York'), 2024, 6, 78, now()),
((SELECT id FROM "songs" WHERE name = 'Welcome to New York'), 2024, 7, 36, now()),
((SELECT id FROM "songs" WHERE name = 'Welcome to New York'), 2024, 8, 64, now()),

((SELECT id FROM "songs" WHERE name = 'Wildest Dreams'), 2024, 6, 42, now()),
((SELECT id FROM "songs" WHERE name = 'Wildest Dreams'), 2024, 7, 29, now()),
((SELECT id FROM "songs" WHERE name = 'Wildest Dreams'), 2024, 8, 38, now()),

((SELECT id FROM "songs" WHERE name = 'New Romantics'), 2024, 6, 71, now()),
((SELECT id FROM "songs" WHERE name = 'New Romantics'), 2024, 7, 82, now()),
((SELECT id FROM "songs" WHERE name = 'New Romantics'), 2024, 8, 12, now()),

((SELECT id FROM "songs" WHERE name = 'Wonderland'), 2024, 6, 19, now()),
((SELECT id FROM "songs" WHERE name = 'Wonderland'), 2024, 7, 30, now()),
((SELECT id FROM "songs" WHERE name = 'Wonderland'), 2024, 8, 59, now()),

((SELECT id FROM "songs" WHERE name = 'You Are in Love'), 2024, 6, 78, now()),
((SELECT id FROM "songs" WHERE name = 'You Are in Love'), 2024, 7, 29, now()),
((SELECT id FROM "songs" WHERE name = 'You Are in Love'), 2024, 8, 82, now()),

((SELECT id FROM "songs" WHERE name = 'Change'), 2024, 6, 34, now()),
((SELECT id FROM "songs" WHERE name = 'Change'), 2024, 7, 68, now()),
((SELECT id FROM "songs" WHERE name = 'Change'), 2024, 8, 63, now()),

((SELECT id FROM "songs" WHERE name = 'Half of My Heart (album version)'), 2024, 6, 20, now()),
((SELECT id FROM "songs" WHERE name = 'Half of My Heart (album version)'), 2024, 7, 102, now()),
((SELECT id FROM "songs" WHERE name = 'Half of My Heart (album version)'), 2024, 8, 82, now()),

((SELECT id FROM "songs" WHERE name = 'Beautiful Eyes'), 2024, 6, 17, now()),
((SELECT id FROM "songs" WHERE name = 'Beautiful Eyes'), 2024, 7, 90, now()),
((SELECT id FROM "songs" WHERE name = 'Beautiful Eyes'), 2024, 8, 105, now()),

((SELECT id FROM "songs" WHERE name = 'I Heart ?'), 2024, 6, 70, now()),
((SELECT id FROM "songs" WHERE name = 'I Heart ?'), 2024, 7, 44, now()),
((SELECT id FROM "songs" WHERE name = 'I Heart ?'), 2024, 8, 61, now()),

((SELECT id FROM "songs" WHERE name = 'Babe'), 2024, 6, 19, now()),
((SELECT id FROM "songs" WHERE name = 'Babe'), 2024, 7, 22, now()),
((SELECT id FROM "songs" WHERE name = 'Babe'), 2024, 8, 7, now()),

((SELECT id FROM "songs" WHERE name = 'Beautiful Ghosts'), 2024, 6, 100, now()),
((SELECT id FROM "songs" WHERE name = 'Beautiful Ghosts'), 2024, 7, 106, now()),
((SELECT id FROM "songs" WHERE name = 'Beautiful Ghosts'), 2024, 8, 100, now()),

((SELECT id FROM "songs" WHERE name = 'Macavity (cover)'), 2024, 6, 10, now()),
((SELECT id FROM "songs" WHERE name = 'Macavity (cover)'), 2024, 7, 36, now()),
((SELECT id FROM "songs" WHERE name = 'Macavity (cover)'), 2024, 8, 14, now()),

((SELECT id FROM "songs" WHERE name = 'The Best Day'), 2024, 6, 68, now()),
((SELECT id FROM "songs" WHERE name = 'The Best Day'), 2024, 7, 78, now()),
((SELECT id FROM "songs" WHERE name = 'The Best Day'), 2024, 8, 110, now()),

((SELECT id FROM "songs" WHERE name = 'Breathe'), 2024, 6, 64, now()),
((SELECT id FROM "songs" WHERE name = 'Breathe'), 2024, 7, 67, now()),
((SELECT id FROM "songs" WHERE name = 'Breathe'), 2024, 8, 104, now()),

((SELECT id FROM "songs" WHERE name = 'Fearless'), 2024, 6, 86, now()),
((SELECT id FROM "songs" WHERE name = 'Fearless'), 2024, 7, 105, now()),
((SELECT id FROM "songs" WHERE name = 'Fearless'), 2024, 8, 71, now()),

((SELECT id FROM "songs" WHERE name = 'Fifteen'), 2024, 6, 64, now()),
((SELECT id FROM "songs" WHERE name = 'Fifteen'), 2024, 7, 76, now()),
((SELECT id FROM "songs" WHERE name = 'Fifteen'), 2024, 8, 99, now()),

((SELECT id FROM "songs" WHERE name = 'Forever & Always'), 2024, 6, 5, now()),
((SELECT id FROM "songs" WHERE name = 'Forever & Always'), 2024, 7, 73, now()),
((SELECT id FROM "songs" WHERE name = 'Forever & Always'), 2024, 8, 52, now()),

((SELECT id FROM "songs" WHERE name = 'Hey Stephen'), 2024, 6, 41, now()),
((SELECT id FROM "songs" WHERE name = 'Hey Stephen'), 2024, 7, 31, now()),
((SELECT id FROM "songs" WHERE name = 'Hey Stephen'), 2024, 8, 109, now()),

((SELECT id FROM "songs" WHERE name = 'Love Story'), 2024, 6, 33, now()),
((SELECT id FROM "songs" WHERE name = 'Love Story'), 2024, 7, 41, now()),
((SELECT id FROM "songs" WHERE name = 'Love Story'), 2024, 8, 94, now()),

((SELECT id FROM "songs" WHERE name = 'Tell Me Why'), 2024, 6, 105, now()),
((SELECT id FROM "songs" WHERE name = 'Tell Me Why'), 2024, 7, 32, now()),
((SELECT id FROM "songs" WHERE name = 'Tell Me Why'), 2024, 8, 18, now()),

((SELECT id FROM "songs" WHERE name = 'The Way I Loved You'), 2024, 6, 107, now()),
((SELECT id FROM "songs" WHERE name = 'The Way I Loved You'), 2024, 7, 69, now()),
((SELECT id FROM "songs" WHERE name = 'The Way I Loved You'), 2024, 8, 53, now()),

((SELECT id FROM "songs" WHERE name = 'White Horse'), 2024, 6, 100, now()),
((SELECT id FROM "songs" WHERE name = 'White Horse'), 2024, 7, 51, now()),
((SELECT id FROM "songs" WHERE name = 'White Horse'), 2024, 8, 64, now()),

((SELECT id FROM "songs" WHERE name = 'You Belong with Me'), 2024, 6, 101, now()),
((SELECT id FROM "songs" WHERE name = 'You Belong with Me'), 2024, 7, 69, now()),
((SELECT id FROM "songs" WHERE name = 'You Belong with Me'), 2024, 8, 6, now()),

((SELECT id FROM "songs" WHERE name = 'You''re Not Sorry'), 2024, 6, 88, now()),
((SELECT id FROM "songs" WHERE name = 'You''re Not Sorry'), 2024, 7, 107, now()),
((SELECT id FROM "songs" WHERE name = 'You''re Not Sorry'), 2024, 8, 30, now()),

((SELECT id FROM "songs" WHERE name = 'Come in with the Rain'), 2024, 6, 21, now()),
((SELECT id FROM "songs" WHERE name = 'Come in with the Rain'), 2024, 7, 93, now()),
((SELECT id FROM "songs" WHERE name = 'Come in with the Rain'), 2024, 8, 31, now()),

((SELECT id FROM "songs" WHERE name = 'Forever & Always (piano version)'), 2024, 6, 69, now()),
((SELECT id FROM "songs" WHERE name = 'Forever & Always (piano version)'), 2024, 7, 10, now()),
((SELECT id FROM "songs" WHERE name = 'Forever & Always (piano version)'), 2024, 8, 33, now()),

((SELECT id FROM "songs" WHERE name = 'The Other Side of the Door'), 2024, 6, 74, now()),
((SELECT id FROM "songs" WHERE name = 'The Other Side of the Door'), 2024, 7, 81, now()),
((SELECT id FROM "songs" WHERE name = 'The Other Side of the Door'), 2024, 8, 15, now()),

((SELECT id FROM "songs" WHERE name = 'Superstar'), 2024, 6, 14, now()),
((SELECT id FROM "songs" WHERE name = 'Superstar'), 2024, 7, 24, now()),
((SELECT id FROM "songs" WHERE name = 'Superstar'), 2024, 8, 69, now()),

((SELECT id FROM "songs" WHERE name = 'Untouchable'), 2024, 6, 100, now()),
((SELECT id FROM "songs" WHERE name = 'Untouchable'), 2024, 7, 16, now()),
((SELECT id FROM "songs" WHERE name = 'Untouchable'), 2024, 8, 102, now()),

((SELECT id FROM "songs" WHERE name = 'Jump Then Fall'), 2024, 6, 21, now()),
((SELECT id FROM "songs" WHERE name = 'Jump Then Fall'), 2024, 7, 7, now()),
((SELECT id FROM "songs" WHERE name = 'Jump Then Fall'), 2024, 8, 55, now()),

((SELECT id FROM "songs" WHERE name = 'I Don''t Wanna Live Forever'), 2024, 6, 103, now()),
((SELECT id FROM "songs" WHERE name = 'I Don''t Wanna Live Forever'), 2024, 7, 101, now()),
((SELECT id FROM "songs" WHERE name = 'I Don''t Wanna Live Forever'), 2024, 8, 54, now()),

((SELECT id FROM "songs" WHERE name = 'The 1'), 2024, 6, 68, now()),
((SELECT id FROM "songs" WHERE name = 'The 1'), 2024, 7, 6, now()),
((SELECT id FROM "songs" WHERE name = 'The 1'), 2024, 8, 61, now()),

((SELECT id FROM "songs" WHERE name = 'August'), 2024, 6, 10, now()),
((SELECT id FROM "songs" WHERE name = 'August'), 2024, 7, 40, now()),
((SELECT id FROM "songs" WHERE name = 'August'), 2024, 8, 26, now()),

((SELECT id FROM "songs" WHERE name = 'Betty'), 2024, 6, 73, now()),
((SELECT id FROM "songs" WHERE name = 'Betty'), 2024, 7, 54, now()),
((SELECT id FROM "songs" WHERE name = 'Betty'), 2024, 8, 78, now()),

((SELECT id FROM "songs" WHERE name = 'Cardigan'), 2024, 6, 84, now()),
((SELECT id FROM "songs" WHERE name = 'Cardigan'), 2024, 7, 64, now()),
((SELECT id FROM "songs" WHERE name = 'Cardigan'), 2024, 8, 59, now()),

((SELECT id FROM "songs" WHERE name = 'Epiphany'), 2024, 6, 44, now()),
((SELECT id FROM "songs" WHERE name = 'Epiphany'), 2024, 7, 110, now()),
((SELECT id FROM "songs" WHERE name = 'Epiphany'), 2024, 8, 29, now()),

((SELECT id FROM "songs" WHERE name = 'Exile'), 2024, 6, 6, now()),
((SELECT id FROM "songs" WHERE name = 'Exile'), 2024, 7, 87, now()),
((SELECT id FROM "songs" WHERE name = 'Exile'), 2024, 8, 72, now()),

((SELECT id FROM "songs" WHERE name = 'Hoax'), 2024, 6, 34, now()),
((SELECT id FROM "songs" WHERE name = 'Hoax'), 2024, 7, 16, now()),
((SELECT id FROM "songs" WHERE name = 'Hoax'), 2024, 8, 19, now()),

((SELECT id FROM "songs" WHERE name = 'Illicit Affairs'), 2024, 6, 12, now()),
((SELECT id FROM "songs" WHERE name = 'Illicit Affairs'), 2024, 7, 4, now()),
((SELECT id FROM "songs" WHERE name = 'Illicit Affairs'), 2024, 8, 34, now()),

((SELECT id FROM "songs" WHERE name = 'Invisible String'), 2024, 6, 7, now()),
((SELECT id FROM "songs" WHERE name = 'Invisible String'), 2024, 7, 24, now()),
((SELECT id FROM "songs" WHERE name = 'Invisible String'), 2024, 8, 3, now()),

((SELECT id FROM "songs" WHERE name = 'The Last Great American Dynasty'), 2024, 6, 74, now()),
((SELECT id FROM "songs" WHERE name = 'The Last Great American Dynasty'), 2024, 7, 79, now()),
((SELECT id FROM "songs" WHERE name = 'The Last Great American Dynasty'), 2024, 8, 55, now()),

((SELECT id FROM "songs" WHERE name = 'Mad Woman'), 2024, 6, 38, now()),
((SELECT id FROM "songs" WHERE name = 'Mad Woman'), 2024, 7, 40, now()),
((SELECT id FROM "songs" WHERE name = 'Mad Woman'), 2024, 8, 106, now()),

((SELECT id FROM "songs" WHERE name = 'Mirrorball'), 2024, 6, 94, now()),
((SELECT id FROM "songs" WHERE name = 'Mirrorball'), 2024, 7, 92, now()),
((SELECT id FROM "songs" WHERE name = 'Mirrorball'), 2024, 8, 91, now()),

((SELECT id FROM "songs" WHERE name = 'My Tears Ricochet'), 2024, 6, 54, now()),
((SELECT id FROM "songs" WHERE name = 'My Tears Ricochet'), 2024, 7, 13, now()),
((SELECT id FROM "songs" WHERE name = 'My Tears Ricochet'), 2024, 8, 54, now()),

((SELECT id FROM "songs" WHERE name = 'Peace'), 2024, 6, 104, now()),
((SELECT id FROM "songs" WHERE name = 'Peace'), 2024, 7, 94, now()),
((SELECT id FROM "songs" WHERE name = 'Peace'), 2024, 8, 99, now()),

((SELECT id FROM "songs" WHERE name = 'Seven'), 2024, 6, 106, now()),
((SELECT id FROM "songs" WHERE name = 'Seven'), 2024, 7, 92, now()),
((SELECT id FROM "songs" WHERE name = 'Seven'), 2024, 8, 99, now()),

((SELECT id FROM "songs" WHERE name = 'This Is Me Trying'), 2024, 6, 10, now()),
((SELECT id FROM "songs" WHERE name = 'This Is Me Trying'), 2024, 7, 79, now()),
((SELECT id FROM "songs" WHERE name = 'This Is Me Trying'), 2024, 8, 107, now()),

((SELECT id FROM "songs" WHERE name = 'The Lakes'), 2024, 6, 0, now()),
((SELECT id FROM "songs" WHERE name = 'The Lakes'), 2024, 7, 20, now()),
((SELECT id FROM "songs" WHERE name = 'The Lakes'), 2024, 8, 70, now()),

((SELECT id FROM "songs" WHERE name = 'Crazier'), 2024, 6, 96, now()),
((SELECT id FROM "songs" WHERE name = 'Crazier'), 2024, 7, 90, now()),
((SELECT id FROM "songs" WHERE name = 'Crazier'), 2024, 8, 72, now()),

((SELECT id FROM "songs" WHERE name = 'Breathless (cover)'), 2024, 6, 68, now()),
((SELECT id FROM "songs" WHERE name = 'Breathless (cover)'), 2024, 7, 7, now()),
((SELECT id FROM "songs" WHERE name = 'Breathless (cover)'), 2024, 8, 37, now()),

((SELECT id FROM "songs" WHERE name = 'Umbrella (live cover)'), 2024, 6, 0, now()),
((SELECT id FROM "songs" WHERE name = 'Umbrella (live cover)'), 2024, 7, 58, now()),
((SELECT id FROM "songs" WHERE name = 'Umbrella (live cover)'), 2024, 8, 101, now()),

((SELECT id FROM "songs" WHERE name = 'Big Star (Live)'), 2024, 6, 62, now()),
((SELECT id FROM "songs" WHERE name = 'Big Star (Live)'), 2024, 7, 24, now()),
((SELECT id FROM "songs" WHERE name = 'Big Star (Live)'), 2024, 8, 21, now()),

((SELECT id FROM "songs" WHERE name = 'Two Is Better Than One'), 2024, 6, 22, now()),
((SELECT id FROM "songs" WHERE name = 'Two Is Better Than One'), 2024, 7, 16, now()),
((SELECT id FROM "songs" WHERE name = 'Two Is Better Than One'), 2024, 8, 52, now()),

((SELECT id FROM "songs" WHERE name = 'Afterglow'), 2024, 6, 90, now()),
((SELECT id FROM "songs" WHERE name = 'Afterglow'), 2024, 7, 17, now()),
((SELECT id FROM "songs" WHERE name = 'Afterglow'), 2024, 8, 87, now()),

((SELECT id FROM "songs" WHERE name = 'The Archer'), 2024, 6, 23, now()),
((SELECT id FROM "songs" WHERE name = 'The Archer'), 2024, 7, 3, now()),
((SELECT id FROM "songs" WHERE name = 'The Archer'), 2024, 8, 30, now()),

((SELECT id FROM "songs" WHERE name = 'Cornelia Street'), 2024, 6, 27, now()),
((SELECT id FROM "songs" WHERE name = 'Cornelia Street'), 2024, 7, 68, now()),
((SELECT id FROM "songs" WHERE name = 'Cornelia Street'), 2024, 8, 101, now()),

((SELECT id FROM "songs" WHERE name = 'Cruel Summer'), 2024, 6, 18, now()),
((SELECT id FROM "songs" WHERE name = 'Cruel Summer'), 2024, 7, 44, now()),
((SELECT id FROM "songs" WHERE name = 'Cruel Summer'), 2024, 8, 0, now()),

((SELECT id FROM "songs" WHERE name = 'Daylight'), 2024, 6, 48, now()),
((SELECT id FROM "songs" WHERE name = 'Daylight'), 2024, 7, 73, now()),
((SELECT id FROM "songs" WHERE name = 'Daylight'), 2024, 8, 23, now()),

((SELECT id FROM "songs" WHERE name = 'Death by a Thousand Cuts'), 2024, 6, 59, now()),
((SELECT id FROM "songs" WHERE name = 'Death by a Thousand Cuts'), 2024, 7, 65, now()),
((SELECT id FROM "songs" WHERE name = 'Death by a Thousand Cuts'), 2024, 8, 45, now()),

((SELECT id FROM "songs" WHERE name = 'False God'), 2024, 6, 16, now()),
((SELECT id FROM "songs" WHERE name = 'False God'), 2024, 7, 31, now()),
((SELECT id FROM "songs" WHERE name = 'False God'), 2024, 8, 21, now()),

((SELECT id FROM "songs" WHERE name = 'I Forgot That You Existed'), 2024, 6, 92, now()),
((SELECT id FROM "songs" WHERE name = 'I Forgot That You Existed'), 2024, 7, 61, now()),
((SELECT id FROM "songs" WHERE name = 'I Forgot That You Existed'), 2024, 8, 73, now()),

((SELECT id FROM "songs" WHERE name = 'I Think He Knows'), 2024, 6, 93, now()),
((SELECT id FROM "songs" WHERE name = 'I Think He Knows'), 2024, 7, 74, now()),
((SELECT id FROM "songs" WHERE name = 'I Think He Knows'), 2024, 8, 68, now()),

((SELECT id FROM "songs" WHERE name = 'It''s Nice to Have a Friend'), 2024, 6, 96, now()),
((SELECT id FROM "songs" WHERE name = 'It''s Nice to Have a Friend'), 2024, 7, 42, now()),
((SELECT id FROM "songs" WHERE name = 'It''s Nice to Have a Friend'), 2024, 8, 91, now()),

((SELECT id FROM "songs" WHERE name = 'London Boy'), 2024, 6, 58, now()),
((SELECT id FROM "songs" WHERE name = 'London Boy'), 2024, 7, 71, now()),
((SELECT id FROM "songs" WHERE name = 'London Boy'), 2024, 8, 88, now()),

((SELECT id FROM "songs" WHERE name = 'Lover'), 2024, 6, 57, now()),
((SELECT id FROM "songs" WHERE name = 'Lover'), 2024, 7, 34, now()),
((SELECT id FROM "songs" WHERE name = 'Lover'), 2024, 8, 109, now()),

((SELECT id FROM "songs" WHERE name = 'The Man'), 2024, 6, 103, now()),
((SELECT id FROM "songs" WHERE name = 'The Man'), 2024, 7, 69, now()),
((SELECT id FROM "songs" WHERE name = 'The Man'), 2024, 8, 39, now()),

((SELECT id FROM "songs" WHERE name = 'Me!'), 2024, 6, 34, now()),
((SELECT id FROM "songs" WHERE name = 'Me!'), 2024, 7, 72, now()),
((SELECT id FROM "songs" WHERE name = 'Me!'), 2024, 8, 29, now()),

((SELECT id FROM "songs" WHERE name = 'Miss Americana & the Heartbreak Prince'), 2024, 6, 109, now()),
((SELECT id FROM "songs" WHERE name = 'Miss Americana & the Heartbreak Prince'), 2024, 7, 45, now()),
((SELECT id FROM "songs" WHERE name = 'Miss Americana & the Heartbreak Prince'), 2024, 8, 47, now()),

((SELECT id FROM "songs" WHERE name = 'Paper Rings'), 2024, 6, 31, now()),
((SELECT id FROM "songs" WHERE name = 'Paper Rings'), 2024, 7, 55, now()),
((SELECT id FROM "songs" WHERE name = 'Paper Rings'), 2024, 8, 82, now()),

((SELECT id FROM "songs" WHERE name = 'Soon You''ll Get Better'), 2024, 6, 110, now()),
((SELECT id FROM "songs" WHERE name = 'Soon You''ll Get Better'), 2024, 7, 78, now()),
((SELECT id FROM "songs" WHERE name = 'Soon You''ll Get Better'), 2024, 8, 45, now()),

((SELECT id FROM "songs" WHERE name = 'You Need to Calm Down'), 2024, 6, 77, now()),
((SELECT id FROM "songs" WHERE name = 'You Need to Calm Down'), 2024, 7, 104, now()),
((SELECT id FROM "songs" WHERE name = 'You Need to Calm Down'), 2024, 8, 5, now()),

((SELECT id FROM "songs" WHERE name = 'Christmas Tree Farm'), 2024, 6, 104, now()),
((SELECT id FROM "songs" WHERE name = 'Christmas Tree Farm'), 2024, 7, 100, now()),
((SELECT id FROM "songs" WHERE name = 'Christmas Tree Farm'), 2024, 8, 69, now()),

((SELECT id FROM "songs" WHERE name = 'I''d Lie'), 2024, 6, 37, now()),
((SELECT id FROM "songs" WHERE name = 'I''d Lie'), 2024, 7, 16, now()),
((SELECT id FROM "songs" WHERE name = 'I''d Lie'), 2024, 8, 38, now()),

((SELECT id FROM "songs" WHERE name = 'Only the Young'), 2024, 6, 26, now()),
((SELECT id FROM "songs" WHERE name = 'Only the Young'), 2024, 7, 43, now()),
((SELECT id FROM "songs" WHERE name = 'Only the Young'), 2024, 8, 107, now()),

((SELECT id FROM "songs" WHERE name = 'Ronan'), 2024, 6, 60, now()),
((SELECT id FROM "songs" WHERE name = 'Ronan'), 2024, 7, 109, now()),
((SELECT id FROM "songs" WHERE name = 'Ronan'), 2024, 8, 77, now()),

((SELECT id FROM "songs" WHERE name = 'American Girl (cover)'), 2024, 6, 109, now()),
((SELECT id FROM "songs" WHERE name = 'American Girl (cover)'), 2024, 7, 2, now()),
((SELECT id FROM "songs" WHERE name = 'American Girl (cover)'), 2024, 8, 79, now()),

((SELECT id FROM "songs" WHERE name = 'Bad Blood (remixed single version)'), 2024, 6, 22, now()),
((SELECT id FROM "songs" WHERE name = 'Bad Blood (remixed single version)'), 2024, 7, 71, now()),
((SELECT id FROM "songs" WHERE name = 'Bad Blood (remixed single version)'), 2024, 8, 50, now()),

((SELECT id FROM "songs" WHERE name = 'Lover (Remix)'), 2024, 6, 59, now()),
((SELECT id FROM "songs" WHERE name = 'Lover (Remix)'), 2024, 7, 110, now()),
((SELECT id FROM "songs" WHERE name = 'Lover (Remix)'), 2024, 8, 10, now()),

((SELECT id FROM "songs" WHERE name = 'Sweeter than Fiction'), 2024, 6, 77, now()),
((SELECT id FROM "songs" WHERE name = 'Sweeter than Fiction'), 2024, 7, 62, now()),
((SELECT id FROM "songs" WHERE name = 'Sweeter than Fiction'), 2024, 8, 14, now()),

((SELECT id FROM "songs" WHERE name = '22'), 2024, 6, 27, now()),
((SELECT id FROM "songs" WHERE name = '22'), 2024, 7, 30, now()),
((SELECT id FROM "songs" WHERE name = '22'), 2024, 8, 32, now()),

((SELECT id FROM "songs" WHERE name = 'All Too Well'), 2024, 6, 71, now()),
((SELECT id FROM "songs" WHERE name = 'All Too Well'), 2024, 7, 94, now()),
((SELECT id FROM "songs" WHERE name = 'All Too Well'), 2024, 8, 14, now()),

((SELECT id FROM "songs" WHERE name = 'Begin Again'), 2024, 6, 17, now()),
((SELECT id FROM "songs" WHERE name = 'Begin Again'), 2024, 7, 88, now()),
((SELECT id FROM "songs" WHERE name = 'Begin Again'), 2024, 8, 56, now()),

((SELECT id FROM "songs" WHERE name = 'Everything Has Changed'), 2024, 6, 79, now()),
((SELECT id FROM "songs" WHERE name = 'Everything Has Changed'), 2024, 7, 1, now()),
((SELECT id FROM "songs" WHERE name = 'Everything Has Changed'), 2024, 8, 95, now()),

((SELECT id FROM "songs" WHERE name = 'Holy Ground'), 2024, 6, 43, now()),
((SELECT id FROM "songs" WHERE name = 'Holy Ground'), 2024, 7, 38, now()),
((SELECT id FROM "songs" WHERE name = 'Holy Ground'), 2024, 8, 76, now()),

((SELECT id FROM "songs" WHERE name = 'I Almost Do'), 2024, 6, 46, now()),
((SELECT id FROM "songs" WHERE name = 'I Almost Do'), 2024, 7, 42, now()),
((SELECT id FROM "songs" WHERE name = 'I Almost Do'), 2024, 8, 52, now()),

((SELECT id FROM "songs" WHERE name = 'I Knew You Were Trouble'), 2024, 6, 12, now()),
((SELECT id FROM "songs" WHERE name = 'I Knew You Were Trouble'), 2024, 7, 23, now()),
((SELECT id FROM "songs" WHERE name = 'I Knew You Were Trouble'), 2024, 8, 36, now()),

((SELECT id FROM "songs" WHERE name = 'The Last Time'), 2024, 6, 22, now()),
((SELECT id FROM "songs" WHERE name = 'The Last Time'), 2024, 7, 48, now()),
((SELECT id FROM "songs" WHERE name = 'The Last Time'), 2024, 8, 47, now()),

((SELECT id FROM "songs" WHERE name = 'The Lucky One'), 2024, 6, 61, now()),
((SELECT id FROM "songs" WHERE name = 'The Lucky One'), 2024, 7, 88, now()),
((SELECT id FROM "songs" WHERE name = 'The Lucky One'), 2024, 8, 88, now()),

((SELECT id FROM "songs" WHERE name = 'Red'), 2024, 6, 58, now()),
((SELECT id FROM "songs" WHERE name = 'Red'), 2024, 7, 81, now()),
((SELECT id FROM "songs" WHERE name = 'Red'), 2024, 8, 2, now()),

((SELECT id FROM "songs" WHERE name = 'Sad Beautiful Tragic'), 2024, 6, 2, now()),
((SELECT id FROM "songs" WHERE name = 'Sad Beautiful Tragic'), 2024, 7, 81, now()),
((SELECT id FROM "songs" WHERE name = 'Sad Beautiful Tragic'), 2024, 8, 35, now()),

((SELECT id FROM "songs" WHERE name = 'Starlight'), 2024, 6, 48, now()),
((SELECT id FROM "songs" WHERE name = 'Starlight'), 2024, 7, 35, now()),
((SELECT id FROM "songs" WHERE name = 'Starlight'), 2024, 8, 26, now()),

((SELECT id FROM "songs" WHERE name = 'State of Grace'), 2024, 6, 4, now()),
((SELECT id FROM "songs" WHERE name = 'State of Grace'), 2024, 7, 17, now()),
((SELECT id FROM "songs" WHERE name = 'State of Grace'), 2024, 8, 51, now()),

((SELECT id FROM "songs" WHERE name = 'Stay Stay Stay'), 2024, 6, 13, now()),
((SELECT id FROM "songs" WHERE name = 'Stay Stay Stay'), 2024, 7, 11, now()),
((SELECT id FROM "songs" WHERE name = 'Stay Stay Stay'), 2024, 8, 11, now()),

((SELECT id FROM "songs" WHERE name = 'Treacherous'), 2024, 6, 47, now()),
((SELECT id FROM "songs" WHERE name = 'Treacherous'), 2024, 7, 0, now()),
((SELECT id FROM "songs" WHERE name = 'Treacherous'), 2024, 8, 57, now()),

((SELECT id FROM "songs" WHERE name = 'We Are Never Ever Getting Back Together'), 2024, 6, 99, now()),
((SELECT id FROM "songs" WHERE name = 'We Are Never Ever Getting Back Together'), 2024, 7, 17, now()),
((SELECT id FROM "songs" WHERE name = 'We Are Never Ever Getting Back Together'), 2024, 8, 46, now()),

((SELECT id FROM "songs" WHERE name = 'Come Back... Be Here'), 2024, 6, 62, now()),
((SELECT id FROM "songs" WHERE name = 'Come Back... Be Here'), 2024, 7, 59, now()),
((SELECT id FROM "songs" WHERE name = 'Come Back... Be Here'), 2024, 8, 27, now()),

((SELECT id FROM "songs" WHERE name = 'Girl at Home'), 2024, 6, 64, now()),
((SELECT id FROM "songs" WHERE name = 'Girl at Home'), 2024, 7, 12, now()),
((SELECT id FROM "songs" WHERE name = 'Girl at Home'), 2024, 8, 45, now()),

((SELECT id FROM "songs" WHERE name = 'The Moment I Knew'), 2024, 6, 32, now()),
((SELECT id FROM "songs" WHERE name = 'The Moment I Knew'), 2024, 7, 50, now()),
((SELECT id FROM "songs" WHERE name = 'The Moment I Knew'), 2024, 8, 106, now()),

((SELECT id FROM "songs" WHERE name = 'Call It What You Want'), 2024, 6, 87, now()),
((SELECT id FROM "songs" WHERE name = 'Call It What You Want'), 2024, 7, 62, now()),
((SELECT id FROM "songs" WHERE name = 'Call It What You Want'), 2024, 8, 104, now()),

((SELECT id FROM "songs" WHERE name = 'Dancing with Our Hands Tied'), 2024, 6, 55, now()),
((SELECT id FROM "songs" WHERE name = 'Dancing with Our Hands Tied'), 2024, 7, 38, now()),
((SELECT id FROM "songs" WHERE name = 'Dancing with Our Hands Tied'), 2024, 8, 80, now()),

((SELECT id FROM "songs" WHERE name = 'Delicate'), 2024, 6, 12, now()),
((SELECT id FROM "songs" WHERE name = 'Delicate'), 2024, 7, 62, now()),
((SELECT id FROM "songs" WHERE name = 'Delicate'), 2024, 8, 93, now()),

((SELECT id FROM "songs" WHERE name = 'Don''t Blame Me'), 2024, 6, 91, now()),
((SELECT id FROM "songs" WHERE name = 'Don''t Blame Me'), 2024, 7, 0, now()),
((SELECT id FROM "songs" WHERE name = 'Don''t Blame Me'), 2024, 8, 94, now()),

((SELECT id FROM "songs" WHERE name = 'Dress'), 2024, 6, 25, now()),
((SELECT id FROM "songs" WHERE name = 'Dress'), 2024, 7, 13, now()),
((SELECT id FROM "songs" WHERE name = 'Dress'), 2024, 8, 83, now()),

((SELECT id FROM "songs" WHERE name = 'End Game'), 2024, 6, 0, now()),
((SELECT id FROM "songs" WHERE name = 'End Game'), 2024, 7, 8, now()),
((SELECT id FROM "songs" WHERE name = 'End Game'), 2024, 8, 89, now()),

((SELECT id FROM "songs" WHERE name = 'Getaway Car'), 2024, 6, 91, now()),
((SELECT id FROM "songs" WHERE name = 'Getaway Car'), 2024, 7, 101, now()),
((SELECT id FROM "songs" WHERE name = 'Getaway Car'), 2024, 8, 84, now()),

((SELECT id FROM "songs" WHERE name = 'Gorgeous'), 2024, 6, 19, now()),
((SELECT id FROM "songs" WHERE name = 'Gorgeous'), 2024, 7, 43, now()),
((SELECT id FROM "songs" WHERE name = 'Gorgeous'), 2024, 8, 63, now()),

((SELECT id FROM "songs" WHERE name = 'I Did Something Bad'), 2024, 6, 66, now()),
((SELECT id FROM "songs" WHERE name = 'I Did Something Bad'), 2024, 7, 16, now()),
((SELECT id FROM "songs" WHERE name = 'I Did Something Bad'), 2024, 8, 4, now()),

((SELECT id FROM "songs" WHERE name = 'King of My Heart'), 2024, 6, 59, now()),
((SELECT id FROM "songs" WHERE name = 'King of My Heart'), 2024, 7, 71, now()),
((SELECT id FROM "songs" WHERE name = 'King of My Heart'), 2024, 8, 70, now()),

((SELECT id FROM "songs" WHERE name = 'Look What You Made Me Do'), 2024, 6, 89, now()),
((SELECT id FROM "songs" WHERE name = 'Look What You Made Me Do'), 2024, 7, 101, now()),
((SELECT id FROM "songs" WHERE name = 'Look What You Made Me Do'), 2024, 8, 3, now()),

((SELECT id FROM "songs" WHERE name = 'New Year''s Day'), 2024, 6, 54, now()),
((SELECT id FROM "songs" WHERE name = 'New Year''s Day'), 2024, 7, 83, now()),
((SELECT id FROM "songs" WHERE name = 'New Year''s Day'), 2024, 8, 67, now()),

((SELECT id FROM "songs" WHERE name = '...Ready for It?'), 2024, 6, 27, now()),
((SELECT id FROM "songs" WHERE name = '...Ready for It?'), 2024, 7, 0, now()),
((SELECT id FROM "songs" WHERE name = '...Ready for It?'), 2024, 8, 77, now()),

((SELECT id FROM "songs" WHERE name = 'So It Goes...'), 2024, 6, 22, now()),
((SELECT id FROM "songs" WHERE name = 'So It Goes...'), 2024, 7, 52, now()),
((SELECT id FROM "songs" WHERE name = 'So It Goes...'), 2024, 8, 89, now()),

((SELECT id FROM "songs" WHERE name = 'This Is Why We Can''t Have Nice Things'), 2024, 6, 92, now()),
((SELECT id FROM "songs" WHERE name = 'This Is Why We Can''t Have Nice Things'), 2024, 7, 97, now()),
((SELECT id FROM "songs" WHERE name = 'This Is Why We Can''t Have Nice Things'), 2024, 8, 19, now()),

((SELECT id FROM "songs" WHERE name = 'Hold On (live cover)'), 2024, 6, 91, now()),
((SELECT id FROM "songs" WHERE name = 'Hold On (live cover)'), 2024, 7, 109, now()),
((SELECT id FROM "songs" WHERE name = 'Hold On (live cover)'), 2024, 8, 28, now()),

((SELECT id FROM "songs" WHERE name = 'Christmas Must Be Something More'), 2024, 6, 49, now()),
((SELECT id FROM "songs" WHERE name = 'Christmas Must Be Something More'), 2024, 7, 11, now()),
((SELECT id FROM "songs" WHERE name = 'Christmas Must Be Something More'), 2024, 8, 34, now()),

((SELECT id FROM "songs" WHERE name = 'Christmases When You Were Mine'), 2024, 6, 80, now()),
((SELECT id FROM "songs" WHERE name = 'Christmases When You Were Mine'), 2024, 7, 110, now()),
((SELECT id FROM "songs" WHERE name = 'Christmases When You Were Mine'), 2024, 8, 43, now()),

((SELECT id FROM "songs" WHERE name = 'Last Christmas (cover)'), 2024, 6, 29, now()),
((SELECT id FROM "songs" WHERE name = 'Last Christmas (cover)'), 2024, 7, 61, now()),
((SELECT id FROM "songs" WHERE name = 'Last Christmas (cover)'), 2024, 8, 110, now()),

((SELECT id FROM "songs" WHERE name = 'Santa Baby (cover)'), 2024, 6, 110, now()),
((SELECT id FROM "songs" WHERE name = 'Santa Baby (cover)'), 2024, 7, 52, now()),
((SELECT id FROM "songs" WHERE name = 'Santa Baby (cover)'), 2024, 8, 0, now()),

((SELECT id FROM "songs" WHERE name = 'Silent Night (cover)'), 2024, 6, 57, now()),
((SELECT id FROM "songs" WHERE name = 'Silent Night (cover)'), 2024, 7, 32, now()),
((SELECT id FROM "songs" WHERE name = 'Silent Night (cover)'), 2024, 8, 63, now()),

((SELECT id FROM "songs" WHERE name = 'White Christmas (cover)'), 2024, 6, 93, now()),
((SELECT id FROM "songs" WHERE name = 'White Christmas (cover)'), 2024, 7, 41, now()),
((SELECT id FROM "songs" WHERE name = 'White Christmas (cover)'), 2024, 8, 17, now()),

((SELECT id FROM "songs" WHERE name = 'Back to December'), 2024, 6, 50, now()),
((SELECT id FROM "songs" WHERE name = 'Back to December'), 2024, 7, 38, now()),
((SELECT id FROM "songs" WHERE name = 'Back to December'), 2024, 8, 63, now()),

((SELECT id FROM "songs" WHERE name = 'Better than Revenge'), 2024, 6, 5, now()),
((SELECT id FROM "songs" WHERE name = 'Better than Revenge'), 2024, 7, 110, now()),
((SELECT id FROM "songs" WHERE name = 'Better than Revenge'), 2024, 8, 71, now()),

((SELECT id FROM "songs" WHERE name = 'Dear John'), 2024, 6, 66, now()),
((SELECT id FROM "songs" WHERE name = 'Dear John'), 2024, 7, 101, now()),
((SELECT id FROM "songs" WHERE name = 'Dear John'), 2024, 8, 35, now()),

((SELECT id FROM "songs" WHERE name = 'Enchanted'), 2024, 6, 26, now()),
((SELECT id FROM "songs" WHERE name = 'Enchanted'), 2024, 7, 82, now()),
((SELECT id FROM "songs" WHERE name = 'Enchanted'), 2024, 8, 26, now()),

((SELECT id FROM "songs" WHERE name = 'Haunted'), 2024, 6, 29, now()),
((SELECT id FROM "songs" WHERE name = 'Haunted'), 2024, 7, 85, now()),
((SELECT id FROM "songs" WHERE name = 'Haunted'), 2024, 8, 101, now()),

((SELECT id FROM "songs" WHERE name = 'Innocent'), 2024, 6, 20, now()),
((SELECT id FROM "songs" WHERE name = 'Innocent'), 2024, 7, 94, now()),
((SELECT id FROM "songs" WHERE name = 'Innocent'), 2024, 8, 108, now()),

((SELECT id FROM "songs" WHERE name = 'Last Kiss'), 2024, 6, 64, now()),
((SELECT id FROM "songs" WHERE name = 'Last Kiss'), 2024, 7, 60, now()),
((SELECT id FROM "songs" WHERE name = 'Last Kiss'), 2024, 8, 62, now()),

((SELECT id FROM "songs" WHERE name = 'Long Live'), 2024, 6, 90, now()),
((SELECT id FROM "songs" WHERE name = 'Long Live'), 2024, 7, 2, now()),
((SELECT id FROM "songs" WHERE name = 'Long Live'), 2024, 8, 38, now()),

((SELECT id FROM "songs" WHERE name = 'Mean'), 2024, 6, 26, now()),
((SELECT id FROM "songs" WHERE name = 'Mean'), 2024, 7, 84, now()),
((SELECT id FROM "songs" WHERE name = 'Mean'), 2024, 8, 107, now()),

((SELECT id FROM "songs" WHERE name = 'Mine'), 2024, 6, 97, now()),
((SELECT id FROM "songs" WHERE name = 'Mine'), 2024, 7, 73, now()),
((SELECT id FROM "songs" WHERE name = 'Mine'), 2024, 8, 92, now()),

((SELECT id FROM "songs" WHERE name = 'Never Grow Up'), 2024, 6, 29, now()),
((SELECT id FROM "songs" WHERE name = 'Never Grow Up'), 2024, 7, 13, now()),
((SELECT id FROM "songs" WHERE name = 'Never Grow Up'), 2024, 8, 110, now()),

((SELECT id FROM "songs" WHERE name = 'Sparks Fly'), 2024, 6, 64, now()),
((SELECT id FROM "songs" WHERE name = 'Sparks Fly'), 2024, 7, 52, now()),
((SELECT id FROM "songs" WHERE name = 'Sparks Fly'), 2024, 8, 96, now()),

((SELECT id FROM "songs" WHERE name = 'Speak Now'), 2024, 6, 98, now()),
((SELECT id FROM "songs" WHERE name = 'Speak Now'), 2024, 7, 21, now()),
((SELECT id FROM "songs" WHERE name = 'Speak Now'), 2024, 8, 47, now()),

((SELECT id FROM "songs" WHERE name = 'The Story of Us'), 2024, 6, 6, now()),
((SELECT id FROM "songs" WHERE name = 'The Story of Us'), 2024, 7, 90, now()),
((SELECT id FROM "songs" WHERE name = 'The Story of Us'), 2024, 8, 1, now()),

((SELECT id FROM "songs" WHERE name = 'If This Was a Movie'), 2024, 6, 15, now()),
((SELECT id FROM "songs" WHERE name = 'If This Was a Movie'), 2024, 7, 62, now()),
((SELECT id FROM "songs" WHERE name = 'If This Was a Movie'), 2024, 8, 92, now()),

((SELECT id FROM "songs" WHERE name = 'Ours'), 2024, 6, 1, now()),
((SELECT id FROM "songs" WHERE name = 'Ours'), 2024, 7, 93, now()),
((SELECT id FROM "songs" WHERE name = 'Ours'), 2024, 8, 55, now()),

((SELECT id FROM "songs" WHERE name = 'Superman'), 2024, 6, 9, now()),
((SELECT id FROM "songs" WHERE name = 'Superman'), 2024, 7, 29, now()),
((SELECT id FROM "songs" WHERE name = 'Superman'), 2024, 8, 86, now()),

((SELECT id FROM "songs" WHERE name = 'Bette Davis Eyes (live cover)'), 2024, 6, 52, now()),
((SELECT id FROM "songs" WHERE name = 'Bette Davis Eyes (live cover)'), 2024, 7, 56, now()),
((SELECT id FROM "songs" WHERE name = 'Bette Davis Eyes (live cover)'), 2024, 8, 79, now()),

((SELECT id FROM "songs" WHERE name = 'Drops of Jupiter (live cover)'), 2024, 6, 86, now()),
((SELECT id FROM "songs" WHERE name = 'Drops of Jupiter (live cover)'), 2024, 7, 64, now()),
((SELECT id FROM "songs" WHERE name = 'Drops of Jupiter (live cover)'), 2024, 8, 83, now()),

((SELECT id FROM "songs" WHERE name = 'I Want You Back (live cover)'), 2024, 6, 84, now()),
((SELECT id FROM "songs" WHERE name = 'I Want You Back (live cover)'), 2024, 7, 69, now()),
((SELECT id FROM "songs" WHERE name = 'I Want You Back (live cover)'), 2024, 8, 42, now()),

((SELECT id FROM "songs" WHERE name = 'Long Live (single version)'), 2024, 6, 63, now()),
((SELECT id FROM "songs" WHERE name = 'Long Live (single version)'), 2024, 7, 72, now()),
((SELECT id FROM "songs" WHERE name = 'Long Live (single version)'), 2024, 8, 108, now()),

((SELECT id FROM "songs" WHERE name = 'September (cover)'), 2024, 6, 20, now()),
((SELECT id FROM "songs" WHERE name = 'September (cover)'), 2024, 7, 44, now()),
((SELECT id FROM "songs" WHERE name = 'September (cover)'), 2024, 8, 3, now()),

((SELECT id FROM "songs" WHERE name = 'Both of Us'), 2024, 6, 104, now()),
((SELECT id FROM "songs" WHERE name = 'Both of Us'), 2024, 7, 95, now()),
((SELECT id FROM "songs" WHERE name = 'Both of Us'), 2024, 8, 75, now()),

((SELECT id FROM "songs" WHERE name = 'Cold as You'), 2024, 6, 84, now()),
((SELECT id FROM "songs" WHERE name = 'Cold as You'), 2024, 7, 102, now()),
((SELECT id FROM "songs" WHERE name = 'Cold as You'), 2024, 8, 108, now()),

((SELECT id FROM "songs" WHERE name = 'Mary''s Song (Oh My My My)'), 2024, 6, 23, now()),
((SELECT id FROM "songs" WHERE name = 'Mary''s Song (Oh My My My)'), 2024, 7, 60, now()),
((SELECT id FROM "songs" WHERE name = 'Mary''s Song (Oh My My My)'), 2024, 8, 4, now()),

((SELECT id FROM "songs" WHERE name = 'Our Song'), 2024, 6, 57, now()),
((SELECT id FROM "songs" WHERE name = 'Our Song'), 2024, 7, 27, now()),
((SELECT id FROM "songs" WHERE name = 'Our Song'), 2024, 8, 106, now()),

((SELECT id FROM "songs" WHERE name = 'The Outside'), 2024, 6, 41, now()),
((SELECT id FROM "songs" WHERE name = 'The Outside'), 2024, 7, 47, now()),
((SELECT id FROM "songs" WHERE name = 'The Outside'), 2024, 8, 81, now()),

((SELECT id FROM "songs" WHERE name = 'Picture to Burn'), 2024, 6, 32, now()),
((SELECT id FROM "songs" WHERE name = 'Picture to Burn'), 2024, 7, 16, now()),
((SELECT id FROM "songs" WHERE name = 'Picture to Burn'), 2024, 8, 77, now()),

((SELECT id FROM "songs" WHERE name = 'A Place in This World'), 2024, 6, 39, now()),
((SELECT id FROM "songs" WHERE name = 'A Place in This World'), 2024, 7, 56, now()),
((SELECT id FROM "songs" WHERE name = 'A Place in This World'), 2024, 8, 25, now()),

((SELECT id FROM "songs" WHERE name = 'Should''ve Said No'), 2024, 8, 25, now()),
((SELECT id FROM "songs" WHERE name = 'Should''ve Said No'), 2024, 7, 7, now()),
((SELECT id FROM "songs" WHERE name = 'Should''ve Said No'), 2024, 6, 100, now()),

((SELECT id FROM "songs" WHERE name = 'Stay Beautiful'), 2024, 6, 70, now()),
((SELECT id FROM "songs" WHERE name = 'Stay Beautiful'), 2024, 7, 81, now()),
((SELECT id FROM "songs" WHERE name = 'Stay Beautiful'), 2024, 8, 52, now()),

((SELECT id FROM "songs" WHERE name = 'Teardrops on My Guitar'), 2024, 6, 90, now()),
((SELECT id FROM "songs" WHERE name = 'Teardrops on My Guitar'), 2024, 7, 57, now()),
((SELECT id FROM "songs" WHERE name = 'Teardrops on My Guitar'), 2024, 8, 63, now()),

((SELECT id FROM "songs" WHERE name = 'Tied Together with a Smile'), 2024, 6, 14, now()),
((SELECT id FROM "songs" WHERE name = 'Tied Together with a Smile'), 2024, 7, 97, now()),
((SELECT id FROM "songs" WHERE name = 'Tied Together with a Smile'), 2024, 8, 74, now()),

((SELECT id FROM "songs" WHERE name = 'Tim McGraw'), 2024, 6, 2, now()),
((SELECT id FROM "songs" WHERE name = 'Tim McGraw'), 2024, 7, 24, now()),
((SELECT id FROM "songs" WHERE name = 'Tim McGraw'), 2024, 8, 16, now()),

((SELECT id FROM "songs" WHERE name = 'Invisible'), 2024, 6, 46, now()),
((SELECT id FROM "songs" WHERE name = 'Invisible'), 2024, 7, 80, now()),
((SELECT id FROM "songs" WHERE name = 'Invisible'), 2024, 8, 62, now()),

((SELECT id FROM "songs" WHERE name = 'I''m Only Me When I''m with You'), 2024, 6, 0, now()),
((SELECT id FROM "songs" WHERE name = 'I''m Only Me When I''m with You'), 2024, 7, 43, now()),
((SELECT id FROM "songs" WHERE name = 'I''m Only Me When I''m with You'), 2024, 8, 64, now()),

((SELECT id FROM "songs" WHERE name = 'A Perfectly Good Heart'), 2024, 6, 100, now()),
((SELECT id FROM "songs" WHERE name = 'A Perfectly Good Heart'), 2024, 7, 102, now()),
((SELECT id FROM "songs" WHERE name = 'A Perfectly Good Heart'), 2024, 8, 16, now()),

((SELECT id FROM "songs" WHERE name = 'Eyes Open'), 2024, 6, 50, now()),
((SELECT id FROM "songs" WHERE name = 'Eyes Open'), 2024, 7, 9, now()),
((SELECT id FROM "songs" WHERE name = 'Eyes Open'), 2024, 8, 50, now()),

((SELECT id FROM "songs" WHERE name = 'Safe & Sound'), 2024, 8, 62, now()),
((SELECT id FROM "songs" WHERE name = 'Safe & Sound'), 2024, 7, 15, now()),
((SELECT id FROM "songs" WHERE name = 'Safe & Sound'), 2024, 6, 59, now()),

((SELECT id FROM "songs" WHERE name = 'Highway Don''t Care'), 2024, 6, 62, now()),
((SELECT id FROM "songs" WHERE name = 'Highway Don''t Care'), 2024, 7, 102, now()),
((SELECT id FROM "songs" WHERE name = 'Highway Don''t Care'), 2024, 8, 21, now()),

((SELECT id FROM "songs" WHERE name = 'Today Was a Fairytale'), 2024, 6, 61, now()),
((SELECT id FROM "songs" WHERE name = 'Today Was a Fairytale'), 2024, 7, 46, now()),
((SELECT id FROM "songs" WHERE name = 'Today Was a Fairytale'), 2024, 8, 22, now())
;
