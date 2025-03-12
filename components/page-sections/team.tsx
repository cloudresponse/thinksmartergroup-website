import { TeamMember } from "@/components/feature/TeamMember";
import { type TeamMember } from "@/lib/interfaces/team";
import ra from "@/app/images/profiles/ra.avif";
import gj from "@/app/images/profiles/gj.jpg";

const teamMembers: TeamMember[] = [
  {
    name: "Rohin Aggarwal",
    subtitle: "Founder",
    // description: "Use positioning to fix topbars, sidebars, and backgrounds.",
    linkedinUrl: "https://www.linkedin.com/in/rohinaggarwal1/",
    email: "rohin@thinksmartergroup.com",
    imageSrc: ra.src,
  },
  {
    name: "Grant Johnson",
    subtitle: "Founder",
    // description: "Connect your site to the most popular apps out there.",
    linkedinUrl: "https://linkedin.com/in/grant--johnson",
    website: "https://cloudresponse.co.uk",
    email: "grant@cloudresponse.co.uk",
    imageSrc: gj.src,
  },
  // {
  //   name: "Chris",
  //   description: "Connect your site to the most popular apps out there.",
  //   linkedinUrl: "https://linkedin.com/in/grant--johnson",
  //   website: "https://cloudresponse.co.uk",
  // },
];

export function Team() {
  return (
    <section id="team" className="container mx-auto px-4 py-16">
      <h2 className="text-5xl font-bold text-center mb-16">Our Team</h2>

      <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}
