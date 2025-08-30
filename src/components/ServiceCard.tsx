import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Euro } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  rating?: number;
  provider: string;
  featured?: boolean;
}

export const ServiceCard = ({
  title,
  description,
  price,
  rating = 5,
  provider,
  featured = false
}: ServiceCardProps) => {
  return (
    <div className="glass-card p-6 space-y-4 relative">
      {featured && (
        <Badge variant="accent" className="absolute -top-2 -right-2">
          Consigliato
        </Badge>
      )}
      
      <div className="space-y-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{rating.toFixed(1)}</span>
        </div>
        <span className="text-muted-foreground">da {provider}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 font-bold text-lg">
          <Euro className="w-5 h-5" />
          {price}
        </div>
        <Button variant="hero" size="sm">
          Scopri di più
        </Button>
      </div>
    </div>
  );
};