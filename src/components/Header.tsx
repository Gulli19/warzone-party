import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const PartyDropLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 64 64" role="img" aria-label="PartyDrop logo">
    <defs>
      <linearGradient id="pdg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="hsl(var(--primary))"/>
        <stop offset="1" stopColor="hsl(var(--primary-secondary))"/>
      </linearGradient>
    </defs>
    <path d="M32 6c-9.5 0-17.2 7.7-17.2 17.2 0 12.4 17.2 26.4 17.2 26.4s17.2-14 17.2-26.4C49.2 13.7 41.5 6 32 6z" fill="url(#pdg)"/>
    <path d="M20 24c0-6.6 5.4-12 12-12s12 5.4 12 12H20z" fill="#ffffff" fillOpacity=".9"/>
  </svg>
);

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 header-blur">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <PartyDropLogo />
            <span className="font-inter font-extrabold text-xl tracking-wide">PartyDrop</span>
            <Badge variant="outline" className="badge-glass text-xs text-muted-foreground">
              Beta MVP
            </Badge>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <Button variant="glass" size="sm" asChild>
              <a href="#eventi">Calendario</a>
            </Button>
            <Button variant="glass" size="sm" asChild>
              <a href="#marketplace">Marketplace</a>
            </Button>
            <Button variant="glass" size="sm" asChild>
              <a href="/pricing">Premium</a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="https://discord.gg/dvEzHX8nhH" target="_blank" rel="noopener">
                Discord <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button - placeholder for now */}
          <div className="md:hidden">
            <Button variant="glass" size="sm" asChild>
              <a href="https://discord.gg/dvEzHX8nhH" target="_blank" rel="noopener">
                Discord
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};