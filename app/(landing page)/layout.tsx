
import "../globals.css";
import LandingHeader from "@/components/ui/landingHeader";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <LandingHeader/>
        {children}
    </>
  );
}
