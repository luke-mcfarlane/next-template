import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function SiteHeader() {
	return (
		<header className="flex h-16 w-full items-center justify-between border-b bg-background p-4">
			<Link href="/">
				<span className="font-semibold text-lg">next-template</span>
			</Link>
			<UserButton />
		</header>
	);
}
