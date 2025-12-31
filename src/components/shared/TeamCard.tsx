import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

export interface TeamCardProps {
  name: string;
  level: "Expert Level" | "Intermediate" | "Amateur";
  location: string;
  schedule: string;
  size: string;
  imageUrl: string;
  logoUrl: string;
}

export function TeamCard({
  name,
  level,
  location,
  schedule,
  size,
  imageUrl,
  logoUrl,
}: TeamCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert Level":
        return "text-primary";
      case "Intermediate":
        return "text-green-400";
      case "Amateur":
        return "text-blue-400";
      default:
        return "text-primary";
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "Expert Level":
        return "verified";
      case "Intermediate":
        return "stars";
      case "Amateur":
        return "sports";
      default:
        return "verified";
    }
  };

  return (
    <div className="group bg-surface-dark rounded-xl overflow-hidden border border-surface-dark-highlight hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(127,19,236,0.15)] hover:-translate-y-1">
      <div
        className="h-40 bg-cover bg-center relative"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className="size-12 rounded-full border-2 border-surface-dark bg-white p-0.5">
            <img
              alt="Team Crest"
              className="w-full h-full rounded-full object-cover"
              src={logoUrl}
            />
          </div>
          <div>
            <h3 className="text-white text-lg font-bold leading-tight">
              {name}
            </h3>
            <div
              className={cn(
                "flex items-center gap-1 text-xs font-bold uppercase tracking-wider",
                getLevelColor(level)
              )}
            >
              <span className="material-symbols-outlined text-[14px]">
                {getLevelIcon(level)}
              </span>
              {level}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <span className="material-symbols-outlined text-[18px]">
              location_on
            </span>
            {location}
          </div>
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <span className="material-symbols-outlined text-[18px]">
              schedule
            </span>
            {schedule}
          </div>
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <span className="material-symbols-outlined text-[18px]">
              group
            </span>
            {size}
          </div>
        </div>
        <Button className="w-full h-10 gap-2 mt-auto">
          <span className="material-symbols-outlined text-[18px]">swords</span>
          Request Match
        </Button>
      </div>
    </div>
  );
}
