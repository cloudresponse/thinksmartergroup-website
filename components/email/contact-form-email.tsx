import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
	name: string;
	email: string;
	message: string;
}

export default function ContactFormEmail({
	name,
	email,
	message,
}: ContactFormEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>New Contact Form Submission from {name}</Preview>
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
						<Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
							Contact Form Submission
						</Heading>
						<Text className="text-black text-[14px] leading-[24px]">
							<strong>Name:</strong> {name}
						</Text>
						<Text className="text-black text-[14px] leading-[24px]">
							<strong>Email:</strong> {email}
						</Text>
						<Hr />
						<Section>
							<Heading className="text-black text-[18px] font-normal p-0 my-[30px] mx-0">
								Message:
							</Heading>
							<Text className="text-black text-[14px] leading-[24px]">
								{message}
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
