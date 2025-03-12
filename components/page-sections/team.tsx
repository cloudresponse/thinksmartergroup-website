import { TeamMember as TeamMemberComponent } from "@/components/feature/TeamMember";
import { type TeamMember } from "@/lib/interfaces/team";
import ra from "@/app/images/profiles/ra.avif";
import gj from "@/app/images/profiles/gj.jpg";
import cf from "@/app/images/profiles/cf.jpg";

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

export function Team() {
  return (
    <section id="team" className="container mx-auto py-16">
      <h2 className="text-5xl font-bold text-center mb-16">Our Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
        {teamMembers.map((member) => (
          <TeamMemberComponent key={member.name} teamMember={member} />
        ))}
      </div>
    </section>
  );
}
