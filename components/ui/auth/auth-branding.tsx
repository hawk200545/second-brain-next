'use client'
import secondBrain from "@/public/second-brain.svg"
import { cn } from "@/lib/utils";
import Image from "next/image";
type AuthBrandingProps = Readonly<{
  className?: string;
}>;

export function AuthBranding({ className }: AuthBrandingProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 text-center",
        className
      )}
    >
      <Image src={secondBrain} alt="Second Brain" width={100} className="dark:filter-[invert(1)]" />
      <div className="flex items-center gap-2 text-xl font-semibold text-foreground dark:text-white">
        <span>Second Brain</span>
      </div>
      <p className="text-sm text-muted-foreground dark:text-slate-200 max-w-xs leading-relaxed">
        Build a personal knowledge engine that captures ideas, connects insights, and
        resurfaces what matters right when you need it.
      </p>
    </div>
  );
}
