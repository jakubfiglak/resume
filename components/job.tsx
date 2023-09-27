import { cn } from "@/lib/utils";
import { CalendarDaysIcon } from "lucide-react";
import type { ReactNode } from "react";

export type JobProps = {
  children: ReactNode;
  title: string;
  company: { name: string; url: string };
  time: string;
  className?: string;
};

export const Job = ({
  children,
  title,
  company,
  time,
  className,
}: JobProps) => {
  return (
    <div className={cn("", className)}>
      <h3 className="font-bold text-base text-foreground">{title}</h3>
      <a href={company.url} className="font-bold text-sm">
        {company.name}
      </a>
      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1 mb-4">
        <CalendarDaysIcon className="h-4 w-4" /> {time}
      </div>
      <div className="[&_ul]:list-disc [&_ul]:list-inside">{children}</div>
    </div>
  );
};
