"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/actions";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters.",
	}),
});

export function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true);
		try {
			await sendEmail(values);

			toast.success("Message sent!", {
				description: "Thank you for your message. We'll get back to you soon.",
			});

			form.reset();
		} catch (error) {
			toast.error("Error", {
				description: `Filed to send message. Please try again, ${error}`,
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full max-w-2xl mx-auto space-y-8 mt-16"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base">Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Jane Smith"
										{...field}
										className="bg-background border-0 h-12 text-base"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base">Email</FormLabel>
								<FormControl>
									<Input
										placeholder="jane@framer.com"
										type="email"
										{...field}
										className="bg-background border-0 h-12 text-base"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base">Message</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Your message..."
									className="min-h-[150px] bg-background border-0 text-base resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="w-full bg-black text-white hover:bg-black/90 h-12 rounded-md text-base"
					disabled={isSubmitting}
				>
					{isSubmitting ? "Sending..." : "Submit"}
				</Button>
			</form>
		</Form>
	);
}
