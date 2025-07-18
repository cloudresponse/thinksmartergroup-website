"use client";

import { easeOut, motion } from "framer-motion";
import cf from "@/app/images/profiles/cf.jpg";
import gj from "@/app/images/profiles/gj.jpg";
import ra from "@/app/images/profiles/ra.avif";
import { TeamMember as TeamMemberComponent } from "@/components/feature/TeamMember";
import type { TeamMember } from "@/lib/interfaces/team";

const teamMembers: TeamMember[] = [
	{
		name: "Rohin Aggarwal",
		role: "Founder/Director",
		description: "Strategy, Product and Training",
		linkedinUrl: "https://www.linkedin.com/in/rohinaggarwal1/",
		email: "rohin@thinksmartergroup.com",
		imageSrc: ra.src,
	},
	{
		name: "Chris Fogtdal",
		role: "Principal",
		description: "Strategy Consulting",
		linkedinUrl: "https://www.linkedin.com/in/christoffer-f-a16b31bb/",
		imageSrc: cf.src,
	},
	{
		name: "Grant Johnson",
		role: "Head of Product",
		description: "Technology, Product and Training",
		// description: "Connect your site to the most popular apps out there.",
		linkedinUrl: "https://linkedin.com/in/grant--johnson",
		website: "https://cloudresponse.co.uk",
		email: "grant@cloudresponse.co.uk",
		imageSrc: gj.src,
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export function Team() {
	return (
		<section id="team" className="relative container mx-auto py-16">
			<motion.h2
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="text-5xl font-bold text-center"
			>
				Our Team
			</motion.h2>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12"
			>
				{teamMembers.map((member) => (
					<TeamMemberComponent key={member.name} teamMember={member} />
				))}
			</motion.div>
		</section>
	);
}
