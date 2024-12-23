CREATE TYPE "public"."artistRole" AS ENUM('primary', 'featuring');--> statement-breakpoint
CREATE TABLE "albums" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "albums_uuid_unique" UNIQUE("uuid")
);
--> statement-breakpoint
CREATE TABLE "artists" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "artists_uuid_unique" UNIQUE("uuid")
);
--> statement-breakpoint
CREATE TABLE "song_artists" (
	"id" serial PRIMARY KEY NOT NULL,
	"song_id" integer,
	"artist_id" integer,
	"role" "artistRole" DEFAULT 'primary' NOT NULL,
	"sort_order" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "song_artists_song_id_artist_id_unique" UNIQUE("song_id","artist_id")
);
--> statement-breakpoint
CREATE TABLE "song_writers" (
	"id" serial PRIMARY KEY NOT NULL,
	"song_id" integer,
	"writer_id" integer,
	"sort_order" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "song_writers_song_id_writer_id_unique" UNIQUE("song_id","writer_id")
);
--> statement-breakpoint
CREATE TABLE "songs" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"album_id" integer,
	"released_year" integer,
	"total_plays" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "songs_uuid_unique" UNIQUE("uuid")
);
--> statement-breakpoint
CREATE TABLE "stats" (
	"id" serial PRIMARY KEY NOT NULL,
	"song_id" integer,
	"year" integer NOT NULL,
	"month" integer NOT NULL,
	"plays" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "stats_song_id_year_month_unique" UNIQUE("song_id","year","month"),
	CONSTRAINT "month" CHECK ("stats"."month" >= 1 AND "stats"."month" <= 12)
);
--> statement-breakpoint
CREATE TABLE "writers" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "writers_uuid_unique" UNIQUE("uuid")
);
--> statement-breakpoint
ALTER TABLE "song_artists" ADD CONSTRAINT "song_artists_song_id_songs_id_fk" FOREIGN KEY ("song_id") REFERENCES "public"."songs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "song_artists" ADD CONSTRAINT "song_artists_artist_id_artists_id_fk" FOREIGN KEY ("artist_id") REFERENCES "public"."artists"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "song_writers" ADD CONSTRAINT "song_writers_song_id_songs_id_fk" FOREIGN KEY ("song_id") REFERENCES "public"."songs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "song_writers" ADD CONSTRAINT "song_writers_writer_id_writers_id_fk" FOREIGN KEY ("writer_id") REFERENCES "public"."writers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "songs" ADD CONSTRAINT "songs_album_id_albums_id_fk" FOREIGN KEY ("album_id") REFERENCES "public"."albums"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stats" ADD CONSTRAINT "stats_song_id_songs_id_fk" FOREIGN KEY ("song_id") REFERENCES "public"."songs"("id") ON DELETE no action ON UPDATE no action;