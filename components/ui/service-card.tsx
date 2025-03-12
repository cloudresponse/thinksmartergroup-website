import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  imageSrc,
  className,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden shadow-none transition-all duration-500 hover:shadow-xl hover:scale-[1.02] md:max-w-96",
        className
      )}
    >
      <div className="relative h-48 w-full overflow-hidden -mt-6 -mx-px">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="">
        <CardTitle className="text-2xl font-semibold mb-2">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
