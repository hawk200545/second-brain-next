import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
type AuthLayoutProps = Readonly<{ children: ReactNode }>;

export default async function AuthLayout({ children }: AuthLayoutProps) {

  return (
    <>
      <svg width="0" height="0" className="pointer-events-none absolute">
        <filter id="grainy-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),rgba(13,13,13,0)_45%),radial-gradient(circle_at_70%_70%,rgba(200,200,200,0.35),rgba(0,0,0,0)_50%),radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.25),rgba(0,0,0,0)_55%)]" />
        <div
          className="absolute inset-0 opacity-70 mix-blend-screen bg-white/10"
          style={{ filter: "url(#grainy-filter)" }}
          aria-hidden="true"
        />
      </div>

      <div
        className={cn(
          "relative z-10 flex min-h-screen items-center justify-center px-4"
        )}
      >
        {children}
      </div>
    </>
  );
}
