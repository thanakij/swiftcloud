ALTER TABLE "song_artists" ALTER COLUMN "song_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "song_artists" ALTER COLUMN "artist_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "song_writers" ALTER COLUMN "song_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "song_writers" ALTER COLUMN "writer_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "stats" ALTER COLUMN "song_id" SET NOT NULL;