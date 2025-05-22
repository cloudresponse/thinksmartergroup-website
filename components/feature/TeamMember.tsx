"use client";

import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGlobe, FaLinkedin } from "react-icons/fa";
import { type TeamMember } from "@/lib/interfaces/team";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TeamMemberProps {
  teamMember: TeamMember;
  className?: string;
  variants?: undefined;
}

export function TeamMember({
  teamMember,
  className,
  variants,
}: TeamMemberProps) {
  const { name, role, description, imageSrc, linkedinUrl, email, website } =
    teamMember;

  return (
    <motion.div variants={variants}>
      <Card
        className={cn(
          "group relative overflow-hidden shadow-none transition-all duration-500 hover:shadow-xl hover:scale-[1.02] md:max-w-96",
          className
        )}
      >
        <div className="relative h-86 w-full overflow-hidden -mt-6 -mx-px">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
        <CardContent className="">
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-2xl font-semibold">{name}</CardTitle>
            <div className="flex gap-3">
              {linkedinUrl && (
                <Link
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  >
                  <FaLinkedin className="w-5 h-5" />
                </Link>
              )}
              {email && (
                <Link
                  href={`mailto:${email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  >
                  <FaEnvelope className="w-5 h-5" />
                </Link>
              )}
              {website && (
                <Link
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  >
                  <FaGlobe className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
          <p className="">{role}</p>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
