import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Investment } from "@/lib/interfaces/investment";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";

interface InvestmentCardProps {
  investment: Investment;
}

export default function InvestmentCard({ investment }: InvestmentCardProps) {
  return (
    <Link
      href={investment.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full aspect-[3/2]"
      data-testid="investment-card"
    >
      <Card className="h-full w-full overflow-hidden bg-card/80 shadow-none hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700">
        <CardContent className="h-full p-6 flex flex-col items-center justify-center relative">
          <Image
            src={investment.imageSrc}
            alt={investment.title}
            width={200}
            height={200}
            className="object-contain w-full h-auto max-h-[120px] transition-opacity duration-300 group-hover:opacity-0 p-6"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className="absolute inset-0 px-6 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {investment.title}
            </h3>
            <p className="text-foreground/80 text-sm leading-relaxed mb-4 line-clamp-3">
              {investment.description}
            </p>
          </div>
          <CardFooter className="absolute bottom-0 left-0 right-0 px-6">
            <div className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase mb-3">
                {investment.category}
              </p>
              <Separator className="mb-3" />
              <div className="flex items-center text-foreground">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  );
}
