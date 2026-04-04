import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

interface TeamProps {
  data: {
    name: string;
    role: string;
    desc: string;
    image: string;
  };
}

export default function TeamCard({ data }: TeamProps) {
  return (
    <div className="relative bg-white rounded-2xl p-6 border border-secondary-color shadow-[0_3px_0_0_#000]  transition">
      {/* linkedin icon */}
      <div className="absolute right-4 top-4 w-6 h-6 bg-black text-main-color rounded-full flex items-center justify-center text-xs">
        <FaLinkedinIn />
      </div>

      {/* top */}
      <div className="flex items-center gap-4">
        {/* avatar shape */}
        <div className="relative w-24 h-24">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover  p-1"
          />
        </div>

        <div>
          <h3 className="font-semibold text-base md:text-xl">{data.name}</h3>
          <p className="text-sm md:text-lg">{data.role}</p>
        </div>
      </div>

      <hr className="my-4" />

      <p className="text-sm md:text-lg leading-relaxed">{data.desc}</p>
    </div>
  );
}
