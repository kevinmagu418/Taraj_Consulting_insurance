import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function PageHero({ title, subtitle, description, className }: PageHeroProps) {
  return (
    <section className={cn("bg-background py-20 lg:py-32 relative overflow-hidden", className)}>
      <div className="absolute right-0 top-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          {subtitle && (
            <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-6 block">
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-secondary mb-8 leading-[1.1]">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
