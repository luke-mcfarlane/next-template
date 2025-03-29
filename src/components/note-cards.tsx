"use client";

import { getNotes } from "@/server/notes";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const NoteCards = () => {
	const { data: notes } = useQuery({
		queryKey: ["notes"],
		queryFn: getNotes,
	});

	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{notes?.map((note) => (
				<Card key={note.id}>
					<CardHeader>
						<CardTitle>{note.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<p>{note.content}</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
};
