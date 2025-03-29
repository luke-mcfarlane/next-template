"use server";

import { db } from "@/db";
import { notes } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { asc, eq } from "drizzle-orm";

export async function getNotes() {
	const user = await currentUser();
	if (!user) throw new Error("User not found");

	return db.query.notes.findMany({
		orderBy: [asc(notes.createTs)],
		where: eq(notes.userId, user.id),
	});
}

export async function createNote(title: string, content: string) {
	const user = await currentUser();
	if (!user) throw new Error("User not found");

	const newNote = await db
		.insert(notes)
		.values({
			title,
			content,
			userId: user.id,
		})
		.returning();

	return newNote[0];
}
