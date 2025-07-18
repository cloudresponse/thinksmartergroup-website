"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
	title: string;
	description: string;
	imageSrc: string;
	className?: string;
	href?: string;
	hrefText?: string;
	variants?: Variants;
}

export function ServiceCard({
	title,
	description,
	imageSrc,
	className,
	variants,
	href,
	hrefText,
}: ServiceCardProps) {
	return (
		<motion.div variants={variants}>
			<Card
				className={cn(
					"group relative overflow-hidden shadow-none transition-all duration-500 hover:shadow-xl hover:scale-[1.02] md:max-w-96 h-full flex flex-col",
					className,
				)}
			>
				<div className="relative h-48 w-full overflow-hidden -mt-6 -mx-px">
					<Image
						src={imageSrc}
						alt={title}
						fill
						className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<CardContent className="flex-1">
					<CardTitle className="text-2xl font-semibold mb-2">{title}</CardTitle>
					<p className="text-muted-foreground text-sm">{description}</p>
				</CardContent>
				{href && (
					<CardFooter className="flex justify-between mt-auto">
						<Link href={href} className="cursor-pointer">
							<Button>{hrefText || "Learn More"}</Button>
						</Link>
					</CardFooter>
				)}
			</Card>
		</motion.div>
	);
}
