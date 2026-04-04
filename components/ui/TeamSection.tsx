import TeamCard from "./TeamCard";

const teamData = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: "/images/team1.png",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: "/images/team2.png",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: "/images/team3.png",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: "/images/team4.png",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    desc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content",
    image: "/images/team5.png",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    desc: "2+ years of experience in writing and editing. Skilled in creating compelling SEO-optimized content",
    image: "/images/team6.png",
  },
];

export default function TeamSection() {
  return (
    <section className=" mb-10 md:mb-30 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className=" flex  md:flex-row flex-col gap-5 md:gap-10 mb-8 md:mb-16 ">
          <h1 className="text-2xl md:text-[40px] font-medium rounded-lg bg-main-color px-2 border border-main-color text-center">
            Team
          </h1>
          <p className="max-w-lg text-xs md:text-lg text-center">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {teamData.map((member, i) => (
            <TeamCard key={i} data={member} />
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <button className="bg-secondary-color text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-main-color hover:text-secondary-color">
            See all team
          </button>
        </div>
      </div>
    </section>
  );
}
