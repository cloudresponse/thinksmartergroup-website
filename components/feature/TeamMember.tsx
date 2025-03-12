import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGlobe, FaLinkedin } from "react-icons/fa";
import { type TeamMember } from "@/lib/interfaces/team";

export function TeamMember({
  name,
  role,
  subtitle,
  description,
  imageSrc,
  linkedinUrl,
  email,
  website,
}: TeamMember) {
  return (
    <div className="flex flex-col items-start h-full w-86 max-w-sm">
      <div className="relative w-full aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden group/card transition-all duration-500 ease-out hover:shadow-xl">
        <div className="absolute inset-0 w-full h-full ">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[200%] group-hover/card:translate-x-[200%] transition-transform duration-[1.5s] ease-in-out pointer-events-none"
            style={{ transform: "skewX(-15deg)" }}
            aria-hidden="true"
          />
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`Photo of ${name}`}
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <h3 className="text-2xl font-bold">{name}</h3>
        {linkedinUrl && (
          <Link
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-800"
          >
            <FaLinkedin size={20} />
          </Link>
        )}
        {website && (
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-800"
          >
            <FaGlobe size={20} />
          </Link>
        )}
        {email && (
          <Link
            href={`mailto:${email}`}
            className="text-gray-900 hover:text-gray-800"
          >
            <FaEnvelope size={20} />
          </Link>
        )}
      </div>

      {role && <p className="text-lg text-gray-900">{role}</p>}
      {subtitle && <p className="text-lg text-gray-900">{subtitle}</p>}
      <p className="text-gray-900 mt-2 flex-grow">{description}</p>
    </div>
  );
}
