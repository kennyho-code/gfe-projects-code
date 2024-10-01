import H2 from "@/components/H2";
import H3 from "@/components/H3";
import Text from "@/components/Text";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Joe Jackson",
    role: "Founder & CEO",
    imageUrl: "joe.jpg",
    description:
      "Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.",
  },
  {
    name: "Ash Karter",
    role: "Founder & CFO",
    imageUrl: "ash.png",
    description:
      "Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.",
  },
  {
    name: "Farias Amed",
    role: "Front End AI Engineer",
    imageUrl: "farias.png",

    description:
      "Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.",
  },
  {
    name: "Sarah Haust",
    role: "Dev Ops",
    imageUrl: "sarah.png",

    description:
      "Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.",
  },
];

function TeamSection() {
  return (
    <section className="flex flex-col gap-4 py-16">
      <div className="flex flex-col gap-4 text-center">
        <H3>Team</H3>
        <H2>Meet our team</H2>
        <Text>
          From skilled designers to tech-savvy developers, each member brings a
          unique perspective and expertise to the table.
        </Text>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row flex-wrap gap-x-8 gap-y-16 justify-center ">
          {teamMembers.map((teamMember) => (
            <TeamMemberCard key={teamMember.name} teamMember={teamMember} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ teamMember }: { teamMember: TeamMember }) {
  return (
    <div className="w-[311px] flex flex-col justify-center gap-2">
      <img
        className="object-cover"
        src={`/img/${teamMember.imageUrl}`}
        alt={`image of ${teamMember.name}`}
      />

      <div className="font-semibold">{teamMember.name}</div>
      <H3>{teamMember.role}</H3>
      <Text>{teamMember.description}</Text>
    </div>
  );
}

export default TeamSection;
