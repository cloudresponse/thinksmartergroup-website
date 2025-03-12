import { TeamMember as TeamMemberComponent } from "@/components/feature/TeamMember";
import { TeamMember } from "@/lib/interfaces/team";

const teamMembers: TeamMember[] = [
  {
    name: "Rohin Aggarwal",
    description: "Use positioning to fix topbars, sidebars, and backgrounds.",
    linkedinUrl: "https://www.linkedin.com/in/rohinaggarwal1/",
  },
  {
    name: "Grant Johnson",
    description: "Connect your site to the most popular apps out there.",
    linkedinUrl: "https://linkedin.com/in/grant--johnson",
    website: "https://cloudresponse.co.uk",
  },
  {
    name: "Chris",
    description: "Connect your site to the most popular apps out there.",
    linkedinUrl: "https://linkedin.com/in/grant--johnson",
    website: "https://cloudresponse.co.uk",
  },
];

export function Team() {
  return (
    <div id="team" className="w-full max-w-6xl mx-auto py-16">
      <h2 className="text-5xl font-bold text-center mb-16">Our Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
        {teamMembers.map((member) => (
          <TeamMemberComponent key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}
