CREATE TABLE "notes" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"create_ts" timestamp DEFAULT now() NOT NULL,
	"user_id" text NOT NULL
);
