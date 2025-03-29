import { SiteHeader } from "@/components/site-header";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
interface Props {
	children: React.ReactNode;
}

export default async function layout({ children }: Props) {
	const { userId } = await auth();
	if (!userId) redirect("/sign-in");

	return (
		<div className="flex h-full flex-col">
			<SiteHeader />
			<main className="flex-1">{children}</main>
		</div>
	);
}
