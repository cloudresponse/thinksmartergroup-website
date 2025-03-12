import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaLinkedin } from "react-icons/fa";
import { type TeamMember } from "@/lib/interfaces/team";

export function TeamMember({
  name,
  role,
  description,
  imageSrc,
  linkedinUrl,
  website,
}: TeamMember) {
  return (
    <div className="flex flex-col items-start">
      <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`Photo of ${name}`}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>

      <div className="flex items-center gap-2">
        <h3 className="text-2xl font-bold">{name}</h3>
        {linkedinUrl && (
          <Link
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin size={20} />
          </Link>
        )}
        {website && (
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaGlobe size={20} />
          </Link>
        )}
      </div>

      {role && <p className="text-lg text-gray-600">{role}</p>}
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
