import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const notes = pgTable("notes", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	content: text("content").notNull(),
	createTs: timestamp("create_ts").defaultNow().notNull(),
	userId: text("user_id").notNull(),
});
