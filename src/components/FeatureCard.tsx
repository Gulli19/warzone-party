import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="glass-card p-6 space-y-3">
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      )}
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};