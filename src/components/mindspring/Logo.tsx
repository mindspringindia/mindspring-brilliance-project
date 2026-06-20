import { Sparkles } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${
          light ? "bg-white/15 text-white" : "bg-primary text-primary-foreground"
        }`}
      >
        <Sparkles className="h-5 w-5" />
      </div>
      <span
        className={`font-display text-xl font-bold tracking-tight ${
          light ? "text-white" : "text-primary"
        }`}
      >
        Mindspring
      </span>
    </div>
  );
}
