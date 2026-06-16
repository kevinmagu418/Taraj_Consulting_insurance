import { CheckCircle2 } from "lucide-react";

export function TrustStrip() {
  const items = [
    "Trusted Insurance Advisors",
    "Fast Claims Assistance",
    "Tailored Solutions",
    "Nationwide Coverage",
  ];

  return (
    <div className="bg-primary py-6 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-bold uppercase tracking-wider md:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
