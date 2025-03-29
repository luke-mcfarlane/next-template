import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface Props {
	children: React.ReactNode;
}

export default async function layout({ children }: Props) {
	const { userId } = await auth();
	if (userId) redirect("/");

	return (
		<div className="flex h-full items-center justify-center bg-background">
			{children}
		</div>
	);
}
