import { CreateNoteForm } from "@/components/forms/create-note-form";
import { NoteCards } from "@/components/note-cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function NotesPage() {
	return (
		<main className="container mx-auto p-4">
			<Card className="mb-8">
				<CardHeader>
					<CardTitle>Add New Note</CardTitle>
				</CardHeader>
				<CardContent>
					<CreateNoteForm />
				</CardContent>
			</Card>
			<NoteCards />
		</main>
	);
}
