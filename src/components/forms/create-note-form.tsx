"use client";

import { Input } from "@/components/ui/input";
import { createNote } from "@/server/notes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
	title: z.string().min(1, {
		message: "Title is required.",
	}),
	content: z.string().min(1, {
		message: "Content is required.",
	}),
});

export const CreateNoteForm = () => {
	const queryClient = useQueryClient();
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			content: "",
		},
	});

	const { mutate, isPending } = useMutation({
		mutationFn: async (data: z.infer<typeof formSchema>) => {
			setIsLoading(true);

			await createNote(data.title, data.content);
		},
		onSuccess: () => {
			form.reset();
			queryClient.invalidateQueries({ queryKey: ["notes"] });

			setIsLoading(false);
		},
		onError: () => {
			setIsLoading(false);
		},
	});

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((data) => mutate(data))}
				className="flex flex-col gap-6"
			>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="content"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Content</FormLabel>
							<FormControl>
								<Textarea {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={isLoading}>
					{isLoading ? (
						<LoaderCircle className="h-4 w-4 animate-spin" />
					) : (
						"Create Note"
					)}
				</Button>
			</form>
		</Form>
	);
};
